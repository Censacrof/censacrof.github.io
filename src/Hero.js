import { Row, Col, Button, Container, Jumbotron } from 'react-bootstrap';

function Hero() {
	return (
		<Jumbotron id="Hero" fluid style={{ height: "50vh", display: "flex", alignItems: "center" }}>
			<Container>
				<Row className="justify-content-md-center">
					<Col md={{ span: "auto" }}>
						<h5 className="mb-0">Hello, i'm</h5>
						<h1>Francesco Galisi</h1>
						<p>
							I'm a computer engineering student. I do things.
						</p>  
					</Col>
				</Row> 
			</Container>
		</Jumbotron>
	);
}

export default Hero;