import './App.css';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <h1>Netflix</h1>
      <Row title={'netflix Original'} fetchUrl='' />
    </div>
  );
}

export default App;
