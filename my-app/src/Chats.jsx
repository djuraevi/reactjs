import React from 'react';
import { ListItem, ListItemText, ListItemButton, ListItemAvatar, Avatar } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';


const Chats = (({name}) => {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    );
});

export default Chats;