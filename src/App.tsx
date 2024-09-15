
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import { Settings } from '@mui/icons-material';
import { lazy, Suspense } from 'react';
import Service from './components/Service';
import Product from './components/Product';



// Lazy load the page components
const Home = lazy(() => import('./components/Home '));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
// const Profile = lazy(() => import('./components/Profile'));
// const Settings = lazy(() => import('./components/Settings'));
// const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
      
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
