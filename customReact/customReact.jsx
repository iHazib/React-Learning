const mainContainer = document.querySelector('#root');

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

function customRender(reactElement,container){
    // const DOMelement = document.createElement(reactElement.type)
    // DOMelement.innerHTML = reactElement.children
    // DOMelement.setAttribute('href', reactElement.props.href)
    // DOMelement.setAttribute('target', reactElement.props.target)

    // container.appendChild(DOMelement)

     const DOMelement = document.createElement(reactElement.type)
     DOMelement.innerHTML = reactElement.children

     for (const prop in reactElement.props){
        DOMelement.setAttribute(prop, reactElement.props[prop])
     }
     
     container.appendChild(DOMelement)
}

customRender(reactElement,mainContainer)





