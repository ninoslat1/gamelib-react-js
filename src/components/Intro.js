import {Button, Col, Container, Row} from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro">
        <Container className="text-white d-flex justify-content-center align-items-center">
            <Row>
                <Col>
                    <div className="title">Welcome to DaGames</div>
                    <div className="titleTag">Now you can see what is the best competitive games in this year</div>
                    <div className="introButton mt-4">
                        <Button variant="dark" href="#topGame">See List</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Intro