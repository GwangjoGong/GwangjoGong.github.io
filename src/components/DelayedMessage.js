import { useEffect, useState } from 'react'
import Typing from 'react-typing-animation'
import styled from 'styled-components'

const Text = styled.div`
  display: flex;
`

const DelayedMessage = ({ text, delay }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, delay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return show ? (
    <Text>
      <span>Gwang-Jo-Gong%&nbsp;</span>
      <Typing startDelay={500} speed={20}>
        {text}
      </Typing>
    </Text>
  ) : (
    ''
  )
}

export default DelayedMessage
