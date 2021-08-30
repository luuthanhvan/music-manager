import { React } from 'react';
import { useHistory } from 'react-router-dom';
import SongForm from './SongForm';
import { create, validationSchema } from '../../services/SongService';

function AddSong(){
    // useHistory to Programmatically navigate after form submitted
    const history = useHistory();

    const onSubmit = (song) => {
        create(song).then(() => { history.push('/') });
    }

    return(
        <div>
            <SongForm
                song={null}
                title="Add new song"
                isEditForm={false}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            />
        </div>
    )
}

export default AddSong;