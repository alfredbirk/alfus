const pieceWorth = {
  p: 100,
  n: 320,
  b: 330,
  r: 500,
  q: 900,
  k: 20000,
}

const positionWorth = {
  p: {
    h1:0, g1:0, f1:0, e1:0, d1:0, c1:0, b1:0, a1:0,
    h2:50, g2:50, f2:50, e2:50, d2:50, c2:50, b2:50, a2:50,
    h3:10, g3:10, f3:20, e3:30, d3:30, c3:20, b3:10, a3:10,
    h4:5, g4:5, f4:10, e4:25, d4:25, c4:10, b4:5, a4:5,
    h5:0, g5:0, f5:0, e5:20, d5:20, c5:0, b5:0, a5:0,
    h6:5, g6:-5, f6:-10, e6:0, d6:0, c6:-10, b6:-5, a6:5,
    h7:5, g7:10, f7:10, e7:-20, d7:-20, c7:10, b7:10, a7:5,
    h8:0, g8:0, f8:0, e8:0, d8:0, c8:0, b8:0, a8:0,
  },
  n: {
    h1:-50, g1:-40, f1:-30, e1:-30, d1:-30, c1:-30, b1:-40, a1:-50,
    h2:-40, g2:-20, f2:0, e2:0, d2:0, c2:0, b2:-20, a2:-40,
    h3:-30, g3:0, f3:10, e3:15, d3:15, c3:10, b3:0, a3:-30,
    h4:-30, g4:5, f4:15, e4:20, d4:20, c4:15, b4:5, a4:-30,
    h5:-30, g5:0, f5:15, e5:20, d5:20, c5:15, b5:0, a5:-30,
    h6:-30, g6:5, f6:10, e6:15, d6:15, c6:10, b6:5, a6:-30,
    h7:-40, g7:-20, f7:0, e7:5, d7:5, c7:0, b7:-20, a7:-40,
    h8:-50, g8:-40, f8:-30, e8:-30, d8:-30, c8:-30, b8:-40, a8:-50,
  },
  b: {
    h1:-50, g1:-40, f1:-30, e1:-30, d1:-30, c1:-30, b1:-40, a1:-50,
    h2:-40, g2:-20, f2:0, e2:0, d2:0, c2:0, b2:-20, a2:-40,
    h3:-30, g3:0, f3:10, e3:15, d3:15, c3:10, b3:0, a3:-30,
    h4:-30, g4:5, f4:15, e4:20, d4:20, c4:15, b4:5, a4:-30,
    h5:-30, g5:0, f5:15, e5:20, d5:20, c5:15, b5:0, a5:-30,
    h6:-30, g6:5, f6:10, e6:15, d6:15, c6:10, b6:5, a6:-30,
    h7:-40, g7:-20, f7:0, e7:5, d7:5, c7:0, b7:-20, a7:-40,
    h8:-50, g8:-40, f8:-30, e8:-30, d8:-30, c8:-30, b8:-40, a8:-50,
  },
  r: {
    h1:0, g1:0, f1:0, e1:0, d1:0, c1:0, b1:0, a1:0,
    h2:5, g2:10, f2:10, e2:10, d2:10, c2:10, b2:10, a2:5,
    h3:-5, g3:0, f3:0, e3:0, d3:0, c3:0, b3:0, a3:-5,
    h4:-5, g4:0, f4:0, e4:0, d4:0, c4:0, b4:0, a4:-5,
    h5:-5, g5:0, f5:0, e5:0, d5:0, c5:0, b5:0, a5:-5,
    h6:-5, g6:0, f6:0, e6:0, d6:0, c6:0, b6:0, a6:-5,
    h7:-5, g7:0, f7:0, e7:0, d7:0, c7:0, b7:0, a7:-5,
    h8:0, g8:0, f8:0, e8:5, d8:5, c8:0, b8:0, a8:0,
  },
  q: {
    h1:-20, g1:-10, f1:-10, e1:-5, d1:-5, c1:-10, b1:-10, a1:-20,
    h2:-10, g2:0, f2:0, e2:0, d2:0, c2:0, b2:0, a2:-10,
    h3:-10, g3:0, f3:5, e3:5, d3:5, c3:5, b3:0, a3:-10,
    h4:-5, g4:0, f4:5, e4:5, d4:5, c4:5, b4:0, a4:-5,
    h5:0, g5:0, f5:5, e5:5, d5:5, c5:5, b5:0, a5:-5,
    h6:-10, g6:5, f6:5, e6:5, d6:5, c6:5, b6:0, a6:-10,
    h7:-10, g7:0, f7:5, e7:0, d7:0, c7:0, b7:0, a7:-10,
    h8:-20, g8:-10, f8:-10, e8:-5, d8:-5, c8:-10, b8:-10, a8:-20,
  },
  k: {
    h1:-30, g1:-40, f1:-40, e1:-50, d1:-50, c1:-40, b1:-40, a1:-30,
    h2:-30, g2:-40, f2:-40, e2:-50, d2:-50, c2:-40, b2:-40, a2:-30,
    h3:-30, g3:-40, f3:-40, e3:-50, d3:-50, c3:-40, b3:-40, a3:-30,
    h4:-30, g4:-40, f4:-40, e4:-50, d4:-50, c4:-40, b4:-40, a4:-30,
    h5:-20, g5:-30, f5:-30, e5:-40, d5:-40, c5:-30, b5:-30, a5:-20,
    h6:-10, g6:-20, f6:-20, e6:-20, d6:-20, c6:-20, b6:-20, a6:-10,
    h7:20, g7:20, f7:0, e7:0, d7:0, c7:0, b7:20, a7:20,
    h8:20, g8:30, f8:10, e8:0, d8:0, c8:10, b8:30, a8:20,
  }
}

