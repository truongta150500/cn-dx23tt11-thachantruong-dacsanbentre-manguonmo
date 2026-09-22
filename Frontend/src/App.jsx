import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import all pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MissionVision from './pages/MissionVision';
import History from './pages/History';
import Leadership from './pages/Leadership';
import Services from './pages/Services';
import Service1 from './pages/Service1';
import Service2 from './pages/Service2';
import Service3 from './pages/Service3';
import Products from './pages/Products';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import Clients from './pages/Clients';
import Testimonials from './pages/Testimonials';
import News from './pages/News';
import Sustainability from './pages/Sustainability';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';

import ProfileList from './pages/admin/ProfileList';
import Editor from './pages/admin/Editor';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<ProfileList />} />
          <Route path="/admin/editor/:id" element={<Editor />} />

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/history" element={<History />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/1" element={<Service1 />} />
          <Route path="/services/2" element={<Service2 />} />
          <Route path="/services/3" element={<Service3 />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/1" element={<Product1 />} />
          <Route path="/products/2" element={<Product2 />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/details" element={<ProjectDetails />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/news" element={<News />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
