import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Banner from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import AboutUs from './components/AboutUs'; // Make sure to import the AboutUs component
import UpdateSensorSettings from './components/UpdateSensorSettings';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Banner />} exact />
          <Route path="/update-sensor-settings" element={<UpdateSensorSettings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} /> // Add a route for the AboutUs component
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;