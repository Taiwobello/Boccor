import {Provider} from "react-redux"

import About from './components/About';
import ClientLogos from './components/ClientLogos';
import Contact from "./components/Contact";
import Features from './components/Features';
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Pricing from "./components/Pricing";
import Services from './components/Services';
import Team from "./components/Team"
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="hero-container">
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
