import React from 'react';
import './Template2.css';

const PAGE_IDS = [
  'Home','AboutUs','History','Leadership','MissionVision',
  'Services','Service1','Service2','Service3','Products',
  'Product1','Product2','Portfolio','ProjectDetails','Clients',
  'Testimonials','News','Sustainability','Careers','ContactUs'
];

const numStr = (i) => i < 9 ? `0${i + 1}` : `${i + 1}`;

/* Render one canvas element saved from CanvaBuilder */
const RenderEl = ({ el }) => {
  const base = {
    position: 'absolute',
    left: el.x, top: el.y,
    zIndex: el.zIndex ?? 10,
    pointerEvents: 'none'
  };

  if (el.type === 'image') return (
    <div style={{ ...base, width: el.width, height: el.height, overflow: 'hidden' }}>
      <img src={el.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }} />
    </div>
  );

  if (el.type === 'rect') return (
    <div style={{
      ...base,
      width: el.width, height: el.height,
      background: el.bgColor || '#d32f2f',
      borderRadius: el.borderRadius || 0,
      opacity: el.opacity ?? 1
    }} />
  );

  if (el.type === 'text') return (
    <div style={{
      ...base,
      width: el.width,
      backgroundColor: el.bgColor === 'transparent' ? 'transparent' : (el.bgColor || 'transparent'),
      padding: '2px 4px'
    }}>
      <div style={{
        fontSize: el.fontSize || 24,
        color: el.color || '#222',
        fontFamily: el.fontFamily || 'Be Vietnam Pro, sans-serif',
        fontWeight: el.fontWeight || 'normal',
        fontStyle: el.fontStyle || 'normal',
        textAlign: el.textAlign || 'left',
        lineHeight: el.lineHeight || 1.4,
        textDecoration: el.underline ? 'underline' : 'none',
        letterSpacing: el.letterSpacing ? `${el.letterSpacing}px` : 'normal',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
      }}>
        {el.text}
      </div>
    </div>
  );

  return null;
};

const Template2_FullNhanPhu = ({ profile }) => {
  if (!profile || !profile.pages) return null;

  return (
    <div className="t2-container">
      {PAGE_IDS.map((pageId, idx) => {
        const page = profile.pages.find(p => p.pageIdentifier === pageId) || {};
        const pageNumStr = numStr(idx);
        const defaultImg = `/pdf_pages/page_${pageNumStr}.png`;

        // Try to parse CanvaBuilder JSON elements
        let elements = null;
        if (page.contentHtml) {
          try {
            const parsed = JSON.parse(page.contentHtml);
            if (Array.isArray(parsed) && parsed.length > 0) {
              elements = parsed;
            }
          } catch {}
        }

        return (
          <div key={pageId} className="t2-page">
            {elements ? (
              // Render canvas elements (from CanvaBuilder)
              <div style={{ width: '100%', height: '100%', position: 'relative', background: '#fff', overflow: 'hidden' }}>
                {[...elements]
                  .sort((a, b) => (a.zIndex ?? 10) - (b.zIndex ?? 10))
                  .map(el => <RenderEl key={el.id} el={el} />)
                }
              </div>
            ) : (
              // Fallback: show raw PDF page image
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <img
                  src={page.imageUrl || defaultImg}
                  alt={`Trang ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Template2_FullNhanPhu;
