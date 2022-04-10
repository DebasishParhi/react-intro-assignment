import logo from './logo.svg';
import './App.css';

function App() {
  var arr=["Android","Blackberry","Iphone","Windows Phone"]
  var arr1=[{name:"Samsung",style:"square"},{name:"HTC",style:"square"},{name:"Miceomax",style:"round"},{name:"Apple",style:"circle"}]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        {arr.map((e)=>{
          return <li>
            {e}
          </li>
        })}
      </ul>
      <h1>Mobile Manufactures</h1>
      <ul>
        {arr1.map((e)=>{
          return <li className={e.style}>

            {e.name}
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;
