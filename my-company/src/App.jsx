import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import NavBar from './Component/NavBar';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
