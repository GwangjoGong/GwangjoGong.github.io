import styled from 'styled-components'
import Draggable from 'react-draggable'

const Container = styled.div`
  width: 1000px;
  height: 600px;
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  border: 1px solid #d1d1d6;
`

const Header = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ecf0f1;
  border-radius: 5px 5px 0 0;
  cursor: move;
  padding: 0 5px;
  font-size: 10px;
  border-bottom: 1px solid #d1d1d6;
`

const ActionWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: default;
`

const Action = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  margin-right: 5px;

  cursor: default;

  &:hover {
    opacity: 0.7;
  }
`

const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
`

const Window = ({ children, title, close, top, left }) => {
  return (
    <Draggable>
      <Container top={top} left={left}>
        <Header>
          <ActionWrapper>
            <Action bg='#FF3C31' onClick={close}></Action>
            <Action bg='#FF9501'></Action>
            <Action bg='#35C759'></Action>
          </ActionWrapper>
          {title}
          <ActionWrapper style={{ visibility: 'hidden' }}>
            <Action bg='#FF3C31'></Action>
            <Action bg='#FF9501'></Action>
            <Action bg='#35C759'></Action>
          </ActionWrapper>
        </Header>
        <Content>{children}</Content>
      </Container>
    </Draggable>
  )
}

export default Window
