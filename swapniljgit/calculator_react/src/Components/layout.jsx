import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const CenteredContainer = () => {
  const [display, setDisplay] = useState('');


  const handleButton = (value) => {
    setDisplay((prev) => prev + value);
  };

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center vh-100">
        <Col xs={12} md={6} xl={4}>

            <div className="p-3 border border-dark">

              <Row>
                <Col >
                <input type="text" className="rounded-2 text-cen w-100" value={''} readOnly />
                </Col>
                
              </Row>
              
              <Row className="p-1">
                
                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>-</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>+</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>/</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>*</Button>
                </Col>
                
              </Row>
              
              



            </div>

        </Col>
      </Row>
    </Container>
  );
}

export default CenteredContainer;