import './App.css';
import Car from "./Car/Car"
function App() {
  const divStyle = {
    textAlign: "center"
  }
  return (
    <div style={divStyle}>
      <h1 >Hello world</h1>
      <Car name={"FORD"} year={"2018"} />
      <Car name={"AUDI"} year={"2016"} />
      <Car name={"AUDI"} year={2016} >
        <p style={{ color: "red" }}>COLOR</p>
      </Car>


    </div >
  );
}

export default App;
