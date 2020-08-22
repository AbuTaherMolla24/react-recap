import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['tuna','salman', 'kawser']
  return (
    <div className="App">
      <Nayok name={nayoks[0]}  age='5'></Nayok>
      <Nayok name={nayoks[1]}  age=''></Nayok>
      <Nayok name={nayoks[2]}  age=''></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}
function Nayok(props) {
  const nayokStyle = {
    border: '3px solid gray',
    margin: '20px'
  }
  return(
    <div style={nayokStyle}>
      <h1>ami tumar chilam na!{props.name} </h1>
      <h3>cheka khaichi yars  {props.age || '6'}</h3>
    </div>
  )
}

export default App;
