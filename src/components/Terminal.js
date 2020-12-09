import styled from 'styled-components'
import DelayedMessage from './DelayedMessage'

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

const Terminal = () => {
  return (
    <Container>
      <span>First Login: Jan 28 1998 on Daegu, South Korea</span>
      <span>Gwang-Jo-Gong% homepage --version</span>
      <span>homepage 1.0.0 (bigsur theme)</span>
      <DelayedMessage text='Hi, my name is Gwangjo Gong.' delay={1000} />
      <DelayedMessage
        text='I am a Full-stack Web Developer who is exploring cloud'
        delay={3000}
      />
      <DelayedMessage
        text='while facilitating the world with user experience with my design thinking skills and enthusiast about ML.'
        delay={6000}
      />
      <DelayedMessage
        text='I’m currently learning NestJS, Svelte'
        delay={10000}
      />
      <DelayedMessage
        text='Ask me about Full Stack Development, and any Tech-related stuff.'
        delay={12000}
      />
    </Container>
  )
}

export default Terminal
