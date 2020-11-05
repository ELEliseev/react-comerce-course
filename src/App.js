import React, { Component } from 'react'
//import { render } from '@testing-library/react';
import './App.scss';
import Car from "./Car/Car"
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"
import Counter from "./Counter/Counter"

export const ClickedContext = React.createContext(false)
//function App() {
class App extends Component {

  constructor(props) {
    console.log('constructor')
    super(props)

    this.state = {
      clicked: false,
      cars: [
        { name: 'FORD', year: '2018' },
        { name: 'AUDI', year: '2016' },
        { name: 'MAZDA', year: '2011' }
      ],
      pageTitle: 'React Components',
      showCars: false,
    }
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }
  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }
  onChangeName = (name, index) => {
    console.log(name, index)
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars
    })
  }
  deleteHandler(index) {
    console.log("del")
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({
      cars
    })
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  render() {
    console.log("render")
    const divStyle = {
      textAlign: "center"
    }
    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              index={index}
              name={car.name}
              year={car.year}
              //onChangeTitle={() => this.changeTitleHandler(car.name)}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={(event) => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }
    return (
      <div style={divStyle}>
        {/* <h1 >{this.state.pageTitle}</h1> */}
        <h1 >{this.props.title}</h1>
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>

        <hr />
        <button style={{ marginTop: '20px' }} onClick={this.toggleCarsHandler}> Toggle Cars</button>
        <button onClick={() => this.setState({ clicked: true })}>Change Clicked</button>
        <div style={{ width: 400, margin: "auto", paddingTop: "20px" }}>
          {cars}
        </div>
      </div >
    );
  }
}
export default App;
