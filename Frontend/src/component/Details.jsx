import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { NavBar } from "./NavBar";
import {Router} from "../Route/Route"


import { Link } from "react-router-dom";
export function Details() {
    return (
        <div>
            <NavBar></NavBar>
            <Container className="my-5">
                <Row className="align-items-start">

                    <Col xs={4} md={3}>

                        <Image
                            src="\image\Dubai.jpg"
                            alt="Travel illustration"
                            className="img-fluid rounded"
                            style={{ maxWidth: '220px', height: 'auto' }}
                        />

                        <h4 className="mt-2"><strong>Dream Dubai</strong></h4>
                        <p></p>
                    </Col>
                    

                    <Col xs={12} md={9}>
                        <strong>
                            Experience the glamour and excitement of Dubai with our exclusive tour package, featuring iconic landmarks, luxurious shopping, thrilling desert safaris, and world-class entertainment.
                        </strong>
                        <p className="mt-3 fs-4 fs-sm-3 fs-md-3 fs-lg-2">
                            <span className="fs-3 fs-md-2">2,49,999/-</span> Per Person
                        </p>
                        <p><strong>Package includes:</strong> Accommodation, Meals, Transfers, Guided Tours, Desert Safari, Entrance Fees</p>
                        <p>5 days and 4 Nights</p>
                    </Col>
                </Row>
                <div><hr />
                <h3>Details:- </h3></div>
                <Container className="my-5">
                    <Row className="align-items-start">

                        <Col xs={12} md={4} className="fw-bold mb-3">
                            <h5>Day 1: Burj Khalifa – The Tallest Building in the World</h5>
                        </Col>
                        <Col xs={12} md={8} className="mb-3">
                            <p>Visit the world’s tallest skyscraper and experience breathtaking views from the At the Top observation deck on the 124th and 148th floors. Explore the luxurious Burj Khalifa Mall and enjoy fine dining in one of the tower’s many high-end restaurants.</p>
                        </Col>


                        <Col xs={12} md={4} className="fw-bold mb-3">
                            <h5>Day 2: Desert Safari</h5>
                        </Col>
                        <Col xs={12} md={8} className="mb-3">
                            <p>Experience the thrill of a 4x4 dune bashing adventure across the vast dunes of the Dubai Desert. Enjoy activities like camel rides, sandboarding, and a traditional Bedouin-style camp with delicious BBQ dinners, live belly dancing, and a fire show.</p>
                        </Col>
                        <Col xs={12} md={4} className="fw-bold mb-3">
                            <h5>Day 3: Dubai Mall & Fountain Show</h5>
                        </Col>
                        <Col xs={12} md={8} className="mb-3">
                            <p>Shop in the world’s largest shopping mall with over 1,200 stores, gourmet restaurants, and attractions like the Dubai Aquarium and Ice Rink. Witness the mesmerizing Dubai Fountain Show, a spectacular water, music, and light show set on the Burj Khalifa Lake.</p>
                        </Col>
                        <Col xs={12} md={4} className="fw-bold mb-3">
                            <h5>Day 4: Dubai Marina & Palm Jumeirah</h5>
                        </Col>
                        <Col xs={12} md={8} className="mb-3">
                            <p>Cruise along the Dubai Marina in a luxury yacht or take a relaxing dhow cruise and soak in the stunning views of the city’s skyline. Visit the iconic Palm Jumeirah, a man-made island shaped like a palm tree, and explore the Atlantis The Palm Resort.</p>
                        </Col>


                        <Col xs={12} md={4} className="fw-bold mb-3">
                            <h5>Day 5: Global Village</h5>
                        </Col>
                        <Col xs={12} md={8} className="mb-3">
                            <p>Explore Global Village, a cultural extravaganza with pavilions from various countries, showcasing their arts, crafts, and cuisines. It's a one-of-a-kind theme park with live performances, shopping, and dining experiences.</p>
                        </Col>
                    </Row>
                </Container>
                <Row className="d-flex justify-content-between">
                   
                    <Col xs="auto">
                    <Link to={Router.PACKAGE}>
                        <Button variant="primary">Back to Packages</Button>
                        </Link>
                    </Col>
                    
                    <Col xs="auto" className="text-end">
                        <Button variant="success">Add to Cart</Button>
                    </Col>
                </Row>
            </Container></div>

    );
}
