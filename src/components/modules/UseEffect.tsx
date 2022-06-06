import { styled } from 'linaria/react'
import React, { FormEvent, useEffect, useRef, useState } from 'react'

export const UseEffect: React.FC = () => {
  // 第二引数を空配列にすることで初回読み込み時のみ処理を発火
  // 第二引数を設定しないとコンポーネントが更新される度に処理を発火
  // 第二引数にstate変数を入れるとその変数を監視し、更新されると処理を発火

  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    console.log('useEffectが実行されました')

    const interval = setInterval(() => {
      setCount((count) => count + 1)
      console.log('カウントが1アップしました')
    }, 1000)

    return () => {
      // アンマウント時の処理を書いておかないと裏で前回分の処理が走り続けて、、、(クリーンアップ関数)
      clearInterval(interval)
      console.log('コンポーネントがアンマウントしました')
    }
  }, [])

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  return (
    <>
      <Title>useEffect</Title>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      <Count>{count}</Count>

      <Json>
        <h3>Learn useEffect</h3>
        <div>
          {posts.map((post: any) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      </Json>
    </>
  )
}

const Title = styled.h2`
  margin-top: 40px;
  font-size: 30px;
  color: #f15f79;
`

const Count = styled.div`
  margin-top: 20px;
`

const Json = styled.div``
