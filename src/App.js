
import './App.scss';
import React from 'react';
import data from './data'
import Questions from './Questions';

function App() {


  return (
    <>
    <div className="container">
      <h4 className="title">Questions And Answers About Login
      </h4>
      <ul>
      {data.map((el, i) => {
        return (
          <Questions el= {el} i= {i}  />
        )
      })}
        
        
      </ul>
    </div> 
    </>
  );
}

export default App;
