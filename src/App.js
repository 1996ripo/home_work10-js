import './App.css';
import { FaAngellist, FaRegHandRock, FaRegHandPaper } from "react-icons/fa";
import { useEffect, useState } from 'react';

const pcChoyces = ['scissors', 'rock', 'paper'];


function App() {

  const [pcRes, setPcRes] = useState('');
  const [uRes, setURes] = useState('');
  const [result, setResult] = useState('');

  const handlUserChoys = (id) => {
    const pc = pcChoyces[Math.floor(Math.random() * pcChoyces.length)];
    setPcRes(pc);
    if (pc === id) {
      setResult('DROW');
      setURes(id);
    } else if (id === 'scissors') {
      if (pc === 'rock') {
        setResult('LOSE');
      } else {
        setResult('WIN')
      };
      setURes('scissors');
    } else if (id === 'rock') {
      if (pc === 'paper') {
        setResult('LOSE');
      } else {
        setResult('WIN')
      };
      setURes('rock');
    } else {
      if (pc === 'scissors') {
        setResult('LOSE');
      } else {
        setResult('WIN')
      };
      setURes('paper');
    }

  }


  return <main id='main' className='d-flex'>
    <div className='d-flex' id='people-choice'>
      <div id='svgScissors'><FaAngellist />
        <p id='scissors' onClick={
          (e) => {
            handlUserChoys(e.target.id)
          }} >Scissors</p>
      </div>

      <div id='svgRock'><FaRegHandRock />
        <p id='rock' onClick={
          (e) => {
            handlUserChoys(e.target.id)
          }}>Rock</p>
      </div>

      <div id='svgPaper'><FaRegHandPaper />
        <p id='paper' onClick={
          (e) => {
            handlUserChoys(e.target.id)
          }} >Paper</p>
      </div>

    </div>

    <div id='result'>
      <h1 style={{ color: "black" }}>RESULT</h1>
      <div id='message'></div>
      <div className='d-flex'>
        <div>
          <h2 style={{ color: "yellowgreen" }}>YOU</h2>
          <div id='u-res'>{uRes}</div>
        </div>
        <div>
          <h2 style={{ color: "burlywood" }}>PC</h2>
          <div id='pc-res'>{pcRes}</div>
        </div>
      </div>
      <div id='showResult' className='d-flex'>
        {result}
      </div>
    </div>
  </main>
}

export default App;
