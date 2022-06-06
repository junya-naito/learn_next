import { styled } from 'linaria/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { UseEffect } from '../components/modules/UseEffect'
import { UseState } from '../components/modules/UseState'

const Home: NextPage = () => {
  return (
    <>
      <Title>
        <Link href='/'>
          <a>Indexページへ</a>
        </Link>
      </Title>
      <Title>useState</Title>
      <UseState />
      <UseEffect />
    </>
  )
}

const Title = styled.h1`
  color: #f15f79;
  font-size: 30px;
`

export default Home
