import React from 'react';
import './App.css';
import MenuAppBar from './components/Header';
import { InputFilde } from './components/Input';
import { View } from './components/View';
import { Box } from '@mui/material';

function App() {

  const [value, setValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.debug(event.target.value);
    setValue(event.target.value);
  };
  return (
    <div>
      <MenuAppBar/>
      <Box display={'flex'} flexDirection={'row'}>
        <InputFilde value={value} handleChange={handleChange} maxWidth={'50%'}/>
        <View value={value}></View>
      </Box>

    </div>

  );
}

export default App;
