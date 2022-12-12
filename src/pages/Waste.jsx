import Container from "react-bootstrap/Container";
import { FormControl, Form } from "react-bootstrap";

function Waste() {
	return (
		<>
			<Container>
				<Form.Select aria-label="Select Department">
					<option>Please Select Your Department</option>
					<option value="1">Corrugator</option>
					<option value="2">Converting</option>
					<option value="3">Shipping</option>
				</Form.Select>
			</Container>
         
		</>
	);
}
export default Waste;
