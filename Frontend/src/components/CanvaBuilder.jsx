import React, { useState, useEffect, useRef, useCallback } from 'react';
import './CanvaBuilder.css';

/* ─── Constants ─── */
const FONTS = [
  'Be Vietnam Pro', 'Montserrat', 'Playfair Display',
  'Roboto', 'Arial', 'Times New Roman', 'Georgia', 'Courier New'
];

const PAGE_IDS = [
  'Home','AboutUs','History','Leadership','MissionVision',
  'Services','Service1','Service2','Service3','Products',
  'Product1','Product2','Portfolio','ProjectDetails','Clients',
  'Testimonials','News','Sustainability','Careers','ContactUs'
];

const PAGE_LABELS = [
  '01 Trang Bìa','02 Giới thiệu CT','03 Mục lục','04 Thư mời','05 Thông tin CT',
  '06 Lĩnh vực HĐ','07 Cơ sở pháp lý','08 Tầm nhìn - Sứ mệnh','09 Mục tiêu','10 Đào tạo T.Nhật',
  '11 Tiếng Hàn SC','12 EPS TOPIK','13 Tư vấn Du học','14 Ảnh Tuyển sinh','15 Ảnh Học tập & KTX',
  '16 Ảnh Ngoại khoá','17 Ảnh Đưa đón HS','18 Cam kết DV','19 Thành tựu','20 Lời cảm ơn'
];

const numStr = (i) => i < 9 ? `0${i + 1}` : `${i + 1}`;

const mkBg = (idx) => ({
  id: `__bg__`, type: 'image',
  src: `/pdf_pages/page_${numStr(idx)}.png`,
  x: 0, y: 0, width: 793, height: 1122,
  locked: true, isBg: true, zIndex: 0
});

