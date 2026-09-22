import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Footer = () => {
  const [searchParams] = useSearchParams();
  const profileId = searchParams.get('profileId') || 1;

  return (
    <footer style={{ padding: '3rem 0', background: 'var(--bg-card)', borderTop: '1px solid var(--glass-border)', marginTop: 'auto' }}>
      <div className="container grid grid-cols-4">
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Company</h3>
          <p>Delivering excellence through innovation and dedication.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Quick Links</h3>
          <Link to={`/about?profileId=${profileId}`}>About Us</Link>
          <Link to={`/mission-vision?profileId=${profileId}`}>Mission & Vision</Link>
          <Link to={`/history?profileId=${profileId}`}>History</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Resources</h3>
          <Link to={`/news?profileId=${profileId}`}>News & Blog</Link>
          <Link to={`/careers?profileId=${profileId}`}>Careers</Link>
          <Link to={`/sustainability?profileId=${profileId}`}>Sustainability</Link>
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Downloads</h3>
          <button className="btn btn-outline" style={{ marginBottom: '0.5rem', width: '100%' }} onClick={() => window.open(`http://localhost:5212/api/documents/profile/pdf/${profileId}`)}>
            Download PDF
          </button>
          <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => window.open(`http://localhost:5212/api/documents/profile/word`)}>
            Download Word
          </button>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
        <p>&copy; {new Date().getFullYear()} Company Profile. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
