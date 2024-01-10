import { Box } from '@mui/material'
import React from 'react'
import Loading from './Loading'
import  Content from './Content'
import Qcode from './Qcode'

function Blessing() {
  return (
    <Box>
          <Loading />
      {/* <Content/> */}
      <Qcode/>
    </Box>
  )
}

export default Blessing
