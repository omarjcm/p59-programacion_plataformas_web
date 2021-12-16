import React, { Component, Fragment } from 'react'

export class Flag extends Component {
    render() {
        return (
            <Fragment>
                <h4>Encebollado</h4>
                <h4>Bolon mixto de verde</h4>
            </Fragment>
        )
    }
}

export class Ingredient extends Component {
    render() {
        return React.createElement('h4', {}, 'Ingredientes:')
    }
}

class Dish extends Component {
    render() {
        return (
            <div className="dish">
                <h1>Platillo</h1>
                <Ingredient/>
            </div>
        )
    }
}

export default Dish