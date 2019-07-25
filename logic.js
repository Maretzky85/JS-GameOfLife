export {game as default}
let game = {
    board: [],
    tempboard: [],
    mainActive: true,
    getBoard: function() {
        return this.mainActive ? this.board : this.tempboard
    },
    randBinary: function() {
        return Math.floor(Math.random() * 2)
    },
    init: function (x_size, y_size) {
        for (let i = 0; i < y_size; i++) {
            let row = []
            let row2 = []
            for (let j = 0; j < x_size ; j++) {
                row.push(!!this.randBinary());
                row2.push(false)
            }
            this.board.push(row)
            this.tempboard.push(row2)
        }
    },
    checknb: function(x_target,y_target) {
        let boardToCheck = this.mainActive ? this.board : this.tempboard
        let nb = 0
        for (let y = -1; y < 2; y++) {
            for (let x = -1; x < 2; x++) {
                if (x == 0 && y == 0){
                    continue
                }
                let currentx = x_target + x
                let currenty = y_target + y
                if (currentx < 0){
                    currentx = boardToCheck[0].length-1
                }
                if (currenty < 0){
                    currenty = boardToCheck.length-1
                }
                if (currentx === boardToCheck[0].length){
                    currentx = 0
                }
                if (currenty === boardToCheck.length){
                    currenty = 0
                }
                if (!!boardToCheck[currenty][currentx] && !(x === 0 && y === 0)){
                    nb++
                }
            }
        }
        return nb
    },
    nextGen: function(){
        let mainBoard = this.mainActive ? this.board : this.tempboard
        let secondBoard =  this.mainActive ? this.tempboard : this.board
        for (let y = 0; y < mainBoard.length; y++) {
            for (let x = 0; x < mainBoard[y].length; x++) {
                let nb = this.checknb(x,y)
                let alive = !!mainBoard[y][x]
                if (alive && (nb == 3 || nb == 2)){
                    secondBoard[y][x] = true
                } else
                if (alive && !(nb == 3 || nb == 2)) {
                    secondBoard[y][x] = false
                } else
                if (!alive && nb == 3){
                    secondBoard[y][x] = true
                }
                else {
                    secondBoard[y][x] = false
                }
            }
        }
        this.mainActive = !this.mainActive
    }
}
