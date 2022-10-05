import { useState, useEffect, useRef } from 'react';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { Box, List, Typography, TextField, Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import Chats from "./Chats";
import Message from "./Message";
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[400],
    },
  },
});

function App() {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatList] = useState([
    {name: "first chat", id: "1"},
    {name: "second chat", id: "2"},
    {name: "third chat", id: "3"}
  ]);
  const inputRef = useRef(null);

  const onButtonClick = () => {
    let newId = 1;
    if (messages.length > 0) newId = messages[messages.length - 1].id + 1;
    if (author.length > 0) {
      setMessages(messages => [...messages, {text: message, author: author, id: newId}]);
    } else {
      alert("Author name needed")
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        alert(author + ", your message send");
      }, 1500);
    }
    focusTextField(inputRef.current);
  }, [messages, author]);

  function focusTextField(input) {
    if (input) {
      input.focus();
    }
  }
  
  return (
    <ThemeProvider theme={theme}>

      <div className='container'>

        <div>

          <Typography variant='h5' component="div" color="primary">Chat list</Typography>

          <List sx={{margin: '10px 0 10px 0', width: '100%', bgcolor: 'background.paper'}}>
            {chatList.map((item) => <Chats name={item.name} key={item.id}/>)}
          </List>

        </div>

        <div className='messages'>

          <Box
            component="form"
            sx={{m:1, borderRadius: '10px', gap: '10px', width: '400px', margin: '10px', padding: '15px'}}
            noValidate
            autoComplete="off"
          >
            <Typography variant='h5' component="div" color="primary">Messages</Typography>
            
            <TextField
              sx={{margin: '10px 0 10px 0', backgroundColor: '#fff' }}
              id="outlined-multiline-flexible" fullWidth
              label="Author name"
              multiline
              maxRows={4}
              value={author}
              inputRef={inputRef}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <TextField
              sx={{margin: '10px 0 10px 0', backgroundColor: '#fff' }}
              id="outlined-multiline-flexible" fullWidth
              label="Message text"
              multiline
              maxRows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button sx={{margin: '10px 0 10px 0'}} variant="outlined" size="large" fullWidth onClick={onButtonClick}>
              Send Message
            </Button>
            
          </Box>

          {
            messages.map(item => {
              return (
                <Message author={item.author} text={item.text} key={item.id} />
              );
            })
          }

        </div>

      </div>

    </ThemeProvider>
  );
}

export default App;
