import { styled } from 'linaria/react'

export const ContextC: React.FC = () => {
  return (
    <>
      <Title>ひ孫のコンポーネント</Title>
    </>
  )
}

const Title = styled.h2`
  margin-top: 15px;
  font-size: 15px;
  color: #f15f79;
`
