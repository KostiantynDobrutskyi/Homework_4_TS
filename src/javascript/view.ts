interface IElement {
    tagName: string;
    className: string;
    attributes?: object | any;
}


class View {
    element: HTMLElement|any;

    createElement({tagName, className = '', attributes = {}}: IElement) {
        const element = document.createElement(tagName) as HTMLElement;
        element.classList.add(className);
        Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

        return element;
    }

}


export default View;
