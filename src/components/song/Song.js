import { React, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from 'react-router-dom';
import ListSongs from './ListSongs';
import { getAll, remove } from '../../services/SongService';

function Song(){
    const [listSongs, setListSongs] = useState([]);

    useEffect(() => {
        // getAll().then(listSongs => { setListSongs(listSongs) });
        initSongs();
    }, [listSongs]);

    const initSongs = () => {
        getAll().then(listSongs => { setListSongs(listSongs) });
    }

    const onDelete = (event) => {
        const songId = event.target.value;
        remove(songId).then(() => { initSongs() });
    }

    return(
        <div>
            <Button>
                <NavLink className="link" to="/add"><AddIcon /></NavLink>
            </Button>

            <ListSongs 
                listSongs={listSongs}
                onDelete={onDelete}
            />
        </div>
    )
}

export default Song;