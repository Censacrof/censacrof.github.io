import { useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";


function ProjectList() {
	let projects = [...Array(20).keys()];
	const [maxItems, setMaxItems] = useState(3);
	const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
	const defaultItemsMobile = 3;
	const defaultItemsDesktop = 6;
	const itemsIncrement = 3;

	return (
		<Row className="mb-3">
			<Col sm={{ span: 12 }}>
				<h2 className="text-sm-center">These are some of my projecs</h2>
				<Row className="d-flex" className="mt-4">
					<Col className="d-flex flex-wrap">
						{ 
							projects.slice(0,  Math.max(maxItems, isMobile ? defaultItemsMobile : defaultItemsDesktop)).map((i, v) => {
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
				<Row className="justify-content-center mx-auto">
					<Button size="lg"
						onClick={() => {
							setMaxItems(Math.min(
								Math.max(maxItems, isMobile ? defaultItemsMobile : defaultItemsDesktop) + itemsIncrement, 
								projects.length
							))
						}}						
						block={isMobile}
						variant={maxItems < projects.length ? "primary" : "secondary"} 
						disabled={maxItems >= projects.length}
					>
						See more
					</Button>	
				</Row>
			</Col>			
		</Row>
	);
}

export default ProjectList;