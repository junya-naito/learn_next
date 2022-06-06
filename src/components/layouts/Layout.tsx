import { styled } from 'linaria/react'
import React from 'react'
import { reset } from '../../styles/global'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <LWrap className={reset}>
        <Header />
        {props.children}
        <Footer />
      </LWrap>
    </>
  )
}

const LWrap = styled.div``
