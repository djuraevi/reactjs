import {useDispatch, useSelector} from 'react-redux';

function App() {
  const twits = useSelector(state => state.twits);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({
      type: 'delete',
      payload: id,
      meta: {
        delayMs: 3000
      }
    })
  }

  return (
    <div className='container'>
      {twits.map((twit) => {
        return(
          <div key={twit.id} className='twit'>
            {twit.title}
            <button onClick={() => handleDelete(twit.id)}>delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
