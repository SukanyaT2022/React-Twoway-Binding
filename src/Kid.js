import { Divider } from '@chakra-ui/react'
import React from 'react'

const Kid = (props) => {
  props.keyData("HELLO FROM KID Hey!");
  return (
 <div>
    <h2>Hello from child</h2>
   
 </div>
  )
}

export default Kid