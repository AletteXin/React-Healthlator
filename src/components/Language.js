import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";


function Language({ }) {

    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {

        i18n.changeLanguage(event.target.value);

    };

    return (

        <Row onChange={changeLanguage}>
      
            <Col className="languageBox">
                <input type="radio" value="en" name="language" defaultChecked 
                className="language" /> ENG
                </Col>
            <Col className="languageBox">
                <input type="radio" value="bm" name="language" className="language" /> BM
                </Col>
            <Col className="languageBox">
                <input type="radio" value="cn" name="language" className="language"  /> 中文
                </Col>
         
        </Row>

    );
}

export default Language;
