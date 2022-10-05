import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SymptomRow({ firstSymptom, secondSymptom, thirdSymptom, first, second, third }) {


    return (


        <Row>
            {first == "False" ? <Col className="symptomBox">{firstSymptom}</Col> : <Col className="symptomBoxChosen">{firstSymptom}</Col> }
            {second == "False" ? <Col className="symptomBox">{secondSymptom}</Col> : <Col className="symptomBoxChosen">{secondSymptom}</Col>}
            {third == "False" ? <Col className="symptomBox">{thirdSymptom}</Col> : <Col className="symptomBoxChosen">{thirdSymptom}</Col>}
        </Row>


    );
}

export default SymptomRow;
