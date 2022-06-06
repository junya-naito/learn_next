import { styled } from 'linaria/react'
import { ContextC } from './ContextC'

export const ContextB: React.FC = () => {
  return (
    <>
      <Title>孫のコンポーネント</Title>
      <ContextC />
    </>
  )
}

const Title = styled.h2`
  margin-top: 15px;
  font-size: 15px;
  color: #f15f79;
`
