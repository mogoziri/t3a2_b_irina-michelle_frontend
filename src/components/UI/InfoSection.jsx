import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col} from "reactstrap";
import '../../styles/info-section.css';   

const InfoSection = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='6' md='6'></Col>
                <div className="info__section-content">
                    <h4 className="section__subtitle">Carental is the new way to rent a car.</h4>
                    <p className="section__blurb">We want to make car sharing simple to use, 
                    cost-effective, and environmentally friendly.</p>
                    <div className="info__section-item">
                        <p className="section-blurb">
                           <i className="ri-roadster-fill"></i> <Link className="quick__link" to="/CarListings"> Rent a Car</Link>
                        </p>
                    </div>
                    <div className="info__section-item">
                        <p className="section-blurb">
                           <i className="ri-roadster-line"></i> <Link className="quick__link" to="/list-my-car"> List My Car</Link>
                        </p>
                    </div>
                </div>
            {/* <Col lg='6' md='6'></Col> */}
        </Row>
    </Container>
  </section>
  
}

export default InfoSection
