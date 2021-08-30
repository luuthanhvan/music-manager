import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Song from './components/song/Song';
import AddSong from './components/song/AddSong';
import EditSong from './components/song/EditSong';

function App() {
	return (
		<BrowserRouter>
			<AppBar position="static" className="navbar navbar-expand">
				<Toolbar>
					<Typography variant="h6" className="navbar-brand"> Music Manager </Typography>
				</Toolbar>
			</AppBar>

			<div className="container mt-3">
				<Switch>
					<Route exact path="/" component={Song} />
					<Route exact path="/add" component={AddSong} />
					<Route path="/edit" component={EditSong} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
