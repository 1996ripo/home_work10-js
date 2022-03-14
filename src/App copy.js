import './App.css';
import { FaAngellist, FaRegHandRock, FaRegHandPaper } from "react-icons/fa";
import { useEffect, useState } from 'react';

function App() {

  const pcChoyces = [<FaAngellist />, <FaRegHandRock />, <FaRegHandPaper />];
  const resultList = {
    'scissorsscissors': 'DROW',
    'rockrock': 'DROW',
    'paperpaper': 'DROW',
    'paperrock': 'WIN',
    'scissorspaper': 'WIN',
    'rockscissors': 'WIN',
    'scissorsrock': 'LOSE',
    'paperscissors': 'LOSE',
    'rockpaper': 'LOSE',
  };



  const [pcRes, setPcRes] = useState('');
  const [uRes, setURes] = useState('');
  const [result, setResult] = useState('test');

  const resultFunction = (id) => {
    if (id === 'scissors') {
      setURes(<FaAngellist />);
    } else if (id === 'rock') {
      setURes(<FaRegHandRock />);
    } else {
      setURes(<FaRegHandPaper />);
    }
    let pc = pcChoyces[Math.floor(Math.random() * pcChoyces.length)];
    console.log(uRes);
    console.log(pc);
    setPcRes(pc);

  }


  return <main id='main' className='d-flex'>
    <div className='d-flex' id='people-choice'>

      <div id='svgScissors'><FaAngellist />
        <p id='scissors' onClick={
          (e) => {
            resultFunction(e.target.id)
          }} >Scissors</p>
      </div>

      <div id='svgRock'><FaRegHandRock />
        <p id='rock' onClick={
          (e) => {
            resultFunction(e.target.id)
          }}>Rock</p>
      </div>

      <div id='svgPaper'><FaRegHandPaper />
        <p id='paper' onClick={
          (e) => {
            resultFunction(e.target.id)
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
        {resultList[result]}
      </div>
    </div>
  </main>
}

export default App;
