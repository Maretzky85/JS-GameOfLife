export {view as default}
let view = {
    viewBoard: {},
    populate: function (board, onCellChange) {
        this.viewBoard = document.getElementById('automaton')
        for (let y = 0; y < board.length; y++) {
            const row = document.createElement('div');
            for (let x = 0; x < board[0].length; x++) {
                const divElement = document.createElement('div');
                if (board[y][x]){
                    divElement.classList.add('active')
                } else {
                    divElement.classList.add('inactive')
                }
                
                row.appendChild(divElement)
                divElement.addEventListener('click', () => {
                    onCellChange(y, x);
                })
            }
            this.viewBoard.appendChild(row)
        }
    },
    update: function (board) {
        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[0].length; x++) {
                let target = this.viewBoard.childNodes[y].childNodes[x]
                if (board[y][x]) {
                    target.classList.remove('inactive')
                    target.classList.add('active')
                } else {
                    target.classList.remove('active')
                    target.classList.add('inactive')
                }
                
            }
        }   
    }
}