var positionsConsidered = 0

export default function Ai(game) {
  console.log(game);
  console.log("*****************");
  positionsConsidered = 0
  var possibleMoves = game.moves();
  if (possibleMoves.length === 0) return;

  const bestMove = minimax(game, 0, -9999, 9999)
  //var randomIndex = Math.floor(Math.random() * possibleMoves.length);
  //const move = possibleMoves[randomIndex]
  return bestMove
}

function minimax(game, depth, a, b) {
  if (depth === 2 && game.turn() === 'w') {
    const evaluation = evaluate(game)
    //glog(game, evaluation)
    game.undo()
    return evaluation
  }

  var possibleMoves = game.moves();

  if (game.turn() === 'b')
  {
    var minVal = 9999
    var bestMove = null
    for(var i = 0; i < possibleMoves.length; i++) {
      const move = possibleMoves[i]
      game.move(move)

      const val = minimax(game, depth + 1, a, minVal)

      if (val < minVal) {
        minVal = val
        bestMove = move
      }

      if (val < a - 20) {
        break
      }
    };
    if (depth === 0) {
      console.log("Positions considered:", positionsConsidered);
      console.log("BEST MOVE:", bestMove);
      console.log("Evaluation:", minVal);

      return bestMove
    }

    game.undo()
    return minVal
  }

  if (game.turn() === 'w')
  {
    var maxVal = -9999
    var bestMove = null
    for(var i = 0; i < possibleMoves.length; i++) {
      const move = possibleMoves[i]
      game.move(move)

      const val = minimax(game, depth, maxVal, b)

      if (val > maxVal) {
        maxVal = val
        bestMove = move
      }

      if (val > b + 20) {
        break
      }
    };
    game.undo()
    return maxVal
  }


}

function glog(game, evaluation) {
  console.log("------------------");
  console.log("Evaluation:", evaluation);
  console.log("Positions considered:", positionsConsidered);
  console.log(game.ascii());
  console.log("------------------");
}

function evaluate(game) {
  positionsConsidered += 1
  let points = { w: 0, b: 0 }
  const s = game.SQUARES
  for(let i=0; i<s.length; i++) {
    const square = s[i]
    const piece = game.get(square)
    if(piece === null) {
      continue
    }
    points[piece.color] += pieceWorth[piece.type]
    if(piece.color === 'b') {
      points[piece.color] += positionWorth[piece.type][square]
    }
  }

  const e = points.w - points.b
  return e
}
