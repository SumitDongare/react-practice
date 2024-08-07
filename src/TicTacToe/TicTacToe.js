import React, { useEffect, useState } from 'react'
import "./TicTacToe.css"

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [isXNext, setIsXNext]=useState(true)

  const [winner, setWinner] = useState(null)

   const handleClick = (index)=>{
    if(board[index]){
      return
    } 
       board[index] = isXNext ? 'X' : 'O';
       setIsXNext(!isXNext)
       setBoard([...board])

   }
   
   useEffect(()=>{
    console.log("Calculating Winner")
    const winner = calculateWinner(board)
    setWinner(winner)
    console.log("Winner is ", winner )

   }, [board])




  return ( <div>
     {winner ? <div> Winner is : {winner}</div> : <div>Next player: {isXNext ? "X" : "O"}</div> }

     

    <div className='game-board'>
      {
        board.map((value, index)=>{
        return  <div className='square' onClick={()=>{

          handleClick(index)
        }}> {value} </div>
        })
      }
      
      
    </div>
    </div>
  )
}

const calculateWinner = (board)=>{
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for(let i = 0; i<lines.length; i++){  //Loop on outer array = i=0
    const [a, b, c] = lines[i]    //a=0, b=1, c=2
    if(board[a]&& board[a]===board[b] && board[a] === board[c]){

       return board[a];

    }
   
  }
  return null;
}
