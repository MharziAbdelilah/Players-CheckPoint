import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import Players from '../10-data/Players';
import StackItem from '../1-component/StackItem';

function Player() {

  return (
    <Box>

  <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>      
  {Players.map((player) => {
    return(
      <Card key={player} sx={{ maxWidth: 320, m: 2, boxShadow: 3, borderRadius: 2, overflow: 'hidden'  }}>
      <CardMedia
        component="img"
        alt="Paolo Maldini"
        height="250"
        image= {player.imageUrl}
        sx={{ objectFit: 'cover', objectPosition:'top' }}
      />
      <CardContent sx={{ p: 3, backgroundColor: '#f5f5f5' }}>

        <Stack direction="row" justifyContent="space-between" alignItems={"center"} mb={2}>
          <Typography gutterBottom variant="body2" fontSize={25} component="p" fontWeight={600}>
            {player.Name}
          </Typography>
          <Typography variant="h6" component="p" fontWeight={600}>
            {player.age}
          </Typography>
        </Stack>

      <StackItem pro={player.nationality} id="Nationality"/>
      <StackItem pro={player.team} id="Team"/>
      <StackItem pro={player.jersyNumber} id="Jersy Number"/>
      </CardContent>
      {/* <CardActions sx={{ justifyContent: 'center', p: 2 }}>
        <Button size="small" variant="contained" color="primary" sx={{ mx: 1 }}>
          Share
        </Button>
        <Button size="small" variant="outlined" color="primary" sx={{ mx: 1 }}>
          Learn More
        </Button>
      </CardActions> */}
    </Card>
    )
  })}
        </Stack>
</Box>
  )
}

export default Player
