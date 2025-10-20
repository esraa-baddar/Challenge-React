import logo from './logo.svg';
import './App.css';
import  Header from "./Header";
import Body from './Body';
import Side from './Side';
import './Hrader.css';
import './body.css';
import './side.css';

function App() {
  return ( 
    <div className="App">
      <Header />

      
       <div style={{display:"flex"}}>
        <div style={{width: "70%"}}>
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        </div>

       <div style={{width:"30%"}}>

<Side />

      </div>
      </div>
      </div>

    );
}


export default App
