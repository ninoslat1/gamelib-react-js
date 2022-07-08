import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import dotaImage from "../asset/img/dota2.jpg"
import csgoImage from "../asset/img/csgo.jpg"
import lolImage from "../asset/img/lol.jpg"

const Editor = () => {
    return (
<div>
    <div className="titleTag text-white">Editor Choice</div>
    <div class="hr-white"></div>
    <Container>
        <Row>
            <Col md={4} className="gameWrapper" id="editorGame">
            <Card className="bg-dark text-white gameImg">
            <Image src={dotaImage} alt="Dota 2" height="auto"/>
            <div className="m-1 p-2">
                <Card.Title className="text-center gameTitle">Dota 2</Card.Title>
                <Card.Text className="text-left">
                Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be - start defending your ancient now.
                </Card.Text>
                <Card.Text className="text-left">
                    <p><b>Developer </b>: Valve</p>
                </Card.Text>
                <div className="text-center">
                    <Button variant="primary" href="https://store.steampowered.com/app/570/Dota_2/" target="_blank">Steam</Button>      
                </div>         
            </div>
            </Card>
            </Col>
            <Col md={4} className="gameWrapper">
            <Card className="bg-dark text-white gameImg">
            <Image src={csgoImage} alt="Counter Strike : Global Offensive" height="auto"/>
            <div className="m-1 p-2">
                <Card.Title className="text-center gameTitle">Counter Strike : Global Offensive</Card.Title>
                <Card.Text className="text-left">
                The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes. The most common game modes involve the Terrorists planting a bomb while Counter-Terrorists attempt to stop them, or Counter-Terrorists attempting to rescue hostages that the Terrorists have captured.
                </Card.Text>
                <Card.Text className="text-left">
                <p><b>Developer </b>: Valve</p>
                </Card.Text>    
                <div className="text-center">
                    <Button variant="primary" href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" target="_blank">Steam</Button>      
                </div>      
            </div>
            </Card>
            </Col>
            <Col md={4} className="gameWrapper">
            <Card className="bg-dark text-white gameImg">
            <Image src={lolImage} alt="League of Legends" height="auto"/>
            <div className="m-1 p-2">
                <Card.Title className="text-center gameTitle">League of Legends</Card.Title>
                <Card.Text className="text-left">
                In the game, two teams of five players battle in player-versus-player combat, each team occupying and defending their half of the map. Each of the ten players controls a character, known as a "champion", with unique abilities and differing styles of play.
                </Card.Text>
                <Card.Text className="text-left">
                <p><b>Developer </b>: Riot Games</p>
                </Card.Text>
                <div className="text-center">
                    <Button variant="danger" href="https://lol.garena.com/" target="_blank">Garena</Button>      
                </div>         
            </div>
            </Card>
            </Col>
        </Row>
    </Container>
</div>
    )
}

export default Editor