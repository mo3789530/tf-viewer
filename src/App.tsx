import React from 'react';
import './App.css';
import MenuAppBar from './components/Header';
import { InputFilde } from './components/Input';
import { View } from './components/View';

function App() {

  const [value, setValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.debug(event.target.value);
    setValue(event.target.value);
  };
  return (
    <div>
      <MenuAppBar />
      <div>
        <InputFilde value={value} handleChange={handleChange} />
        <View value={value}/>
      </div>

    </div>

  );
}

export default App;
