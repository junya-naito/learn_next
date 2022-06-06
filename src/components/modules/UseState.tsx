import { styled } from 'linaria/react'
import React, { FormEvent, useState } from 'react'

interface LoginForm {
  userId: string
  password: string
}

export const UseState: React.FC = () => {
  // カウントするものを作る
  const [count, setCount] = useState(0)

  // 真偽値でuseStateを使う
  const [power, setPower] = useState(true)

  // formDataが変数でsetFormDataメソッドを使用してformDataの値を変更するイメージ
  // useStateの()内で設定しているのがformData変数の初期値
  // フォームの実装でよく使う
  const [formData, setFormData] = useState<LoginForm>({
    userId: '',
    password: '',
  })

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('ログインボタン押下', formData)
  }

  // setFormDataメソッドで変数formDataの値を書き換えてformDataに格納
  const formUserId = (e: any) => setFormData({ ...formData, userId: e.target.value })
  const formUserPassword = (e: any) => setFormData({ ...formData, password: e.target.value })

  return (
    <>
      <Count>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>1増やす</button>
        <button onClick={() => setCount(count - 1)}>1減らす</button>
      </Count>
      <Button>
        {/* 三項演算子 */}
        <h1>電源 {power ? 'ON' : 'OFF'} </h1>
        <button onClick={() => setPower(true)}>ON</button>
        <button onClick={() => setPower(false)}>OFF</button>
        {/* 前の値を利用して切り替える */}
        <button onClick={() => setPower((test) => !test)}>ON/OFF</button>
      </Button>

      <Form onSubmit={submitHandler}>
        <div>
          <label htmlFor='userId'>ユーザーID</label>
          <input
            id='userId'
            type='text'
            name='useId'
            placeholder='ユーザーID'
            value={formData.userId}
            onChange={formUserId}
          />
        </div>
        <div>
          <label htmlFor='password'>パスワード</label>
          <input
            id='password'
            type='password'
            name='password'
            placeholder='パスワード'
            value={formData.password}
            onChange={formUserPassword}
          />
        </div>
        <div>
          <button type='submit'>ログイン</button>
        </div>
      </Form>
    </>
  )
}

const Count = styled.div`
  padding: 20px 0;
  div {
    font-size: 30px;
  }
  button {
    margin-right: 10px;
  }
`

const Form = styled.form`
  div {
    margin-top: 20px;
  }
`

const Button = styled.form`
  padding: 20px 0;

  button {
    display: block;
    margin: 5px 0;
  }
`
