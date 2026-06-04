import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { TEST_GAMES } from "./TEST_GAMES";
import "./App.css";

import { HomePage } from "./components/HomePage";
import { RandomPage } from "./components/RandomPage";
import { GamePage } from "./components/GamePage";
import { Navbar, Container, NavbarBrand, Nav } from "react-bootstrap";

function App() {
  const [gamesList, setGamesList] = useState(TEST_GAMES);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand as={Link} to="/">
            My Board Games
          </NavbarBrand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/random">
              Random
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage gamesList={gamesList} />}></Route>
        <Route
          path="/random"
          element={<RandomPage gamesList={gamesList} />}
        ></Route>
        <Route
          path="/games/:gameId"
          element={<GamePage gamesList={gamesList} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
