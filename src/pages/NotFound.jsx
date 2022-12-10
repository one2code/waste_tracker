import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
	return (
        <Container className="w-100 h-100">
		<div className=" d-flex flex-column align-items-center justify-content-center ">
			<h1 className="text-center">
				404 Not Found
			</h1>
			<Button as={Link} to="/" variant="primary" className="mt-3">
				Take me home
			</Button>
		</div>
        </Container>
	);
}
export default NotFound;
