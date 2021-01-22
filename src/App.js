import logo from './logo.svg';
import './App.css';
import MY_PROJECT_NAME, {MY_NAME} from './impoer-export-module/my-constant'

function App() {
  let prompt = `My Name is : ${MY_NAME}`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{MY_PROJECT_NAME}</h2>
        <p>{prompt}</p>
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
}

export default App;
