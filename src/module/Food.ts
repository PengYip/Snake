
class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
    }
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    change() {
        let top = Math.floor(Math.random() * 30) * 10;
        let left = Math.floor(Math.random() * 30) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
export default Food;