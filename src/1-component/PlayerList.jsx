
import React from 'react';
import Player1 from './Player1';
import Players from '../10-data/Players';
import { Box, Stack } from '@mui/material';
import './playerList.css';
import '../index.css';

function PlayerList() {
  return (
    <Box className="container">
      <Box className="content">
        <Stack  direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
          {Players.map((player1) => (
            <Player1  key={player1.Name} {...player1} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default PlayerList;



// import React from 'react'
// import Player1 from './Player1'
// import Players from '../10-data/Players'
// import { Box, Stack } from '@mui/material'
// import './playerList.css'
// import '../index.css'



// function PlayerList() {  

//   return (
//     <>
//     <Box className="container">

//       <Box className="content">

//     <Stack  direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} >
//       {/* i use map about lake a loop in my card and SPREAD OPERATOR about dismantling object */}
//       {Players.map((player1) => (
//       <Player1 key={player1.Name} {...player1}/>
//   ))}
//     </Stack>
//       </Box>
//     </Box>


//   </>
//   )
// }

// export default PlayerList


