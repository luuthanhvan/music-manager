import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SongForm from './SongForm';
import { create, validationSchema } from '../../services/SongService';

function AddSong(){
    // useHistory to Programmatically navigate after form submitted
    const history = useHistory();
    const [file, setFile] = useState({});

    const onChooseFile = (event) => {
        setFile( event.target.files[0]);
    }

    const onSubmit = (song) => {
        let formData = new FormData();
        formData.append('name', song.name);
        formData.append('genre', song.genre);
        formData.append('singer', song.singer);
        formData.append('file', file);
        
        create(formData).then(() => { history.push('/') });
    }

    return(
        <div>
            <SongForm
                song={null}
                title="Add new song"
                isEditForm={false}
                onSubmit={onSubmit}
                onChooseFile={onChooseFile}
                validationSchema={validationSchema}
            />
        </div>
    )
}

export default AddSong;