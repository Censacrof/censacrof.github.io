import { Card } from "react-bootstrap";

function ProjectCard(props) {
	return (
		<Card className="mx-sm-auto mb-3 fill-sm" style={{ width: "20rem" }}>
			<Card.Body className="d-flex align-items-start flex-column">
				<Card.Title><i className="fa fa-folder-open mr-1" />{props.repoName}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{props.language}</Card.Subtitle>
				<Card.Text>
					{props.description}
				</Card.Text>
				<Card.Link className="mt-auto" href={props.repoUrl}><i className="fa fa-github mr-1" />{props.repoFullName}</Card.Link>
			</Card.Body>
		</Card>
	);
}

export default ProjectCard;