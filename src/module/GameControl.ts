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
            Y -= 10;
        }
        if (this.direction === "ArrowDown") {
            Y += 10;
        }
        if (this.direction === "ArrowLeft") {
            X -= 10;
        }
        if (this.direction === "ArrowRight") {
            X += 10;
        }
        this.checkEat(X, Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch (e: any) {
            console.log(e);
            alert(e.message);
            this.isLive = false;
        }

        if (this.isLive) {
            let func = this.run.bind(this);
            let timeoutFunc = setTimeout(func, 300 - (this.scorePanel.level - 1) * 30);
        }
    }
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        };
    }

}
export default GameControl;