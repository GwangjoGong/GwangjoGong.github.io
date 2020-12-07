import { useEffect, useState } from 'react'
import Typing from 'react-typing-animation'
import styled from 'styled-components'
import backdrop from '../assets/backdrop.jpg'

const Container = styled.div`
  width: 100vw;
  height: 300vh;
`

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backdrop});
  background-position: 50% 50%;
  background-size: 1920px 1200px;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${(props) => `scale(${props.scale},${props.scale})`};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Screen = styled.div`
  width: 844px;
  height: 493px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 48px;
    font-weight: bold;
  }

  & span {
    font-size: 18px;
    margin-top: 20px;
  }
`

const Home = () => {
  const [scale, setScale] = useState(1)

  const onScroll = () => {
    const percentage = getVerticalScrollPercentage(document.body)
    setScale(1 + percentage / 100)
  }

  const getVerticalScrollPercentage = (elm) => {
    var p = elm.parentNode,
      pos =
        ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) *
        100

    return Math.floor(pos)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Container>
      <Content scale={scale}>
        <Typing>
          <Screen>
            <h1>Gwangjo Gong</h1>
            <span>Scroll down to continue...</span>
          </Screen>
        </Typing>
      </Content>
    </Container>
  )
}

export default Home
