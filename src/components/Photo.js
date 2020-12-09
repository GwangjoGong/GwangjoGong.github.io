import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const SideMenu = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  background: #e0e0e0f2;
  border-radius: 0 0 0 5px;
  border-right: 1px solid #d1d1d6;
`

const MenuTitle = styled.h4`
  font-size: 12px;
  font-weight: 600;
  color: #8e8e93;
  margin-bottom: 5px;
  padding: 0 10px;
`

const MenuItem = styled.div`
  width: 100%;
  padding: 5px 25px;
  font-size: 14px;
  color: #2c2c2e;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.current === 'true' ? '#C7C7CCF2' : 'transparent'};
`

const Content = styled.div`
  flex: 1 1 0;
  background: white;
  border-radius: 0 0 5px 0;
  overflow: auto;
`
const Photo = () => {
  const [current, setCurrent] = useState(2020)
  return (
    <Container>
      <SideMenu>
        <MenuTitle>Year</MenuTitle>
        <MenuItem
          current={(current === 2020).toString()}
          onClick={() => {
            setCurrent(2020)
          }}>
          2020
        </MenuItem>
        <MenuItem
          current={(current === 2019).toString()}
          onClick={() => {
            setCurrent(2019)
          }}>
          2019
        </MenuItem>
        <MenuItem
          current={(current === 2018).toString()}
          onClick={() => {
            setCurrent(2018)
          }}>
          2018
        </MenuItem>
      </SideMenu>
      <Content></Content>
    </Container>
  )
}

export default Photo
