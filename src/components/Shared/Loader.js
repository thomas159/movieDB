import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000;
`

const Loader = () => {
 return (
    <Wrap>
      loading innit..
    </Wrap>
  )
}

export default Loader
