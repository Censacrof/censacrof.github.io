import { createRef, useEffect, useRef, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import ProjectCard from "./ProjectCard";


function ProjectList() {
	const defaultItemsMobile = 3;
	const defaultItemsDesktop = 6;
	const itemsIncrement = 3;

	const [projects, setProjecs] = useState([]);

	const [maxItems, setMaxItems] = useState(Math.min(defaultItemsMobile, defaultItemsDesktop));
	const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

	const isDisabled = maxItems >= projects.length;

	const firstRender = useRef(true);
	const seeMoreRef = createRef();
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;

			fetch("https://api.github.com/users/Censacrof/repos")
				.then(res => res.json())
				.then(data => setProjecs(data));

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
							projects.slice(0,  Math.max(maxItems, isMobile ? defaultItemsMobile : defaultItemsDesktop)).map((p) => {
								return (
									<ProjectCard 
										repoName={p.name}
										language={p.language}
										description={p.description}
										repoUrl={p.html_url}
										repoFullName={p.full_name}
									/>
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