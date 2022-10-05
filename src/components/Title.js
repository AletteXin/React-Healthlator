import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";


function Title({ }) {

    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {

        i18n.changeLanguage(event.target.value);

    };

    return (

        <Row className="title">
        HEALTHLATOR 
        </Row>

    );
}

export default Title;
