import React from 'react';
import { useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Chats = () => {

    const [name, setName] = useState('');
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'Alex'
        },
        {
            id: 2,
            name: 'John'
        }
    ]);

    const handleDelete = (id) => {
        const filtered = chats.filter((item) => item.id !== id);
        setChats(filtered);
    }
    const handleAdd = () => {
        const obj = {
            id: Date.now(),
            name: name
        }
        setChats(prevState => [...prevState, obj])
    }

  return (
    <div>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '25px',
                margin: '50px',
                '& .MuiTextField-root': { width: '25ch' },
              }}
        >
            <TextField id="outlined-basic" label="New Chat" size="small" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
            <Button onClick={handleAdd} variant="outlined">Add</Button>
        </Box>
        
        {chats.map((chat) => {
            return(
                <div className='new__chats'>
                    <h3>{chat.name}</h3>
                    <Button onClick={() => handleDelete(chat.id)} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                </div>
            )
        })}
    </div>
  )
}

export default Chats;