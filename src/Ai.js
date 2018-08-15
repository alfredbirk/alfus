const worth = {
  p: 1,
  n: 3,
  b: 3,
  r: 5,
  q: 9,
  k: 0,
}

var positionsConsidered = 0

export default function Ai(game) {
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

      if (val < a) {
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

      if (val > b) {
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
    const piece = game.get(s[i])
    if(piece === null) {
      continue
    }
    points[piece.color] += worth[piece.type]
  }

  const e = points.w - points.b
  return e
}
