import { useState } from 'react'
import './App.css'
import Board from './components/board/Board'

function App() {

  return (
    <>
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <div className="board">
                <Board />
            </div>
        </div>
    </>
  )
}

export default App
