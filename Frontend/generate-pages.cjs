const fs = require('fs');
const path = require('path');

const pages = [
  'Home', 'AboutUs', 'MissionVision', 'History', 'Leadership',
  'Services', 'Service1', 'Service2', 'Service3', 'Products',
  'Product1', 'Product2', 'Portfolio', 'ProjectDetails', 'Clients',
  'Testimonials', 'News', 'Sustainability', 'Careers', 'ContactUs'
];

const dir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

pages.forEach(page => {
  const content = `import React from 'react';

const ${page} = () => {
  return (
    <div className="section container animate-fade-in">
      <div className="glass-panel">
        <h1>${page.replace(/([A-Z])/g, ' $1').trim()}</h1>
        <p>Welcome to the ${page.replace(/([A-Z])/g, ' $1').trim()} page. This is a placeholder for premium content.</p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  );
};

export default ${page};
`;
  fs.writeFileSync(path.join(dir, `${page}.jsx`), content);
});

console.log('20 pages generated successfully.');