/* ─── Main Component ─── */
export default function CanvaBuilder({ profileId, initialProfile, onBack }) {
  const [profile]            = useState(initialProfile);
  const [activeIdx, setActiveIdx] = useState(0);

  /* each page stores an array of elements */
  const [pagesData, setPagesData] = useState(() =>
    PAGE_IDS.map((_, i) => [mkBg(i)])
  );

  const [selId, setSelId]       = useState(null);
  const [drag, setDrag]         = useState(null);   // {type:'move'|'resize', ox,oy,ow,oh,mx,my}
  const [zoom, setZoom]         = useState(0.58);
  const [saving, setSaving]     = useState(false);
  const [history, setHistory]   = useState([]);     // undo stack
  const [showGrid, setShowGrid] = useState(false);

  const stageRef = useRef(null);
  const paperRef = useRef(null);

  /* ─── Load saved elements from profile ─── */
  useEffect(() => {
    if (!profile?.pages) return;
    setPagesData(prev => prev.map((defaults, i) => {
      const page = profile.pages.find(p => p.pageIdentifier === PAGE_IDS[i]);
      if (!page?.contentHtml) return defaults;
      try {
        const parsed = JSON.parse(page.contentHtml);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      } catch {}
      return defaults;
    }));
  }, []);

  /* ─── Getters / Setters ─── */
  const elements = pagesData[activeIdx] || [];
  const selEl    = elements.find(e => e.id === selId);

  const setElements = useCallback((updater) => {
    setPagesData(prev => {
      const next = [...prev];
      next[activeIdx] = typeof updater === 'function' ? updater(prev[activeIdx]) : updater;
      return next;
    });
  }, [activeIdx]);

  const pushHistory = useCallback(() => {
    setHistory(h => [...h.slice(-29), pagesData[activeIdx]]);
  }, [pagesData, activeIdx]);

  const undo = () => {
    if (!history.length) return;
    const last = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setElements(last);
  };

  /* ─── Helpers ─── */
  const paperCoords = (e) => {
    const r = paperRef.current.getBoundingClientRect();
    return { x: (e.clientX - r.left) / zoom, y: (e.clientY - r.top) / zoom };
  };

  /* ─── Mouse handlers ─── */
  const onElemMouseDown = (e, el, mode = 'move') => {
    if (el.locked && mode === 'move') return;
    e.stopPropagation();
    setSelId(el.id);
    pushHistory();
    const { x, y } = paperCoords(e);
    setDrag({ type: mode, mx: x, my: y, ox: el.x, oy: el.y, ow: el.width || 0, oh: el.height || 0 });
  };

  const onMouseMove = useCallback((e) => {
    if (!drag || !selId || !paperRef.current) return;
    const { x, y } = paperCoords(e);
    const dx = x - drag.mx, dy = y - drag.my;
    setElements(prev => prev.map(el => {
      if (el.id !== selId) return el;
      if (drag.type === 'move')   return { ...el, x: Math.round(drag.ox + dx), y: Math.round(drag.oy + dy) };
      if (drag.type === 'resize') return { ...el, width: Math.max(20, Math.round(drag.ow + dx)), height: Math.max(20, Math.round(drag.oh + dy)) };
      return el;
    }));
  }, [drag, selId, setElements, zoom]);

  const onMouseUp = () => setDrag(null);

  /* ─── Add elements ─── */
  const addText = () => {
    pushHistory();
    const el = {
      id: `t${Date.now()}`, type: 'text', zIndex: 20,
      text: 'Nhập văn bản ở đây',
      x: 80, y: 120, width: 400,
      fontSize: 32, color: '#d32f2f',
      fontFamily: 'Be Vietnam Pro', fontWeight: 'bold',
      fontStyle: 'normal', textAlign: 'left',
      bgColor: 'transparent', lineHeight: 1.4
    };
    setElements(p => [...p, el]);
    setSelId(el.id);
  };

  const addRect = () => {
    pushHistory();
    const el = {
      id: `r${Date.now()}`, type: 'rect', zIndex: 10,
      x: 100, y: 150, width: 300, height: 80,
      bgColor: '#d32f2f', borderRadius: 8, opacity: 1
    };
    setElements(p => [...p, el]);
    setSelId(el.id);
  };

  const addLine = () => {
    pushHistory();
    const el = {
      id: `l${Date.now()}`, type: 'rect', zIndex: 10,
      x: 60, y: 200, width: 680, height: 4,
      bgColor: '#d32f2f', borderRadius: 2, opacity: 1
    };
    setElements(p => [...p, el]);
    setSelId(el.id);
  };

  const addImageUrl = () => {
    const url = window.prompt('Nhập URL hình ảnh:');
    if (!url) return;
    pushHistory();
    const el = {
      id: `i${Date.now()}`, type: 'image', zIndex: 15,
      src: url, x: 80, y: 150, width: 350, height: 220
    };
    setElements(p => [...p, el]);
    setSelId(el.id);
  };

  const resetToPdf = () => {
    if (!window.confirm('Đặt lại trang này về ảnh PDF gốc?')) return;
    pushHistory();
    setElements([mkBg(activeIdx)]);
    setSelId(null);
  };

  const duplicate = () => {
    if (!selEl) return;
    pushHistory();
    const el = { ...selEl, id: `d${Date.now()}`, x: selEl.x + 20, y: selEl.y + 20 };
    setElements(p => [...p, el]);
    setSelId(el.id);
  };

  const deleteEl = () => {
    if (!selId || selEl?.locked) return;
    pushHistory();
    setElements(p => p.filter(e => e.id !== selId));
    setSelId(null);
  };

  const moveZ = (dir) => {
    if (!selId) return;
    pushHistory();
    setElements(prev => {
      const arr = [...prev];
      const i = arr.findIndex(e => e.id === selId);
      if (dir > 0 && i < arr.length - 1) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      if (dir < 0 && i > 0)              [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      return arr;
    });
  };

  /* ─── Update selected element prop ─── */
  const upd = (key, val) => {
    if (!selId) return;
    setElements(p => p.map(e => e.id === selId ? { ...e, [key]: val } : e));
  };

  /* ─── Save ─── */
  const handleSave = async () => {
    setSaving(true);
    try {
      for (let i = 0; i < PAGE_IDS.length; i++) {
        const elems = pagesData[i];
        await fetch(`http://localhost:5212/api/profiles/${profileId}/pages/${PAGE_IDS[i]}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: PAGE_LABELS[i],
            contentHtml: JSON.stringify(elems),
            imageUrl: `/pdf_pages/page_${numStr(i)}.png`
          })
        });
      }
      alert('✅ Đã lưu thiết kế 20 trang thành công!');
    } catch (err) {
      alert('❌ Lỗi: ' + err.message);
    }
    setSaving(false);
  };

  /* ─── Render element on canvas ─── */
  const renderEl = (el) => {
    const isSel = el.id === selId;
    const baseStyle = {
      position: 'absolute', left: el.x, top: el.y,
      zIndex: el.zIndex ?? 10,
      cursor: el.locked ? 'default' : (drag ? 'grabbing' : 'grab'),
    };

    let inner = null;
    if (el.type === 'image') {
      inner = (
        <div style={{ width: el.width, height: el.height, overflow: 'hidden', ...baseStyle }}
          onMouseDown={e => onElemMouseDown(e, el)}>
          <img src={el.src} alt="" draggable={false}
            style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block', pointerEvents: 'none' }} />
          {isSel && !el.locked && <ResizeHandle onMouseDown={e => onElemMouseDown(e, el, 'resize')} />}
        </div>
      );
    } else if (el.type === 'rect') {
      inner = (
        <div style={{
          ...baseStyle,
          width: el.width, height: el.height,
          background: el.bgColor || '#d32f2f',
          borderRadius: el.borderRadius || 0,
          opacity: el.opacity ?? 1,
        }} onMouseDown={e => onElemMouseDown(e, el)}>
          {isSel && <ResizeHandle onMouseDown={e => onElemMouseDown(e, el, 'resize')} />}
        </div>
      );
    } else if (el.type === 'text') {
      inner = (
        <div style={{
          ...baseStyle,
          width: el.width, minHeight: 30,
          backgroundColor: el.bgColor === 'transparent' ? 'transparent' : (el.bgColor || 'transparent'),
          padding: '2px 4px',
        }} onMouseDown={e => onElemMouseDown(e, el)}>
          <div
            contentEditable suppressContentEditableWarning
            onBlur={e => upd('text', e.currentTarget.innerText)}
            style={{
              outline: 'none', wordBreak: 'break-word', whiteSpace: 'pre-wrap',
              fontSize: el.fontSize || 24,
              color: el.color || '#222',
              fontFamily: el.fontFamily || 'Be Vietnam Pro',
              fontWeight: el.fontWeight || 'normal',
              fontStyle: el.fontStyle || 'normal',
              textAlign: el.textAlign || 'left',
              lineHeight: el.lineHeight || 1.4,
              textDecoration: el.underline ? 'underline' : 'none',
              letterSpacing: el.letterSpacing ? `${el.letterSpacing}px` : 'normal',
              userSelect: 'text', cursor: 'text'
            }}
          >{el.text}</div>
          {isSel && <ResizeHandle onMouseDown={e => onElemMouseDown(e, el, 'resize')} />}
        </div>
      );
    }

    return (
      <React.Fragment key={el.id}>
        <div
          style={{
            position: 'absolute', left: el.x, top: el.y,
            width: el.width || 'auto', height: el.height || 'auto',
            outline: isSel ? '2px solid #3b82f6' : 'none',
            outlineOffset: 1,
            boxShadow: isSel ? '0 0 0 4px rgba(59,130,246,0.18)' : 'none',
            pointerEvents: 'none',
            zIndex: (el.zIndex ?? 10) + 1
          }}
        />
        {inner}
      </React.Fragment>
    );
  };

  return (
    <div className="cv-wrap" onMouseMove={onMouseMove} onMouseUp={onMouseUp}>

      {/* ══ TOOLBAR ══ */}
      <div className="cv-toolbar">
        {/* Left group */}
        <div className="cv-tbg">
          <button className="cv-btn cv-btn-back" onClick={onBack}>← Quay lại</button>
          <span className="cv-brand">🎨 CANVA BUILDER</span>
        </div>

        {/* Add elements */}
        <div className="cv-tbg">
          <button className="cv-btn cv-blue"   onClick={addText}>T Thêm Chữ</button>
          <button className="cv-btn cv-teal"   onClick={addRect}>▬ Khối Màu</button>
          <button className="cv-btn cv-indigo" onClick={addLine}>─ Đường kẻ</button>
          <button className="cv-btn cv-violet" onClick={addImageUrl}>🖼 Ảnh URL</button>
          <button className="cv-btn cv-red"    onClick={resetToPdf}>📄 Đặt lại PDF</button>
        </div>

        {/* Format controls for selected TEXT */}
        {selEl?.type === 'text' && (
          <div className="cv-tbg cv-format">
            <select className="cv-sel" value={selEl.fontFamily || 'Be Vietnam Pro'} onChange={e => upd('fontFamily', e.target.value)}>
              {FONTS.map(f => <option key={f}>{f}</option>)}
            </select>
            <input type="number" className="cv-inp w50" value={selEl.fontSize || 24} onChange={e => upd('fontSize', +e.target.value)} />
            <ColorPicker label="Màu chữ" value={selEl.color || '#000'} onChange={v => upd('color', v)} />
            <ColorPicker label="Nền chữ" value={selEl.bgColor === 'transparent' ? '#ffffff' : (selEl.bgColor || '#ffffff')} onChange={v => upd('bgColor', v)} transparent />
            <ToggleBtn label="B" active={selEl.fontWeight === 'bold'} bold onClick={() => upd('fontWeight', selEl.fontWeight === 'bold' ? 'normal' : 'bold')} />
            <ToggleBtn label="I" active={selEl.fontStyle === 'italic'} italic onClick={() => upd('fontStyle', selEl.fontStyle === 'italic' ? 'normal' : 'italic')} />
            <ToggleBtn label="U" active={selEl.underline} onClick={() => upd('underline', !selEl.underline)} />
            <select className="cv-sel w70" value={selEl.textAlign || 'left'} onChange={e => upd('textAlign', e.target.value)}>
              <option value="left">≡ Trái</option>
              <option value="center">≡ Giữa</option>
              <option value="right">≡ Phải</option>
            </select>
            <input type="number" className="cv-inp w50" placeholder="LS" title="Khoảng cách chữ"
              value={selEl.letterSpacing || 0} onChange={e => upd('letterSpacing', +e.target.value)} />
          </div>
        )}

        {/* Format controls for selected RECT */}
        {selEl?.type === 'rect' && (
          <div className="cv-tbg">
            <ColorPicker label="Màu" value={selEl.bgColor || '#d32f2f'} onChange={v => upd('bgColor', v)} />
            <input type="number" className="cv-inp w60" placeholder="Bo góc" value={selEl.borderRadius || 0} onChange={e => upd('borderRadius', +e.target.value)} />
            <input type="range" min={0} max={1} step={0.05} value={selEl.opacity ?? 1} onChange={e => upd('opacity', +e.target.value)} style={{ width: 70 }} />
          </div>
        )}

        {/* Layer / Edit actions */}
        {selId && !selEl?.locked && (
          <div className="cv-tbg">
            <button className="cv-btn" onClick={duplicate} title="Nhân đôi">⧉</button>
            <button className="cv-btn" onClick={() => moveZ(1)} title="Lên trên">↑</button>
            <button className="cv-btn" onClick={() => moveZ(-1)} title="Xuống dưới">↓</button>
            <button className="cv-btn cv-red" onClick={deleteEl} title="Xóa">🗑</button>
          </div>
        )}

        {/* Right: undo, grid, zoom, save */}
        <div className="cv-tbg" style={{ marginLeft: 'auto' }}>
          <button className="cv-btn" onClick={undo} title="Hoàn tác Ctrl+Z" disabled={!history.length}>↩ Undo</button>
          <button className="cv-btn" onClick={() => setShowGrid(g => !g)} style={{ background: showGrid ? '#1d4ed8' : '' }}>⊞ Grid</button>
          <label className="cv-zoom-label">
            {Math.round(zoom * 100)}%
            <input type="range" min={25} max={120} value={zoom * 100} onChange={e => setZoom(e.target.value / 100)} style={{ width: 80 }} />
          </label>
          <button className="cv-btn cv-primary" onClick={handleSave} disabled={saving}>
            {saving ? '⏳ Đang lưu...' : '💾 Lưu tất cả'}
          </button>
        </div>
      </div>

      {/* ══ WORKSPACE ══ */}
      <div className="cv-workspace">

        {/* ─ LEFT SIDEBAR: Page list ─ */}
        <div className="cv-sidebar">
          <div className="cv-sidebar-hd">📑 20 Trang Profile</div>
          <div className="cv-page-list">
            {PAGE_LABELS.map((lbl, i) => (
              <div key={i}
                className={`cv-page-item ${activeIdx === i ? 'active' : ''}`}
                onClick={() => { setActiveIdx(i); setSelId(null); }}>
                <span>{lbl}</span>
                {activeIdx === i && <span className="cv-dot">●</span>}
              </div>
            ))}
          </div>
        </div>

        {/* ─ CENTER: Canvas Stage ─ */}
        <div className="cv-stage" ref={stageRef} onClick={() => setSelId(null)}>
          <div className="cv-stage-inner">
            <div className="cv-paper" ref={paperRef}
              style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}>
              {showGrid && <div className="cv-grid-overlay" />}
              {[...elements].sort((a, b) => (a.zIndex ?? 10) - (b.zIndex ?? 10)).map(renderEl)}
            </div>
            <div style={{ height: Math.round(1122 * zoom + 80) }} />
          </div>
        </div>

        {/* ─ RIGHT: Properties panel ─ */}
        {selEl && (
          <div className="cv-props">
            <div className="cv-props-hd">⚙️ Thuộc tính</div>
            <PropRow label="X px"><input type="number" className="cv-inp" value={Math.round(selEl.x)} onChange={e => upd('x', +e.target.value)} /></PropRow>
            <PropRow label="Y px"><input type="number" className="cv-inp" value={Math.round(selEl.y)} onChange={e => upd('y', +e.target.value)} /></PropRow>
            <PropRow label="W px"><input type="number" className="cv-inp" value={Math.round(selEl.width || 0)} onChange={e => upd('width', +e.target.value)} /></PropRow>
            {selEl.height != null && (
              <PropRow label="H px"><input type="number" className="cv-inp" value={Math.round(selEl.height)} onChange={e => upd('height', +e.target.value)} /></PropRow>
            )}
            {selEl.type === 'text' && (
              <>
                <PropRow label="Cỡ chữ"><input type="number" className="cv-inp" value={selEl.fontSize || 24} onChange={e => upd('fontSize', +e.target.value)} /></PropRow>
                <PropRow label="Dãn dòng"><input type="number" className="cv-inp" step={0.1} value={selEl.lineHeight || 1.4} onChange={e => upd('lineHeight', +e.target.value)} /></PropRow>
                <PropRow label="Khoảng c."><input type="number" className="cv-inp" value={selEl.letterSpacing || 0} onChange={e => upd('letterSpacing', +e.target.value)} /></PropRow>
              </>
            )}
            {selEl.type === 'image' && (
              <div className="prop-url">
                <label className="cv-prop-lbl">URL Ảnh</label>
                <input className="cv-inp w100" value={selEl.src} onChange={e => upd('src', e.target.value)} />
              </div>
            )}
            {selEl.type === 'rect' && (
              <>
                <PropRow label="Bo góc"><input type="number" className="cv-inp" value={selEl.borderRadius || 0} onChange={e => upd('borderRadius', +e.target.value)} /></PropRow>
                <PropRow label="Độ trong">
                  <input type="range" min={0} max={1} step={0.05} value={selEl.opacity ?? 1} onChange={e => upd('opacity', +e.target.value)} style={{ width: '100%' }} />
                </PropRow>
              </>
            )}
            <div style={{ marginTop: '1rem', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <button className="cv-btn" style={{ flex: 1 }} onClick={duplicate}>⧉ Nhân đôi</button>
              {!selEl.locked && <button className="cv-btn cv-red" style={{ flex: 1 }} onClick={deleteEl}>🗑 Xóa</button>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Sub-components ─── */
function ResizeHandle({ onMouseDown }) {
  return (
    <div
      onMouseDown={e => { e.stopPropagation(); onMouseDown(e); }}
      style={{
        position: 'absolute', bottom: -6, right: -6,
        width: 13, height: 13,
        background: '#3b82f6', border: '2px solid #fff',
        borderRadius: 3, cursor: 'nwse-resize', zIndex: 9999
      }}
    />
  );
}

function ColorPicker({ label, value, onChange, transparent }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 3, cursor: 'pointer' }} title={label}>
      <input type="color"
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ width: 26, height: 26, padding: 1, border: '2px solid #475569', borderRadius: '50%', cursor: 'pointer', background: 'none' }}
      />
      {transparent && (
        <button style={{ fontSize: 10, background: 'transparent', border: '1px solid #475569', color: '#94a3b8', padding: '1px 4px', borderRadius: 3, cursor: 'pointer' }}
          onClick={() => onChange('transparent')}>×</button>
      )}
    </label>
  );
}

function ToggleBtn({ label, active, onClick, bold, italic }) {
  return (
    <button onClick={onClick}
      style={{
        padding: '3px 8px', border: '1px solid #475569',
        borderRadius: 4, cursor: 'pointer', fontSize: '0.85rem',
        background: active ? '#1d4ed8' : '#334155',
        color: '#f8fafc',
        fontWeight: bold ? '900' : '400',
        fontStyle: italic ? 'italic' : 'normal'
      }}>{label}</button>
  );
}

function PropRow({ label, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
      <span style={{ minWidth: 60, fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>{label}</span>
      {children}
    </div>
  );
}
