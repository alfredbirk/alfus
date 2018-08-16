import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chess from 'chess.js'
import Chessboard from 'react-chessboardjs'
import Ai from './Ai'

class App extends Component {
  constructor(props) {
    super(props)
    let g = new Chess();
    this.state = {
      game: g,
      pos: "start"
    }
  }

  onDragStart(source, piece, position, orientation) {
    if (this.state.game.in_checkmate() === true || this.state.game.in_draw() === true ||
      piece.search(/^b/) !== -1) {
      console.log(this.state.game.history());
      return false;
    }
  };

  makeAiMove(move) {
    console.log("AI move:", move);
    this.state.game.ugly_move(move)
    this.setState({
      pos: this.state.game.fen()
  })
}

  onDrop(source, target) {
    // see if the move is legal

    var move = this.state.game.move({
      from: source,
      to: target,
      promotion: 'q' // NOTE: always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return 'snapback';


    // make random legal move for black
    window.setTimeout(() => {
      const aiMove = Ai(this.state.game)
      this.makeAiMove(aiMove)}
      , 50);

  };

  // update the board position after the piece snap
  // for castling, en passant, pawn promotion
  onSnapEnd() {
    this.setState({
      pos: this.state.game.fen()
  })
}


  render() {

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Alfus 1.0</h1>
          </header>
          <br/>
          <div style={{ width: '400px', display: 'inline-block'}} >
            <Chessboard
              draggable={true}
              fen={this.state.pos}
              onDragStart={(square, piece, fen, orientation) => this.onDragStart(square, piece, fen, orientation)}
              onDrop={(source, target) => this.onDrop(source, target)}
              onSnapEnd={() => this.onSnapEnd()}
             />
          </div>
        </div>
    );
  }
}

export default App;
