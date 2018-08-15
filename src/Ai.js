const worth = {
  p: 1,
  n: 3,
  b: 3,
  r: 5,
  q: 9,
  k: 0,
}

export default function Ai(game) {
  var possibleMoves = game.moves();
  if (possibleMoves.length === 0) return;

  const bestMove = minimax(game, 0)
  //var randomIndex = Math.floor(Math.random() * possibleMoves.length);
  //const move = possibleMoves[randomIndex]
  return bestMove
}

function minimax(game, depth) {
  if (depth === 1) {
    const evaluation = evaluate(game)
    glog(game, evaluation)
    game.undo()
    return evaluation
  }

  var possibleMoves = game.moves();

  let minVal = 9999
  let bestMove = null
  possibleMoves.forEach(function(move) {
    game.move(move)

    const val = minimax(game, depth + 1)
    if (val < minVal) {
      minVal = val
      bestMove = move
    }
  });

  console.log("BEST MOVE:", bestMove);
  console.log("Evaluation:", minVal);

  return bestMove
}

function glog(game, evaluation) {
  console.log("------------------");
  console.log("Evaluation:", evaluation);
  console.log(game.ascii());
  console.log("------------------");
}

function evaluate(game) {
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
  console.log("evaluation:", e);
  return e
}
