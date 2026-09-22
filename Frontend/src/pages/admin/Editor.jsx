import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CanvaBuilder from '../../components/CanvaBuilder';

const Editor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5212/api/profiles/${id}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      })
      .catch(() => setProfile(null));
  }, [id]);

  if (!profile) return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#0f172a' }}>
      <div style={{ color: '#60a5fa', fontSize: '1.5rem', fontWeight: '600' }}>⏳ Đang tải Canva Visual Builder...</div>
    </div>
  );

  return (
    <CanvaBuilder 
      profileId={id} 
      initialProfile={profile} 
      onBack={() => navigate('/admin')} 
    />
  );
};

export default Editor;
