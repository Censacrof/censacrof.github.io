import { createRef, useEffect, useRef, useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";


function ProjectList() {
	const defaultItemsMobile = 3;
	const defaultItemsDesktop = 6;
	const itemsIncrement = 3;

	let projects = [...Array(20).keys()];
	const [maxItems, setMaxItems] = useState(Math.min(defaultItemsMobile, defaultItemsDesktop));
	const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

	const isDisabled = maxItems >= projects.length;

	const firstRender = useRef(true);
	const seeMoreRef = createRef();
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}

		seeMoreRef.current.scrollIntoView({behavior: "smooth"})
	}, [maxItems]);

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
											<Card.Link className="text-secondary" href="#">Another Link</Card.Link>
										</Card.Body>
									</Card>
								)
							})
						}
					</Col>
				</Row>
				<Row className="justify-content-center mx-auto">
					<Button id="btn-see-more" ref={seeMoreRef} size="lg"
						onClick={() => {
							setMaxItems(Math.min(
								Math.max(maxItems, isMobile ? defaultItemsMobile : defaultItemsDesktop) + itemsIncrement, 
								projects.length
							))
						}}						
						block={isMobile}
						disabled={isDisabled}
					>
						See more
					</Button>
				</Row>
			</Col>			
		</Row>
	);
}

export default ProjectList;