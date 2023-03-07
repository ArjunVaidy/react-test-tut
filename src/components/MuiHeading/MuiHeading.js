import { Typography, useTheme } from '@mui/material'
import React from 'react'

const MuiHeading = () => {
  // takes theme from MuiProviders.js
  const theme = useTheme();
  return (
    <>
    <Typography variant='h6'>
        {/* displays current palette mode */}
        {`${theme.palette.mode}`}
    </Typography>
    </>
  )
}

export default MuiHeading