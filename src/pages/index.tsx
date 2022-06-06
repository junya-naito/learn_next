import { styled } from 'linaria/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { UseContext } from '../components/modules/UseContext'
import { UseEffect } from '../components/modules/UseEffect'
import { UseState } from '../components/modules/UseState'
SwiperCore.use([Pagination, Navigation])

const Home: NextPage = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation
        loop={true}
      >
        <SwiperSlide>
          <p>テスト</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>テスト</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>テスト</p>
        </SwiperSlide>
      </Swiper>

      <Title>
        <Link href='/about'>
          <a>Aboutページへ</a>
        </Link>
      </Title>

      <Title>useState</Title>

      <UseState />
      <UseEffect />
      <UseContext />
    </>
  )
}

const Title = styled.h1`
  color: #f15f79;
  font-size: 30px;
`

export default Home
