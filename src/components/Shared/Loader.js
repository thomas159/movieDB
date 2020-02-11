import React from 'react'
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

const Loader = () => (
  <Wrap>
    loading
  </Wrap>
)


export default Loader
