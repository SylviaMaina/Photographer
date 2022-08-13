import "./App.css";
import About from "./Component/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousels from "./Component/Carousel";
import Pricing from "./Component/Pricing";
import Contacts from "./Component/Contacts";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div>
      <div className="app">
        <div className="heading">
          <div className="box"></div>
          <div className="gradient"></div>
          <div className="box1"></div>
          <div className="nav">
            <Container>
              <Navbar expand="lg">
                <Navbar.Brand href="#home">
                  <h2>Photographer</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <ul>
                      <li>Home</li>
                      <li>About me</li>
                      <li>Portfolio</li>
                      <li>Pricing</li>
                      <li>Contact</li>
                    </ul>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>{" "}
            </Container>
          </div>

          <div className="headingdeets">
            <h2>Milo Edwards</h2>
            <h6>Fasion Photographer and videomaker based in Eidenburg,UK</h6>
            <button>Contact</button>
          </div>
        </div>
      </div>
      <About />
      <Carousels />
      <Pricing />
      <Contacts />
      <div className="footer">
        <h5>sylviamaina16@gmail.com</h5>
        <h5>+254721943588</h5>
      </div>
    </div>
  );
}

export default App;
