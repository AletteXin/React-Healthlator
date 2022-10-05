import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HealthCardField({ field, patientInfo }) {
    return (


        <Row className="fieldRow">
            <Col className="fieldRow">{field}</Col>
            <Col className="patientInfo">{patientInfo}</Col>
        </Row>


    );
}

export default HealthCardField;
