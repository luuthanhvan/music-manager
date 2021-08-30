import { React, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SongForm from './SongForm';
import { get, update, validationSchema } from '../../services/SongService';

function EditSong(){
    const history = useHistory();
    const location = useLocation();
    const songId = location.state;
    const [song, setSong] = useState(null);

    useEffect(() => {
        get(songId).then(song => { setSong(song) });
    }, []);

    const onSubmit = (newSong) => {
        update(songId, newSong).then(() => { history.push('/') });
    }

    return(
        <div>
            <SongForm
                song={song}
                title="Edit song"
                isEditForm={true}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            />
        </div>
    )
}

export default EditSong;