import { React } from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import {Delete, Edit} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

function ListSongs(props){
    const { listSongs, onDelete } = props;
    
    return(
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Genre</TableCell>
                            <TableCell>Singer</TableCell>
                            <TableCell>Play</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!listSongs || listSongs.length === 0 ? <TableRow><TableCell colSpan="6">No data</TableCell></TableRow> : 
                            listSongs.map((song, index) => (
                                <TableRow key={song.name}>
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{song.name}</TableCell>
                                    <TableCell>{song.genre}</TableCell>
                                    <TableCell>{song.singer}</TableCell>
                                    <TableCell>
                                        <audio src={song.link} controls />
                                    </TableCell>
                                    <TableCell>
                                        <div className="row">
                                            <div className="col-2 me-2">
                                                <button className="btn">
                                                    <NavLink className="link" to={{pathname: '/edit', state: song._id}}><Edit /></NavLink>
                                                </button>
                                            </div>
                                            <div className="col-2">
                                                <button className="btn" onClick={onDelete} value={song._id}><Delete /></button>
                                            </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ListSongs;