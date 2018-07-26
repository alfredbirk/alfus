const worth = {
  p: 1,
  n: 3,
  b: 3,
  r: 5,
  q: 9,
  k: 0,
}

function squares() {
  let s = []
  const letters = ['a','b','c','d','e','f','g','h']
  for(let i=0; i<letters.length;i++) {
    for(let j=1; j<9; j++) {
      s.push(letters[i].concat(j))
    }
  }
  return s
}

export default function Ai(game) {
  var possibleMoves = game.moves();
  // console.log("possibleMoves:");
  // console.log(possibleMoves);

  evaluate(game)

  if (possibleMoves.length === 0) return;

  var randomIndex = Math.floor(Math.random() * possibleMoves.length);
  const move = possibleMoves[randomIndex]
  return move

}

function evaluate(game) {
  let points = { w: 0, b: 0 }
  const s = squares()
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
