import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [messageList, setMessageList] = useState ([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const author = target.author.value;
    const text = target.text.value;

    setMessageList(prevState => [
      ...prevState, {
        id: giveLastId(prevState),
        author: author,
        text: text
      }
    ])
  }

  function giveLastId(arr) {
    return arr.length ? arr[arr.length - 1].id + 1 : 0
  }

  function botAnswer() {
    const lastAuthor = messageList[messageList.length - 1];
    if(lastAuthor && lastAuthor.author) {
      setMessageList(prevState => [
        ...prevState, {
          id: giveLastId(prevState),
          text: `Message author ${lastAuthor.author} send`
        }
      ])
    }
  }

  useEffect(() => {
    setTimeout(() => {
      botAnswer()
    }, 2000)
  }, [messageList])
  
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="author" className='input'/>
        <input type="text" name="text" className='input'/>
        <input type="submit" value="Send" className='btn'/>
      </form>
      {messageList.map((message) => {
        return (
          <div key={message.id} className='message-window'>
            {message.author && <p className='autor-name text'><span>Autor:</span>{message.author}</p>}
            <p className='message-text text'>{message.author && <span>Text:</span>} {message.text}</p>
          </div>
        )})}
    </div>
  );
}

export default App;
