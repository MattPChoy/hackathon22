import logo from './logo.svg';
import coffee from "./images/coffee.png"
import coffee_top from "./images/coffee-top.png"
import Button from '@mui/material/Button';
import './App.css';

let loading = coffee_top
function clearCoffee() {
    document.getElementById("App-logo").style.display="none";
    document.getElementById("click-here").style.display="absolute";
}

setTimeout(() => {
    clearCoffee();
}, 3500)

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={loading} id="App-logo" className="App-logo" alt="logo" />
         <Button style={buttonStyle} variant="outlined" id="click-here"> Click here </Button>
      </header>
    </div>
  );
}

const buttonStyle = {
    display: 'none'
}

export default App;
