

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './player1.css';

function Player1({ Name, age, team, nationality, jerseyNumber, imageUrl }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card className="card-front">
            <CardMedia
              className="card-media"
              component="img"
              image={imageUrl}
              alt={Name}
            />
            <CardContent className="card-content">
              <Typography className="player-name" gutterBottom variant="h5" component="div">
                {Name}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className='cardBack' sx={{ borderRadius: "10px", width: 280, height: 300, margin: '10px' }}>
            <CardContent sx={{pt:"70px"}}>
              <Typography gutterBottom variant="h5" component="div">
                {Name}
              </Typography>
              <Box >
                <Typography pt={2} fontWeight={600}  fontSize={15}variant="body2">Team: {team}</Typography>
                <Typography pt={2} fontWeight={600} fontSize={15} variant="body2">Nationality: {nationality}</Typography>
                <Typography pt={2} fontWeight={600} fontSize={15} variant="body2">Jersey Number: {jerseyNumber}</Typography>
                <Typography  pt={2} fontWeight={600}  fontSize={15} variant="body2">Age: {age}</Typography>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Player1;


//  normal card //////////////////////////////////////
// import React from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import StackItem from './StackItem';
// import { Box } from '@mui/material';

// // i use destructuring  to access properties directly
// function Player1({Name , age ,team, nationality , jerseyNumber , imageUrl}) {

//   return (
//     <>
//     <Card  sx={{  borderRadius:"10px" ,  width: 280, margin: '10px'  , ":hover .MuiCardMedia-root":{ rotate:"3deg" ,  scale:"1.1" , transition:"0.3s" }}}>
  
//       <CardMedia
//         sx={{objectFit:"cover" , objectPosition:"top"}}
//         component="img"
//         height={250}
//         image={imageUrl}
//         alt={Name}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {Name}
//         </Typography>
//         <Box>
//             {/* look file StackItem.jsx in 1-Component */}
//           <StackItem pro={team} id="Team"/>
//           <StackItem pro={nationality} id="Nationality"/>
//           <StackItem pro={jerseyNumber} id="Jersey number"/>
//           <StackItem pro={age} id="age"/>
//         </Box>
//       </CardContent>
//     </Card>

//     </>



//   )
// }

// export default Player1

