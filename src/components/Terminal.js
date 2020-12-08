import styled from 'styled-components'
import Typing from 'react-typing-animation'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #262626;
  color: white;
  font-size: 14px;
  padding: 5px;
  line-height: 1.3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Text = styled.div`
  display: flex;
`

const Terminal = () => {
  return (
    <Container>
      <span>First Login: Jan 28 1998 on Daegu, South Korea</span>
      <span>Gwang-Jo-Gong% homepage --version</span>
      <span>homepage 1.0.0 (bigsur theme)</span>
      <Text>
        <span>Gwang-Jo-Gong%&nbsp;</span>
        <Typing>
          <Typing.Delay ms={1000} />
          Hi, This is a term screen :)
        </Typing>
      </Text>

      {/* <Text>
        <span>Gwang-Jo-Gong%&nbsp;</span>
        <Typing>
          <Typing.Delay ms={2000} />
          Nice to meet you!
        </Typing>
      </Text> */}
    </Container>
  )
}

export default Terminal
