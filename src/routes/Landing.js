import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import backdrop from '../assets/backdrop.jpg'
import bigsur from '../assets/bigsur.png'

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
  width: 850px;
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${bigsur});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }

  & h4 {
    margin-top: 20px;
    font-size: 11px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
  }
`

const Action = styled.div`
  width: 140px;
  height: 24px;
  border-radius: 13px;
  background-color: rgb(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.5);
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;

  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: 0.3s ease-in-out;
`

const Home = () => {
  const [scale, setScale] = useState(1)
  const history = useHistory()

  const onScroll = () => {
    const percentage = getVerticalScrollPercentage(document.body)
    if (percentage === 100) {
      history.push('/home')
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Content scale={scale}>
        <Screen>
          <img src='https://github.com/dwc05101.png' alt='avatar' />
          <h4>Gwangjo Gong</h4>
          <Action visible={scale <= 1.9}>Scroll down to continue...</Action>
        </Screen>
      </Content>
    </Container>
  )
}

export default Home
