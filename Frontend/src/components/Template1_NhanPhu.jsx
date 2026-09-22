import React from 'react';
import './Template1.css';

const Template1_NhanPhu = ({ profile }) => {
  if (!profile || !profile.pages) return null;

  const getPage = (id) => profile.pages.find(p => p.pageIdentifier === id) || {};

  const coverPage = getPage('Home');
  const introPage = getPage('AboutUs');
  const tocPage = getPage('History'); // Mapping to TOC for demo

  return (
    <div className="nhanphu-container">
      
      {/* PAGE 1: COVER */}
      <div className="nhanphu-page nhanphu-page-cover">
        <div className="cover-logo-area">
          {/* Logo placeholder, user can replace via DB if needed, but usually static */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Logo" className="cover-logo" style={{width: '200px', objectFit: 'contain'}} />
        </div>
        
        <div className="cover-text-area">
          <div className="company-type-cover">CÔNG TY TNHH ĐÀO TẠO NGOẠI NGỮ VÀ TƯ VẤN DU HỌC</div>
          <h1 className="company-name-cover">{profile.name || "NHÂN PHÚ"}</h1>
        </div>

        <div className="cover-image-container">
          <img src={coverPage.imageUrl || 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000'} alt="Cover Hero" className="cover-image" />
          <div className="cover-red-curve"></div>
          
          <div className="cover-contact">
            <p><strong>Liên hệ:</strong></p>
            <p>📍 219 Nguyễn Tất Thành, P. 2, Tuy Hoà, Phú Yên</p>
            <p>📧 duhocxkldnhanphu.phuyen@gmail.com</p>
            <p>📞 Hotline: 0329.25.6839 / 0702.587.274 (Thi)</p>
          </div>
        </div>
      </div>

      {/* PAGE 2: INTRO */}
      <div className="nhanphu-page nhanphu-page-intro">
        <div className="intro-top-section">
          <img src={introPage.imageUrl || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000'} alt="Team" className="intro-image" />
          <div className="intro-header-overlay">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Logo" className="logo-small" style={{width: '100px'}}/>
             <div className="intro-slogan">TRUNG THỰC - HÒA NHÃ - NHIỆT TÌNH - ĐOÀN KẾT - SÁNG TẠO</div>
          </div>
        </div>

        <div className="intro-bottom-section">
          <h2 className="intro-title">GIỚI THIỆU CÔNG TY</h2>
          <div className="intro-date">Ngày thành lập: 20 tháng 6 năm 2023</div>
          <div className="intro-text-content" dangerouslySetInnerHTML={{ __html: introPage.contentHtml || "Công ty TNHH Đào tạo Ngoại ngữ và Tư vấn Du học Nhân Phú..." }} />
        </div>
      </div>

      {/* PAGE 3: TOC */}
      <div className="nhanphu-page nhanphu-page-toc">
        <div className="toc-red-corner"></div>
        <div className="toc-header">
          <div className="toc-hexagon">Mục lục</div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Logo" className="toc-logo" style={{width: '150px', objectFit: 'contain', zIndex: 1}}/>
        </div>

        <div className="toc-mission">
          Với sứ mệnh đồng hành cùng bước thành công của NHÂN PHÚ, chúng tôi luôn theo dõi bước thành công của bạn.
        </div>

        <div className="toc-grid">
          <div className="toc-item"><span>Thư mời</span><span className="page-num">04</span></div>
          <div className="toc-item"><span>Dịch vụ cung cấp chính</span><span className="page-num">10</span></div>
          <div className="toc-item"><span>Thông tin công ty</span><span className="page-num">05</span></div>
          <div className="toc-item"><span>Hình ảnh tiêu biểu</span><span className="page-num">14</span></div>
          <div className="toc-item"><span>Lĩnh vực hoạt động</span><span className="page-num">06</span></div>
          <div className="toc-item"><span>Cam kết dịch vụ</span><span className="page-num">18</span></div>
          <div className="toc-item"><span>Cơ sở pháp lý</span><span className="page-num">07</span></div>
          <div className="toc-item"><span>Những thành tựu đạt được</span><span className="page-num">19</span></div>
          <div className="toc-item"><span>Tầm nhìn - Sứ mệnh - Mục tiêu</span><span className="page-num">08</span></div>
          <div className="toc-item"><span>Lời cảm ơn</span><span className="page-num">20</span></div>
        </div>

        <img src={tocPage.imageUrl || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000"} alt="World Map" className="toc-bottom-image" />
        
        <div className="toc-footer">
          CÔNG TY TNHH ĐÀO TẠO NGOẠI NGỮ VÀ TƯ VẤN DU HỌC NHÂN PHÚ | 03
        </div>
      </div>

    </div>
  );
};

export default Template1_NhanPhu;
