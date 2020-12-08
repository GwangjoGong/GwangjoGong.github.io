import { useEffect, useState } from 'react'
import styled from 'styled-components'
import bigsur from '../assets/bigsur.png'
import chrome from '../assets/chrome_icon.png'
import mail from '../assets/mail_icon.png'
import message from '../assets/message_icon.png'
import note from '../assets/note_icon.png'
import terminal from '../assets/term_icon.png'
import { Spin } from 'antd'
import {
  GithubFilled,
  LoadingOutlined,
  WifiOutlined,
  SearchOutlined,
  MenuOutlined
} from '@ant-design/icons'
import Window from '../components/Window'
import Terminal from '../components/Terminal'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bigsur});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const LoadingScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: 1s ease-in-out;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${bigsur});
  background-size: cover;
  background-position: center center;

  opacity: ${(props) => (props.loading === 'true' ? '1' : '0')};
  z-index: ${(props) => (props.loading === 'true' ? '1' : '-1')};
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }

  & h4 {
    margin-top: 40px;
    font-size: 22px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
  }
`

const Loader = styled.div`
  width: 280px;
  height: 52px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  width: 100%;
  height: 25px;
  background: rgba(255, 255, 255, 0.4);

  display: flex;
  align-items: center;
  padding: 0 10px;
`

const Title = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: white;
  padding: 0 10px;
  padding-bottom: 2px;

  height: 100%;
  background: transparent;
  outline: none;
  border: none;

  &:active {
    background: #027aff;
  }
`

const Option = styled.button`
  font-size: 12px;
  color: white;
  padding: 0 10px;
  padding-bottom: 2px;
  display: flex;
  align-items: center;
  height: 100%;
  background: transparent;
  outline: none;
  border: none;

  &:active {
    background: #027aff;
  }
`

const Dock = styled.div`
  height: 90px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  padding: 10px 5px;
  margin-top: auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`

const DockIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${(props) => `url(${props.url})`};
  background-size: cover;
  background-position: center center;
  margin: 0 5px;
`

const DockDivider = styled.div`
  height: 100%;
  width: 1px;
  background: rgba(0, 0, 0, 0.3);
  margin: 0 10px;
`

const antIcon = (
  <LoadingOutlined
    style={{ fontSize: 24, color: 'rgba(255,255,255,0.5)' }}
    spin
  />
)

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [showTerm, setShowTerm] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const moveToGithub = () => {
    window.open('https://github.com/dwc05101', '_blank')
  }

  return (
    <Container>
      <Header>
        <Option onClick={moveToGithub}>
          <GithubFilled style={{ color: 'white', fontSize: 18 }} />
        </Option>
        <Title>Gong</Title>
        <Option>These</Option>
        <Option>Are</Option>
        <Option>Just</Option>
        <Option>For</Option>
        <Option>Design</Option>
        <Option style={{ marginLeft: 'auto' }}>
          <WifiOutlined style={{ color: 'white', fontSize: 18 }} />
        </Option>
        <Option>(화) 오후 3:10</Option>
        <Option>
          <SearchOutlined style={{ color: 'white', fontSize: 18 }} />
        </Option>
        <Option>
          <MenuOutlined style={{ color: 'white', fontSize: 18 }} />
        </Option>
      </Header>
      {showTerm && (
        <Window
          title='GwangjoGong — dwc05101@kaist.ac.kr— ~ — -zsh — 89*27'
          top={100}
          left={100}
          close={() => {
            setShowTerm(false)
          }}>
          <Terminal />
        </Window>
      )}
      <Dock>
        <DockIcon url={chrome} />
        <DockIcon url={mail} />
        <DockIcon url={message} />
        <DockIcon url={note} />
        <DockDivider />
        <DockIcon
          url={terminal}
          onClick={() => {
            setShowTerm(true)
          }}
        />
      </Dock>
      <LoadingScreen loading={loading.toString()}>
        <img src='https://github.com/dwc05101.png' alt='avatar' />
        <h4>Gwangjo Gong</h4>
        <Loader>
          <Spin indicator={antIcon} />
        </Loader>
      </LoadingScreen>
    </Container>
  )
}

export default Home
