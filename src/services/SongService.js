import axios from "axios";
import * as Yup from 'yup';

const SERVER_URL = "http://localhost:5000";
const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    genre: Yup.string().required('Required'),
    singer: Yup.string().required("Required")
});

async function getAll(){
  	let {data: res} = await axios.get(`${SERVER_URL}/songs`);
	return (res?.data?.songs || []);
};

async function get(id){
	let {data: res} = await axios.get(`${SERVER_URL}/song/${id}`);
  	return (res?.data?.song || []);
};

async function create(song){
	let {data: res} = await axios.post(`${SERVER_URL}/song`, song);
	return res?.data;
};

async function update(songId, newSong){
	let {data: res} = await axios.put(`${SERVER_URL}/song/${songId}`, newSong);
	return res?.data;
};

async function remove(songId){
	let {data: res} = axios.delete(`${SERVER_URL}/song/${songId}`);
	return res?.data;
};

export {
	validationSchema,
	getAll,
	get,
	create,
	update,
	remove
};