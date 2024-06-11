import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
                  <Button variant="outline-dark" onClick={handleButton}>+</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>-</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>*</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>/</Button>
                </Col>
                
              </Row>

              <Row className="p-1">
                
                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>7</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>8</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>9</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>%</Button>
                </Col>
                
              </Row>
              
              <Row className="p-1">
                
                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>4</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>5</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>6</Button>
                </Col>

                <Col xs={3} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}><i className="bi bi-arrow-left"></i></Button>
                </Col>
                
              </Row>

              <Row>
                <Col xs={9}>
                <Row>

                <Col xs={4} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>1</Button>
                </Col>

                <Col xs={4} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>2</Button>
                </Col>

                <Col xs={4} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>3</Button>
                </Col>

                <Col xs={4} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}>0</Button>
                </Col>

                <Col xs={4} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}><i className="bi bi-dot"></i></Button>
                </Col>

                <Col xs={4} className="d-grid p-1" >
                  <Button variant="outline-dark" onClick={handleButton}><i className="bi bi-c-circle"></i></Button>
                </Col>

                </Row>
                </Col>

                <Col xs={3}>
                <Row>
                  <Col>
                  <Button variant="outline-dark" onClick={handleButton}><i className="bi bi-c-circle"></i></Button>
                  </Col>
                </Row>

                                
                </Col>
              </Row>



            </div>

        </Col>
      </Row>
    </Container>
  );
}

export default CenteredContainer;