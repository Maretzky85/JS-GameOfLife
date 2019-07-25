export {game as default}
let game = {
    board: [],
    tempboard: [],
    getBoard: function() {
        return this.board
    },
    randBinary: function() {
        return Math.floor(Math.random() * 2)
    },
    init: function (x_size, y_size) {
        for (let i = 0; i < y_size; i++) {
            let row = []
            for (let j = 0; j < x_size ; j++) {
                row.push(!!this.randBinary());
            }
            this.board.push(row)
        }
    },
    checknb: function(x_target,y_target) {
        let nb = 0
        for (let y = -1; y < 2; y++) {
            for (let x = -1; x < 2; x++) {
                if (x == 0 && y == 0){
                    continue
                }
                let currentx = x_target + x
                let currenty = y_target + y
                if (currentx < 0){
                    currentx = this.board[0].length-1
                }
                if (currenty < 0){
                    currenty = this.board.length-1
                }
                if (currentx === this.board[0].length){
                    currentx = 0
                }
                if (currenty === this.board.length){
                    currenty = 0
                }
                if (!!this.board[currenty][currentx] && !(x === 0 && y === 0)){
                    nb++
                }
            }
        }
        return nb
    },
    nextGen: function(){
        this.tempboard = []
        for (let y = 0; y < this.board.length; y++) {
            let row = []
            for (let x = 0; x < this.board[y].length; x++) {
                let nb = this.checknb(x,y)
                let alive = !!this.board[y][x]
                if (alive && (nb == 3 || nb == 2)){
                    row.push(true)
                } else
                if (alive && !(nb == 3 || nb == 2)) {
                    row.push(false)

                    continue
                } else
                if (!alive && nb == 3){
                    row.push(true)

                }
                else {
                    row.push(false)
                }
            }
            this.tempboard.push(row)
        }

        this.board = this.tempboard
    }
}
