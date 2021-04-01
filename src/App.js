import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero.js'
import { Card, Col, Container, Row } from 'react-bootstrap';

function App() {
	return (
		<div id="App">
			<Hero />
			<Container>
				<Row className="justify-content-center">
					<Col sm={{ span: 12 }}>
						<h2 className="text-sm-center">These are some of my projecs</h2>
						<Row className="d-flex" className="mt-4">
							<Col className="d-flex flex-wrap">
								{ 
									[...Array(6).keys()].map((i, v) => {
										return (
											<Card className="mx-sm-auto mb-3 fill-sm" style={{ width: "20rem" }}>
												<Card.Body>
													<Card.Title>Card Title</Card.Title>
													<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
													<Card.Text>
														Some quick example text to build on the card title and make up the bulk of
														the card's content.
													</Card.Text>
													<Card.Link href="#">Card Link</Card.Link>
													<Card.Link href="#">Another Link</Card.Link>
												</Card.Body>
											</Card>
										)
									})
								}
							</Col>							
						</Row>
					</Col>
				</Row>
			</Container>	
		</div>    
	);
}

export default App;
