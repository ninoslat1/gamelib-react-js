import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import dotaImage from "../asset/img/dota2.jpg"
import csgoImage from "../asset/img/csgo.jpg"
import fortniteImage from "../asset/img/fortnite.jpg"
import lolImage from "../asset/img/lol.jpg"
import aovImage from "../asset/img/arena_of_valor.png"
import pubgImage from "../asset/img/pubg.jpg"


const Top = () => {
    return (
<div>
    <div className="titleTag text-white">Top 7 Competitive Games</div>
    <div class="hr-white"></div>
    <Container>
        <Row>
            <Col md={4} className="gameWrapper" id="topGame">
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
            <Col md={4} className="gameWrapper">
                <Card className="bg-dark text-white gameImg">
                <Image src={fortniteImage} alt="Fortnite" height="auto"/>
                <div className="m-1 p-2">
                    <Card.Title className="text-center gameTitle">Fortnite</Card.Title>
                    <Card.Text className="text-left">
                    Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing.
                    </Card.Text>
                    <Card.Text className="text-left">
                    <p><b>Developer </b>: Epic Games</p>
                    </Card.Text>   
                    <div className="text-center">
                        <Button variant="secondary" href="https://store.epicgames.com/en-US/p/fortnite" target="_blank">Epic Games Store</Button>      
                    </div>      
                </div>
                </Card>
            </Col>
            <Col md={4} className="gameWrapper">
                <Card className="bg-dark text-white gameImg">
                <Image src={aovImage} alt="Arena of Valor" height="auto"/>
                <div className="m-1 p-2">
                    <Card.Title className="text-center gameTitle">Arena of Valor</Card.Title>
                    <Card.Text className="text-left">
                    Arena of Valor (formerly Strike of Kings) is an international adaptation of Honor of Kings, a multiplayer online battle arena developed by TiMi Studio Group and published by Level Infinite for Android, iOS and Nintendo Switch for markets outside Mainland China.
                    </Card.Text>
                    <Card.Text className="text-left">
                    <p><b>Developer </b>: TiMi Studio Group</p>
                    </Card.Text>
                    <div className="text-center">
                        <Button variant="success" href="https://play.google.com/store/apps/details?id=com.ngame.allstar.eu&hl=in&gl=US" target="_blank">Google Play Store</Button>      
                    </div>         
                </div>
                </Card>
            </Col>
            <Col md={4} className="gameWrapper">
                <Card className="bg-dark text-white gameImg">
                <Image src={pubgImage} alt="PlayerUnknown's : Battlegrounds" height="auto"/>
                <div className="m-1 p-2">
                    <Card.Title className="text-center gameTitle">PlayerUnknown's : Battlegrounds</Card.Title>
                    <Card.Text className="text-left">
                    PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds) is a battle royale game developed and published by PUBG Studios, a subsidiary of Krafton. The game, which was inspired by the 2000 Japanese film Battle Royale.
                    </Card.Text>
                    <Card.Text className="text-left">
                    <p><b>Developer </b>: PUBG Studios</p>
                    </Card.Text>
                    <div className="text-center">
                        <Button variant="primary" href="https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/" target="_blank">Steam</Button>      
                    </div>         
                </div>
                </Card>
            </Col>
        </Row>
    </Container>
</div>
    )
}

export default Top