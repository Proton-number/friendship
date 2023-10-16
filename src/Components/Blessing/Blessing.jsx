import { Box } from '@mui/material'
import React from 'react'
import Loading from './Loading'
import  Content from './Content'


function Blessing() {
  return (
    <Box>
          <Loading />
          <Content/>
    </Box>
  )
}

export default Blessing
