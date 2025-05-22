import logo from './logo.svg';
import './App.css';
import Basic01 from './study/Basic01';
import State01 from './study/State01';
import Practice01 from './practice/Practice01';
import State02 from './study/State02';
import Export01 from './study/Export01';
import Practice02 from './practice/Practice02';

function App() {

  // return <Basic01/>; //JSX 기본
  // return <State01/>;    //useState 사용법
  // return <Practice01/>;
  // return <Export01/>;
  // return <State02/>;
  return <Practice02/>;

  /*
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
  */
}

export default App;
