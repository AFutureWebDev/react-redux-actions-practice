import React from 'react';
import {connect} from "react-redux";
import { decreaseCounter, increaseCounter } from '../actions';

const mapDispatchToProps = {
  decrease:decreaseCounter,
  increase: increaseCounter
};


function CounterButton(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            if(props.increase){
              props.increase();
            }
          }
        }>Increase Counter By One</button>
        <button onClick={
          ()=>{
            if(props.increase){
              props.decrease();
            }
          }
        }>Decrease Counter By One</button>
      </div>
  );
}
export default connect(null, mapDispatchToProps)(CounterButton);