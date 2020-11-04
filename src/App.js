import React, { Component } from 'react'
import { render } from '@testing-library/react';
import './App.css';
import Car from "./Car/Car"
//function App() {
class App extends Component {
  state = {
    cars: [
      { name: 'FORD', year: '2018' },
      { name: 'AUDI', year: '2016' },
      { name: 'MAZDA', year: '2011' }
    ],
    pageTitle: 'React Components',
    showCars: false,
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
  render() {
    console.log("render")
    const divStyle = {
      textAlign: "center"
    }
    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            //onChangeTitle={() => this.changeTitleHandler(car.name)}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={(event) => this.onChangeName(event.target.value, index)}
          />
        )
      })
    }
    return (
      <div style={divStyle}>
        <h1 >{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler}> Toggle Cars</button>
        {cars}
      </div >
    );
  }
}
export default App;
