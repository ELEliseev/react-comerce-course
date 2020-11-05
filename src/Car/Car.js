import React, { Component } from 'react'
import classes from './Car.module.css'
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types'

class Car extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        if (this.props.index === 1) {
            this.inputRef.current.focus()
        }
    }
    render() {

        const inputClasses = [classes.input]

        if (this.props.name !== '') {
            inputClasses.push(classes.green)
        }
        else {
            inputClasses.push(classes.red)
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }

        return (
            <React.Fragment >
                <h2>Car name:{this.props.name}</h2>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>-</button>
            </React.Fragment >
        )
    }
}

Car.propTypes = {
    name: PropTypes.string,
    year: PropTypes.string,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
    index: PropTypes.number
}
export default withClass(Car, classes.Car)
