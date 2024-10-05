import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Card from "./Card.jsx"
import { backendUrl } from './constants.js'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
import Grid from '@mui/material/Grid2';

async function fetchData({state,setState}){
  const res = await fetch(`${backendUrl}/services`);
  state.services = await res.json();
  setState({...state});

}
function App() {
  const [state,setState] = useState({services:[]})
  useEffect(()=>{
    fetchData({state,setState})
  },[]) 
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container spacing={2}>
        {state.services.map((service,n) => <Card key={n} config={service}/>)}
      </Grid>
    </ThemeProvider>
  )
}

export default App
