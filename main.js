let rand = function() {
    return Math.floor(Math.random() * 2)
}

let populate = function () {
    let automaton = document.getElementById('automaton')
    for (let i = 0; i < 101; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < 101; j++) {
            const divElement = document.createElement('div');
            randomNumber = rand()
            if(randomNumber){
                divElement.classList.add('active')
            } else {
                divElement.classList.add('inactive')
            }
            row.appendChild(divElement)
        }
        automaton.appendChild(row)
    }
}

let nextgen = function () {
    let automatonNext = document.getElementById('automaton').cloneNode(true)
    for (let i = 0; i < 101; i++) {
        for (let j = 0; j < 101; j++) {
            let target = automatonNext.childNodes[i].childNodes[j]
            let nb = checknb(i,j)
            let alive = document.getElementById('automaton')
            .childNodes[i].childNodes[j].classList.contains('active')
            if (alive === true && (nb ===2 || nb === 3)) {
                target.classList.remove('inactive')
                target.classList.add('active')
            } else
            if (alive === false && nb === 3) {
                target.classList.remove('inactive')
                target.classList.add('active')
            } else
            if (alive === true && (nb < 2 || nb > 3)) {
                target.classList.remove('active')
                target.classList.add('inactive')
            } else
            if (alive === false && nb !== 3) {
                target.classList.remove('active')
                target.classList.add('inactive')
            }
        }
    }
    let board = document.getElementById('automaton').parentElement
    board.innerHTML = ""
    board.appendChild(automatonNext)
}

let checknb = function(x,y) {
    let nbcount = 0
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if(x+i < 0 || x+i > 100 || y+j < 0 || y+j > 100){
                continue
            }
            // console.log(i, j)
            if(document.getElementById('automaton')
            .childNodes[x+i].childNodes[y+j]
            .classList.contains('active') && !(j === 0 && i === 0) ) {
                nbcount++
            }
        }
    }
    return nbcount
}

document.addEventListener('DOMContentLoaded',
     event => {
         populate()
         setInterval(nextgen, 150)
        })