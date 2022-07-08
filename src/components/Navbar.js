import { Navbar, Nav, Container, NavLink, NavbarBrand } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <NavbarBrand href="/">DaGames</NavbarBrand>
                <Nav>
                <NavLink href="#topGame">Top Games</NavLink>
                <NavLink href="#editorGame">Editor Choice</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar