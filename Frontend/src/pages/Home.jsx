import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Template1_NhanPhu from '../components/Template1_NhanPhu';
import Template2_FullNhanPhu from '../components/Template2_FullNhanPhu';

const Home = () => {
  const [searchParams] = useSearchParams();
  const profileId = searchParams.get('profileId') || 1;
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let url = profileId ? `http://localhost:5212/api/profiles/${profileId}` : `http://localhost:5212/api/profiles`;
    
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          if (data.length > 0) {
            // Get the last created profile with full pages
            const latest = data[data.length - 1];
            return fetch(`http://localhost:5212/api/profiles/${latest.id}`).then(r => r.json());
          }
          throw new Error('No profiles');
        }
        return data;
      })
      .then(fullProfile => {
        setProfile(fullProfile);
      })
      .catch(() => setProfile(null));
  }, [profileId]);

  if (!profile || !profile.pages) return <div className="container section" style={{color: 'white', textAlign: 'center', marginTop: '50px'}}>Loading profile or Profile not found... Please go to /admin to create one.</div>;

  if (profile.templateId === 'template1') {
    return <Template1_NhanPhu profile={profile} />;
  }

  if (profile.templateId === 'template2') {
    return <Template2_FullNhanPhu profile={profile} />;
  }

  // Fallback for other templates (simplified for demo)
  const homePage = profile.pages.find(p => p.pageIdentifier === 'Home') || {};
  let templateClass = 'glass-panel';
  let containerStyle = { background: '#0f172a', borderLeft: '5px solid #3b82f6', borderRadius: '0' };

  return (
    <div className="section container animate-fade-in">
      <div className={templateClass} style={containerStyle}>
        <h1 style={{ color: 'inherit' }}>
          {homePage.title}
        </h1>
        <p style={{ color: 'inherit', whiteSpace: 'pre-wrap' }}>
          {homePage.contentHtml}
        </p>
        {homePage.imageUrl && <img src={homePage.imageUrl} alt="Hero" style={{ width: '100%', borderRadius: '8px', marginTop: '2rem' }} />}
      </div>
    </div>
  );
};

export default Home;
