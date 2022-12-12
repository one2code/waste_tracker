import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand className="ms-3" href="#home">
				<img
					src="src\assets\westrock_logo.svg"
					alt="Westrock logo"
					width="188"
					height="35"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ps-3">
					<Nav.Link className="navbar-custom" href="/">Home</Nav.Link>
					<Nav.Link className="navbar-custom" href="/About">About</Nav.Link>
					<Nav.Link className="navbar-custom" href="/Waste">Submit Waste</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
