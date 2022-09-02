import logo from './logo.svg';
import './App.css';
import Message from "./Message";

function App() {

  let name = 'this is my first project';

  return (
    <div className='container'>
      <Message name={name}/>
    </div>
  );
}

export default App;
