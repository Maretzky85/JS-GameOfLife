import game from "./logic.js"
import view from "./view.js"

document.addEventListener('DOMContentLoaded',
     event => {
        game.init(100,100)
        view.populate(game.getBoard())
        setInterval( () => {game.nextGen()
            view.update(game.getBoard())}, 1)
     })