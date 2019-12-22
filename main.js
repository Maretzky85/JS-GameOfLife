import game from "./logic.js"
import view from "./view.js"

document.addEventListener('DOMContentLoaded',
     event => {
        game.init(100,100)
        let callback = (y, x) => {
            game.toggleCell(y,x)
            view.update(game.getBoard())
        }
        // let callback = game.toggleCell.bind(game)
        view.populate(game.getBoard(), callback)
        setInterval( () => {game.nextGen()
            view.update(game.getBoard())}, 10)
     })