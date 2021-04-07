import logo from './logo.svg';
import './App.css';
import './custom.scss';
import Hero from './Hero.js'
import ProjectList from './ProjectList'
import { Container } from 'react-bootstrap';

function App() {
	return (
		<div id="App">
			<Hero />
			<Container>
				<ProjectList />
			</Container>	
		</div>    
	);
}

export default App;
