import React from 'react';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


function Square (props) {

    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }



class Board extends React.Component {

  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

handleClick = (index) => {
  const squares = [...this.state.squares];
  if (calculateWinner(squares) || squares[index]) {
      return;
    }

  squares[index] = this.state.xIsNext ? 'X' : 'O';
  this.setState({squares: squares, 
                xIsNext: !this.state.xIsNext
              });
}


reloadHandler = () => {
  this.setState({
        squares: Array(9).fill(null),
        xIsNext: true
})
}

  renderSquare(index) {
    return <Square value={this.state.squares[index]} onClick={() => this.handleClick(index)}/>;
  }


  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      setTimeout(this.reloadHandler, 1500)
      
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <React.Fragment>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <button className="reload" onClick={this.reloadHandler}>Reload</button>
      </React.Fragment>
    );
  }
}

const calculateWinner = (squares) => {
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

export default Game;