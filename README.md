Alfus is a chess AI using the minimax algorithm with alpha-beta pruning. It has a base search depth of 3 moves, with extensions when the last move is a capture to prevent the horizon effect. 

The static evaluation function takes the following factors into consideration:
- Piece values
- Position worth of pieces (for instance knights are given a penalty for being at the edge of the board)

Framworks and libraries used:
- React
- Chess js (chess rules engine)
- Chessboard js (graphical chess UI)
