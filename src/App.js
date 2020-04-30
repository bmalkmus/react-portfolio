import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/navbar";
import aboutMe from "./components/pages/about-me";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio"
import Container from "./components/Context"
import Footer from "./components/footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
    <div>
        <Wrapper>
          <NavBar/>
          <Container>
            <Route exact path="/" component={aboutMe} />
            <Route exact path="/about" component={aboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path ="*" component={aboutMe}/> */}
          </Container>
          <Footer/>
        </Wrapper>

    </div>
    </Router>
    
  );
}

export default App;
