import logo from './logo.svg';
import './App.css';


function App() {
  return <HelloWorld />
}


// this is a component
//    all a function component is is a function that returns JSX
//    jsx -> JavaScript and XML (HTML)
function HelloWorld(){
  return <h1>Hello React!! {2 / 1}</h1>;
}

export default App;
