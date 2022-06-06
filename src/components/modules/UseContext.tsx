import { styled } from 'linaria/react'
import React, { FormEvent, ReactNode, useContext, useEffect, useRef, useState } from 'react'
import { ContextA } from './ContextA'

interface ContextInterface {
  count: number
}

interface Props {
  children: ReactNode
}

const Context = React.createContext({} as ContextInterface)

export const UseContext: React.FC = () => {
  return (
    <>
      <Title>useContext</Title>
      {/* <Context.Provider> */}
      <ContextA />
      {/* </Context.Provider> */}
    </>
  )
}

const Title = styled.h2`
  margin-top: 40px;
  font-size: 30px;
  color: #f15f79;
`
