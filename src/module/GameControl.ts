import Food from './food';
import Snake from './Snake';
import ScorePanel from './ScorePanel';
class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';
    isLive = true;
    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    init() {
        //bind keyboard action
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }
    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
        console.log(this.direction);
    }
    run() {
        
        let X = this.snake.X;
        let Y = this.snake.Y;
        if (this.direction === "ArrowUp") {
            Y -= 5;
        }
        if (this.direction === "ArrowDown") {
            Y += 5;
        }
        if (this.direction === "ArrowLeft") {
            X -= 5;
        }
        if (this.direction === "ArrowRight") {
            X += 5;
        }
        this.snake.X = X;
        this.snake.Y = Y;
        if (this.isLive) {
            setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
        }
    }
}
export default GameControl;