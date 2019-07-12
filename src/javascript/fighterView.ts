import View from './view';

export interface IFighter {
    name: string,
    _id: string;
    source: string
}

class FighterView extends View {
    constructor(fighter: IFighter, handleClick: Function) {
        super();

        this.createFighter(fighter, handleClick);
    }

    createFighter(fighter: IFighter, handleClick: Function): void {
        const {name, source} = fighter;
        const nameElement = this.createName(name);
        const imageElement = this.createImage(source);
        let elem: HTMLElement = this.createElement({tagName: 'div', className: 'fighter'});
        elem.append(imageElement, nameElement);
        elem.addEventListener('click', event => handleClick(event, fighter), false)
        this.element = elem;
    }

    createName(name: string): HTMLElement {
        const nameElement = this.createElement({tagName: 'span', className: 'name'});
        nameElement.innerText = name;

        return nameElement;
    }

    createImage(source: string): HTMLElement {
        const attributes = {src: source};
        return this.createElement({
            tagName: 'img',
            className: 'fighter-image',
            attributes
        });

    }
}

export default FighterView;