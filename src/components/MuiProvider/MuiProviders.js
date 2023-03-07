import React from 'react'
import { createTheme , ThemeProvider } from "@mui/material/styles";
import {CssBaseline} from "@mui/material"

const MuiProviders = (props) => {
  
  const theme = createTheme( {
    palette: {
        mode:'dark'
    }
  })
  
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
    </ThemeProvider>
  )
}

export default MuiProviders