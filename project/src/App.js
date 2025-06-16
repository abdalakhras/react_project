import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './projComponents/navigation';
import MediaCard from './projComponents/crads';
import BasicGrid from './projComponents/grid';
import ResponsiveDatePickers from './projComponents/calender';
import BasicPie from './projComponents/chart';
function App() {
  return (
    <div className="App">
       <ResponsiveAppBar/>
       <br/>
       
       <BasicGrid/>
        <br/>
        <ResponsiveDatePickers/>
        <BasicPie/>
       
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       
      </header> */}
    </div>
  );
}

export default App;
