import { Box, Stack, Typography } from '@mui/material'
import React from 'react'


// this component about not repeat my code in CardContent look Player1.jsx in 1-component
function StackItem({pro , id}) {
  return (
  <Box  sx={{pt:"3px"}}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
      <Typography  gutterBottom variant="p" component="p" fontWeight={700}>
        {id} : 
      </Typography>
    
      <Typography fontSize={20} gutterBottom variant="p"  component="p" fontWeight={600}>
      {pro}
      </Typography>
      </Stack>
  </Box> 
    )
}
export default StackItem



