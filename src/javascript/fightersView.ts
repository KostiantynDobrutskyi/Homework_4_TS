import View from './view';
import FighterView, {IFighter} from './fighterView';

class FightersView extends View {
    constructor(fighters: { _id: 'string', name: string, source: 'string' }[]) {
        super();
        this.createFighters(fighters);
    }

    fightersDetailsMap = new Map();

    createFighters(fighters: { _id: 'string', name: string, source: 'string' }[]) {
        const handleClick = this.handleFighterClick.bind(this);
        const fighterElements = fighters.map(fighter => {
            const fighterView = new FighterView(fighter, handleClick);
            return fighterView.element;
        });

        this.element = this.createElement({tagName: 'div', className: 'fighters'});
        this.element.append(...fighterElements);
    }

    handleFighterClick(event: object, fighter: IFighter): void {
        this.fightersDetailsMap.set(fighter._id, fighter);
        console.log("clicked")
        // get from map or load info and add to fightersMap
        // show modal with fighter info
        // allow to edit health and power in this modal
    }
}

export default FightersView;