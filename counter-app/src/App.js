import { useSelector, useDispatch } from 'react-redux';



function App() {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (

    <div className='counter'>
      <h2>{count}</h2>
      <div className='counter_btn'>
        <button onClick={() => dispatch({type: 'plus'})}>+</button>
        <button onClick={() => dispatch({type: 'minus'})}>-</button>
      </div>
      
    </div>
    
  );
}

export default App;
