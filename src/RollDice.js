import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props){
    super(props);
    this.state={
      die1:"one",
      die2:"one",
      is_rolling:false
    };
    this.roll= this.roll.bind(this);
    this.playagain= this.playagain.bind(this);
  }
  
  roll(e){
    let newdie1 = Math.floor(Math.random()*6);
    let newdie2 = Math.floor(Math.random()*6);
    let arr2 = this.props.arr;
    let x1 =arr2[newdie1];
    let x2 =arr2[newdie2];
    this.setState({
      die1:x1,
      die2:x2,
      is_rolling:true
    });

    setTimeout(
      ()=>{this.setState({is_rolling:false});},
      1000
    );

  }
  playagain(){
    this.setState({
      die1:"one",
      die2:"one",
      is_rolling:false
    });
  }
  render(){ 

  let x = this.state.is_rolling;
  function win(pram1, pram2){
    if(pram1==="six" || pram2==="six")
      return true;
    return false;
  }
  let boolean_win=win(this.state.die1, this.state.die2);

  return (
  <>

{boolean_win ?
      <div className="RollDice3">
      <h1>Congratulations You Won!!</h1>
      <button onClick={this.playagain}>Play Again</button>
      </div>
      :
      <div className="RollDice3">
      <button onClick={this.roll} disabled={x}> {x? "Rolling" : "Roll the dice"}</button> 
      </div>
      }

   <div className="RollDice1">
      <div className="RollDice2">
      <Die die_num ={this.state.die1}/>
      <Die die_num ={this.state.die2}/>
      </div>
   </div>

      

      
   </>
   
  );
  }
}

export default RollDice;