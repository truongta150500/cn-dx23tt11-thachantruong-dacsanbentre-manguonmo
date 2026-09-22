import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5212/api/profiles')
      .then(res => res.json())
      .then(data => setProfiles(data));
  }, []);

  const handleCreate = async (templateId) => {
    const newProfile = {
      name: 'New Company Profile ' + (profiles.length + 1),
      templateId: templateId
    };

    try {
      const res = await fetch('http://localhost:5212/api/profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProfile)
      });
      
      if (res.ok) {
        const data = await res.json();
        navigate(`/admin/editor/${data.id}`);
      } else {
        const err = await res.text();
        alert('Lỗi tạo Profile: ' + err);
      }
    } catch (e) {
      alert('Không thể kết nối Backend: ' + e.message);
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm('Are you sure you want to delete this profile?')) {
      await fetch(`http://localhost:5212/api/profiles/${id}`, { method: 'DELETE' });
      setProfiles(profiles.filter(p => p.id !== id));
    }
  };

  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <h1 style={{ marginBottom: '2rem' }}>Admin Dashboard</h1>
      
      <div style={{ marginBottom: '3rem' }}>
        <h2>Create New Profile</h2>
        <div className="grid grid-cols-4">
          <div className="glass-panel" style={{ textAlign: 'center' }}>
            <h3>Template 1</h3>
            <p>Nhân Phú Original (Red/Yellow)</p>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => handleCreate('template1')}>Create</button>
          </div>
          <div className="glass-panel" style={{ textAlign: 'center' }}>
            <h3>Template 2</h3>
            <p>Modern Corporate (Blue)</p>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => handleCreate('template2')}>Create</button>
          </div>
          <div className="glass-panel" style={{ textAlign: 'center' }}>
            <h3>Template 3</h3>
            <p>Creative Minimal (Monochrome)</p>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => handleCreate('template3')}>Create</button>
          </div>
          <div className="glass-panel" style={{ textAlign: 'center' }}>
            <h3>Template 4</h3>
            <p>Glassmorphism (Gradient)</p>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => handleCreate('template4')}>Create</button>
          </div>
        </div>
      </div>

      <div>
        <h2>Your Profiles</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {profiles.map(p => (
            <div key={p.id} className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
              <div>
                <h3 style={{ margin: 0 }}>{p.name}</h3>
                <small>Template: {p.templateId} | Created: {new Date(p.createdAt).toLocaleDateString()}</small>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn btn-primary" onClick={() => window.open(`/?profileId=${p.id}`)}>View Site</button>
                <button className="btn btn-outline" onClick={() => navigate(`/admin/editor/${p.id}`)}>Edit</button>
                <button className="btn btn-outline" style={{ color: 'red', borderColor: 'red' }} onClick={() => handleDelete(p.id)}>Delete</button>
              </div>
            </div>
          ))}
          {profiles.length === 0 && <p>No profiles found. Create one above!</p>}
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
