import React, { useState } from 'react';
import { Button } from 'antd';
import styled from '@emotion/styled';

const Square = (prop:any) => {
  const { value, onClick } = prop;

  return (
    <ButtonDiv style={{ color: value === 'x' ? 'red' : '#000'}} onClick={() => onClick()}>{value}</ButtonDiv>
  )
}

const Board = (prop:any) => {
  const { squares, onClick } = prop;

  return (
    <div>
      <div className="board">
        {
          squares.map((item: string, index: number) => (
            <Square key={index} value={item} onClick={() => onClick(index)} />
          ))
        }
      </div>
    </div>
  )
}

const TicTacToe = () => {
  const [history, setHistory] = useState([{squares: Array(9).fill(' ')}]);
  const [xIsNext, setXIsNext] = useState(true);
  const current = history[history.length - 1];
  const [stepNumber, setStepNumber] = useState(0);

  const toJump = (index: number) => {
    console.log(index, 'index')
    setStepNumber(index)
    const historyList = history.slice(index);
    setHistory(historyList)

  }

  const handleClick = (index: number) => {
    const historyList = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const currentSquares = current.squares.slice();
    
    console.log(Boolean(calculateWinner(currentSquares) || currentSquares[index]));

    // if (calculateWinner(currentSquares) || currentSquares[index]) {
    //   return;
    // }
    currentSquares[index] = xIsNext ? 'x' : 'o';
    setHistory(history.concat([
      {
        squares: currentSquares
      }
    ]))
    setXIsNext(!xIsNext)
    setStepNumber(historyList.length)
  }

  const moves = history.map((step, index) => {
    const desc = index ? `回到第 ${index} 步` : '重新开始';
    return (
      <Button key={index} type="link" block onClick={() => toJump(index)}>{desc}</Button>
    )
  })

  return (
    <Con>
      <div className="title">井字棋游戏</div>
      <div className="message">next player： {xIsNext ? 'X' : 'O'}</div>
      <div className="toe">
        <div>
          <Board squares={current.squares} onClick={(i: number) => handleClick(i)}/>
        </div>
        <div className="game-info">
          {moves}
        </div>
      </div>
    </Con>
  )
}

const calculateWinner = (squares:any) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;

const ButtonDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #ddd;
  line-height: 100px;
  text-align: center;
  float: left;
  font-size: 40px;
`;

const Con = styled.div`
  .board {
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .title {
    text-align: center;
    font-size: 16px;
  }
  .toe {
    display: flex;
  }
  .game-info {
    width: 300px;
  }
  .message {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;