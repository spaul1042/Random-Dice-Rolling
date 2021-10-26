import React, { Component } from 'react';
import RollDice from './RollDice';
import './App.css';

class App extends Component {
  render(){
  return (
  <>
  <h2>DICE ROLLING GAME!!</h2>
   <div className="Container" >  
      <RollDice arr={[
      "one","two","three","four","five","six"
    ]}/>
   </div>
   </>
  );
  }




}

export default App;