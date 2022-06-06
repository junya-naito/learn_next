import { styled } from 'linaria/react'
import React, { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { ContextB } from './ContextB'

export const ContextA: React.FC = () => {
  return (
    <>
      <Title>子供のコンポーネント</Title>
      <ContextB />
    </>
  )
}

const Title = styled.h2`
  margin-top: 15px;
  font-size: 15px;
  color: #f15f79;
`
