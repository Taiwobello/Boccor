import {Provider} from "react-redux"

import './App.css';
import About from './components/About/About';
import ClientLogos from './components/ClientLogos/ClientLogos';
import Contact from "./components/Contact/Contact";
import Features from './components/Features/Features';
import Footer from "./components/Footer/Footer";
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Pricing from "./components/Pricing/Pricing";
import Services from './components/Services/Services';
import Team from "./components/Team/Team"
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="heroContainer">
            <Navbar />
            <Hero />
        </div>
        <ClientLogos />
        <About />
        <Services />
        <Features />
        <Portfolio/>
        <Team />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
