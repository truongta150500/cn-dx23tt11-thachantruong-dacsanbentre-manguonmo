using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Profile_NhanPhu.Data;
using Profile_NhanPhu.Models;

namespace Profile_NhanPhu.Controllers
{
    [ApiController]
    [Route("api/profiles")]
    public class ProfileController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProfileController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProfiles()
        {
            var profiles = await _context.Profiles.ToListAsync();
            return Ok(profiles);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProfile(int id)
        {
            var profile = await _context.Profiles.Include(p => p.Pages).FirstOrDefaultAsync(p => p.Id == id);
            if (profile == null) return NotFound();
            return Ok(profile);
        }

        [HttpPost]
        public async Task<IActionResult> CreateProfile([FromBody] CompanyProfile profile)
        {
            if (profile.TemplateId == "template2") 
            {
                profile.Pages = new List<PageContent>
                {
                    new PageContent { 
                        PageIdentifier = "Home", 
                        Title = "Trang Bìa", 
                        ContentHtml = @"<div class='cover-header'>
<div class='company-type-cover'>CÔNG TY TNHH ĐÀO TẠO NGOẠI NGỮ VÀ TƯ VẤN DU HỌC</div>
<h1 class='company-name-cover'>NHÂN PHÚ</h1>
</div>", 
                        ImageUrl = "/pdf_pages/page_01.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "AboutUs", 
                        Title = "Giới thiệu công ty", 
                        ContentHtml = @"<p class='subtitle-date'><b>Ngày thành lập:</b> 20 tháng 6 năm 2023</p>
<p>Công ty TNHH Đào tạo Ngoại ngữ và Tư vấn Du học Nhân Phú được thành lập vào ngày 20 tháng 6 năm 2023. Đến với <b>DU HỌC NHÂN PHÚ</b>, các học viên sẽ luôn nhận được sự tư vấn nhiệt tình, hiệu quả cho từng trường hợp. Với <b>TẦM NHÌN, SỨ MỆNH</b> và <b>MỤC TIÊU</b> được định hướng rõ ràng, với chi phí thấp nhất không qua trung gian, chúng tôi liên hệ làm việc trực tiếp với tất cả các trường tại Nhật Bản và Hàn Quốc.</p>
<p>Chúng tôi tự hào là đơn vị chuyên cung cấp các chương trình đào tạo ngoại ngữ chất lượng cao và là <b>ĐƠN VỊ ĐẦU TIÊN TRỰC TIẾP ĐÀO TẠO VÀ TƯ VẤN DU HỌC TẠI PHÚ YÊN</b>, mang tới cho học viên sự hỗ trợ tốt nhất, là chỗ dựa vững chắc cho những bước chân đầu tiên hướng tới giấc mơ Du học Nhật Bản, Hàn Quốc của học viên.</p>
<p>Chúng tôi không chỉ phục vụ học viên tại Phú Yên mà còn hỗ trợ các bạn trẻ từ khắp các tỉnh thành khác nhau, thông qua các hình thức tư vấn trực tuyến và các chương trình tư vấn lưu động như Lâm Đồng, Khánh Hoà, Bình Định, Đồng Nai, Cà Mau, Bắc Ninh,...</p>", 
                        ImageUrl = "/pdf_pages/page_02.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "History", 
                        Title = "Mục lục", 
                        ContentHtml = @"<p class='toc-slogan'>Với sứ mệnh đồng hành cùng bước thành công của NHÂN PHÚ, chúng tôi luôn theo dõi bước thành công của bạn.</p>", 
                        ImageUrl = "/pdf_pages/page_03.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Leadership", 
                        Title = "Thư mời", 
                        ContentHtml = @"<p><b>Kính gửi: Quý khách hàng cá nhân/ đơn vị.</b></p>
<p><b>Công ty TNHH đào tạo và tư vấn du học Nhân Phú xin kính gửi tới anh/ chị lời chào trân trọng và hợp tác!</b></p>
<p>Công ty du học Nhân Phú được thành lập theo quyết định của Ban giám đốc Công ty với chức năng chính liên kết với các trường tại Nhật Bản, Hàn Quốc, Lao động xuất khẩu Nhật Bản, trong việc mở rộng hợp tác đào tạo, tuyển sinh, tư vấn cho học sinh, sinh viên Việt Nam có nguyện vọng đi du học và làm việc tại nước ngoài.</p>
<p>Với đội ngũ cán bộ và nhân viên chuyên nghiệp, nhiệt tình, dày dặn kinh nghiệm tổ chức các khóa đào tạo tiếng Nhật Bản, tiếng Hàn Quốc, và bồi dưỡng kỹ năng sống cho học viên trước khi sang du học. Trong nhiều năm qua, Công ty du học Nhân Phú đã hợp tác rất hiệu quả với nhiều trường. Các chương trình du học của công ty được quý phụ huynh học sinh cùng đồng nghiệp đánh giá là đơn vị có chất lượng và uy tín rất cao.</p>
<p>Để công tác đào tạo và tuyển sinh ngày càng tốt hơn, Công ty du học Nhân Phú mong muốn có sự liên kết, hợp tác với Quý khách hàng để tuyển sinh học sinh có nguyện vọng đi du học nói trên.</p>
<p>Rất mong nhận được sự ủng hộ, hợp tác của anh/ chị là niềm vinh hạnh cho công ty chúng tôi.</p>
<p><i>Kính thư!</i><br/><b>Công ty TNHH đào tạo ngoại ngữ và tư vấn du học Nhân Phú - Phú Yên</b><br/>Địa chỉ: 219 Nguyễn Tất Thành, Phường 2, Tuy Hoà, Phú Yên.<br/>Điện thoại: 0329-25-839 / 0384-929-939</p>", 
                        ImageUrl = "/pdf_pages/page_04.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "MissionVision", 
                        Title = "Thông tin công ty", 
                        ContentHtml = @"<ul class='info-list'>
<li><b>Tên công ty:</b> Công ty TNHH Đào tạo ngoại ngữ và Tư vấn du học Nhân Phú</li>
<li>📍 <b>Địa chỉ:</b> 219 Nguyễn Tất Thành - Phường 2 - Tuy Hoà - Phú Yên</li>
<li>📞 <b>Hotline:</b> 0329.25.6839 / 0702.587.274 ( Thi )</li>
<li>🌐 <b>Website:</b> www.nhanphuphuyen.edu.vn</li>
<li>✉ <b>Gmail:</b> duhocxkldnhanphu.phuyen@gmail.com</li>
<li>🌐 <b>Fanpage:</b> www.facebook.com/duhocPhuYen2023/ www.facebook.com/tiengnhattaiphuyen</li>
</ul>", 
                        ImageUrl = "/pdf_pages/page_05.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Services", 
                        Title = "Lĩnh vực hoạt động", 
                        ContentHtml = @"<div class='services-grid-summary'>
<div class='service-badge-item'><span class='num'>01</span><span class='txt'>Tư vấn du học Nhật Bản, Hàn Quốc</span></div>
<div class='service-badge-item'><span class='num'>02</span><span class='txt'>Đào tạo ngoại ngữ tiếng Nhật, tiếng Hàn</span></div>
<div class='service-badge-item'><span class='num'>03</span><span class='txt'>Dịch vụ chuyển đổi Visa</span></div>
</div>", 
                        ImageUrl = "/pdf_pages/page_06.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Service1", 
                        Title = "Cơ sở pháp lý", 
                        ContentHtml = @"<p>Giấy chứng nhận đăng ký doanh nghiệp Công ty TNHH MTV (Mã số: 4401106473). Giấy phép đăng ký kinh doanh dịch vụ tư vấn du học và Quyết định thành lập Trung tâm Ngoại ngữ do Sở Giáo dục & Đào tạo tỉnh Phú Yên cấp.</p>", 
                        ImageUrl = "/pdf_pages/page_07.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Service2", 
                        Title = "Tầm nhìn - Sứ mệnh", 
                        ContentHtml = @"<div class='vision-mission-box'>
<div class='vm-item'>
<h3>Tầm nhìn</h3>
<p><b>DU HỌC NHÂN PHÚ</b> hướng tới một tổ chức giáo dục bao gồm các lĩnh vực: Du học, Đào tạo, Định cư giúp người Việt nâng cao tri thức và cuộc sống tốt đẹp hơn. Công ty thấy rằng các bạn trẻ ở Phú Yên đang có nhiều tiềm năng phát triển nếu có cơ hội được tiếp cận và học tập nền văn hóa, văn minh, công nghệ kỹ thuật tiên tiến hiện đại của các quốc gia phát triển. Tương lai sẽ góp phần giúp cho quê hương Phú Yên nói riêng và nước Việt Nam nói chung thêm giàu đẹp và phát triển hơn. Công ty Du học Nhân Phú chắc chắn sẽ trở thành điểm đến tin tưởng, uy tín của các bạn học sinh, sinh viên và các bậc phụ huynh tìm đến khi có nhu cầu đi Du học Nhật Bản và Hàn Quốc.</p>
</div>
<div class='vm-item'>
<h3>Sứ mệnh</h3>
<p>Với sứ mệnh giúp đỡ các bạn học viên có một hành trang tốt nhất trước khi qua học tập và làm việc ở các nước phát triển, Du học Nhân Phú có đội ngũ giáo viên chuyên trách từ 5-10 năm kinh nghiệm làm việc, với tinh thần đầy nhiệt huyết, cùng với mối quan hệ chặt chẽ với nhiều trường Nhật Ngữ ở Nhật Bản và trường đại học ở Hàn Quốc để đào tạo cho các học viên. Chúng tôi mong muốn là cầu nối vững chắc, đáng tin cậy để đưa các bạn trẻ Việt Nam học tập và làm việc ở nước ngoài, qua đó hiện thực hoá ước mơ của các bạn trẻ Việt Nam mong muốn thay đổi cuộc sống, phát triển bản thân và hướng đến tương lai tốt đẹp hơn.</p>
</div>
</div>", 
                        ImageUrl = "/pdf_pages/page_08.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Service3", 
                        Title = "Mục tiêu", 
                        ContentHtml = @"<blockquote class='target-quote'>DU HỌC NHÂN PHÚ sẽ là cầu nối vững chắc, chắp cánh tương lai cho những ước mơ tri thức mong muốn được học tập tại những quốc gia có nền giáo dục phát triển trên thế giới.</blockquote>
<p>Công ty sẽ không ngừng nỗ lực mỗi ngày để trở thành Nhà cung cấp dịch vụ tư vấn Du học Nhật Bản và Hàn Quốc chuyên nghiệp, tận tâm và uy tín hàng đầu Việt Nam, trở thành đối tác chiến lược hàng đầu của các tổ chức giáo dục trên thế giới, trở thành người định hướng, người bạn đồng hành thân thiết của mỗi học viên khi tin tưởng lựa chọn dịch vụ của Du học Nhân Phú.</p>", 
                        ImageUrl = "/pdf_pages/page_09.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Products", 
                        Title = "Đào tạo Tiếng Nhật N5, N4, N3", 
                        ContentHtml = @"<h3>I. ĐÀO TẠO TIẾNG NHẬT N5, N4, N3</h3>
<p><b>* Khoá học dành cho đối tượng nào?</b><br/>– Học viên muốn có chứng chỉ trong thời gian ngắn để phục vụ cho công việc, du học, xuất khẩu lao động.<br/>– Muốn tập trung luyện kỹ năng để đi thi.</p>
<p><b>* Cốt lõi của chương trình</b><br/>– Học tập trung.<br/>– Nắm vững kỹ năng làm bài thi.<br/>– Tự tin thi Chứng chỉ quốc tế đạt kết quả cao.<br/>– Có khả năng chào hỏi, tự giới thiệu khi giao tiếp hoặc phỏng vấn.</p>
<p><b>* Nội dung khoá học</b><br/>– Đủ kiến thức và kỹ năng đậu Chứng chỉ trong thời gian như sau:<br/>+ N5 khóa tiêu chuẩn 3 tháng.<br/>+ N4 Khoá học tiêu chuẩn 6 tháng (2 học kỳ).<br/>– Nội dung khóa học bao gồm Kiến thức cấp độ tương ứng (Từ vựng, Ngữ pháp, Hán tự, Nghe hiểu, Đọc hiểu) + Luyện giải đề.<br/>– Đặc biệt, đảm bảo đầu ra đối lớp Luyện thi Chứng chỉ N5, N4.</p>", 
                        ImageUrl = "/pdf_pages/page_10.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Product1", 
                        Title = "Đào tạo Tiếng Hàn Sơ cấp I, II", 
                        ContentHtml = @"<h3>II. ĐÀO TẠO TIẾNG HÀN SƠ CẤP I, II</h3>
<p>Khóa học Tiếng Hàn sơ cấp I với những bài giảng chất lượng của Trung tâm ngoại ngữ NHÂN PHÚ, bạn sẽ có thể nắm bắt được những điều cơ bản nhất của Tiếng Hàn. Với lộ trình rõ ràng, phù hợp với từng đối tượng, bạn sẽ học được cách phát âm chuẩn, đọc và viết được những từ và câu đơn giản của tiếng Hàn, thậm chí có thể sử dụng tiếng Hàn để giao tiếp cơ bản.</p>
<p><b>* Những đối tượng đào tạo:</b><br/>+ Sinh viên đang học chương trình ngôn ngữ Hàn trên trường cần phát triển: giao tiếp, nghe, phát âm<br/>+ Sinh viên đang học các ngôn ngữ khác nhưng cần bằng TOPIK ngôn ngữ 2 để ra trường<br/>+ Người cần TOPIK để đi du học, xuất khẩu lao động<br/>+ Người cần TOPIK để tìm việc mới, làm phiên dịch tiếng Hàn</p>
<p><b>* Lịch học:</b><br/>- Tất cả các khoá học được khai giảng vào đầu mỗi tháng<br/>- Thời gian: Thời gian cụ thể sẽ được trung tâm sắp xếp dựa trên nhu cầu, mục đích học và thời gian học của học viên đăng ký mà phân bổ lớp cho thích hợp nhất.</p>", 
                        ImageUrl = "/pdf_pages/page_11.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Product2", 
                        Title = "Đào tạo Tiếng Hàn EPS TOPIK", 
                        ContentHtml = @"<h3>III. ĐÀO TẠO TIẾNG HÀN EPS TOPIK (KLPT)</h3>
<p><b>* Đối tượng học viên:</b><br/>Khoá luyện thi EPS TOPIK (KLPT) là khoá học được thiết kế dành cho người có nhu cầu xuất khẩu lao động theo chương trình Xuất khẩu lao động EPS (Visa E9) là chương trình của Bộ Lao động – Thương binh và Xã hội.</p>
<p><b>* Mục tiêu khóa học:</b><br/>- Trang bị cho người học kiến thức đầy đủ cả về từ vựng, ngữ pháp, các biểu hiện thường dùng trong giao tiếp hàng ngày cấp độ từ Sơ cấp cơ bản (Tương đương trình độ TOPIK 1,2) đến Trung cấp cơ bản nâng cao (Tương đương trình độ TOPIK 3,4). Khóa học giúp học viên làm quen với đề TOPIK II và cung cấp các kỹ năng để học viên hướng đến mục tiêu Chinh phục TOPIK 4.<br/>- Bên cạnh đó khóa học còn cung cấp các kiến thức về văn hóa, lịch sử, phong cách làm việc và sinh hoạt của người Hàn Quốc, đồng thời bổ sung thêm những lưu ý trong sự khác biệt cơ bản về văn hóa giữa hai quốc gia nhằm nâng cao hiệu quả giao tiếp và công việc.</p>
<p><b>* Giáo trình học:</b> Giáo trình EPS-TOPIK 1 & 2<br/><b>* Thời lượng khóa học:</b><br/>+ Lớp học thời gian: 4 tháng trong đó<br/>- EPS TOPIK 60 bài | Ôn luyện đề: 1 tháng | Thời gian học: Tuần 5 buổi x 4 giờ/buổi</p>
<p><b>• Tặng khoá luyện thi vòng 2</b><br/>1. Thể lực: Rèn luyện thể lực và kiểm tra với thiết bị đo lực<br/>2. Phỏng vấn: Luyện kỹ năng trả lời phỏng vấn và giới thiệu bản thân trước máy quay.<br/>3. Tay nghề: Luyện kỹ năng với các bộ tay nghề theo quy định của bộ.</p>", 
                        ImageUrl = "/pdf_pages/page_12.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Portfolio", 
                        Title = "Tư vấn Du học Nhật Bản, Hàn Quốc", 
                        ContentHtml = @"<blockquote class='highlight-red-bg'><b>KHÁCH HÀNG LÀ TRỌNG TÂM - THÀNH CÔNG LÀ TẤT YẾU</b><br/>Nhân Phú là trung tâm tư vấn Du học Nhật Bản, Hàn Quốc chuyên sâu với nhiều năm kinh nghiệm hoạt động tại Việt Nam. Với tỷ lệ đỗ Visa luôn đảm bảo qua các kỳ là 95%. Tự hào viết tiếp hành trình của mình, với lớp lớp du học sinh đang trưởng thành từng ngày tại Nhật Bản.</blockquote>
<p><b>1. Tư vấn du học Nhật Bản.</b><br/>NHÂN PHÚ tư vấn kết nối và hỗ trợ thực hiện các chuyến du học Nhật Bản, tạo động lực giúp ước mơ sang Nhật Bản học tập và làm việc trở thành hiện thực, đồng thời giải đáp tất cả những câu hỏi, thắc mắc mà học viên quan tâm.</p>
<p><b>2. Tư vấn du học Hàn Quốc.</b><br/>NHÂN PHÚ tư vấn kết nối và hỗ trợ thực hiện các chuyến du học Hàn Quốc, tạo động lực giúp ước mơ sang Hàn Quốc học tập và làm việc trở thành hiện thực, đồng thời giải đáp tất cả những câu hỏi, thắc mắc mà học viên quan tâm.</p>", 
                        ImageUrl = "/pdf_pages/page_13.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "ProjectDetails", 
                        Title = "Hình ảnh | 01 Hoạt động tuyển sinh", 
                        ContentHtml = @"<p>Hoạt động tuyển sinh trực tiếp tại các trường THPT, hội thảo tư vấn hướng nghiệp du học và giao lưu cùng các đơn vị đối tác.</p>", 
                        ImageUrl = "/pdf_pages/page_14.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Clients", 
                        Title = "Hình ảnh | 02 Hoạt động học tập và KTX", 
                        ContentHtml = @"<p>Môi trường học tập hiện đại, lớp học tương tác cao cùng khu ký túc xá khang trang, sạch sẽ tạo điều kiện tối đa cho học viên rèn luyện.</p>", 
                        ImageUrl = "/pdf_pages/page_15.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Testimonials", 
                        Title = "Hình ảnh | 03 Hoạt động ngoại khoá", 
                        ContentHtml = @"<p>Các chương trình trải nghiệm văn hóa truyền thống Nhật Bản, Hàn Quốc, hoạt động team building gắn kết tinh thần đồng đội.</p>", 
                        ImageUrl = "/pdf_pages/page_16.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "News", 
                        Title = "Hình ảnh | 04 Hoạt động đưa đón học sinh", 
                        ContentHtml = @"<p>Đội ngũ Nhân Phú luôn tiễn đưa học viên tại sân bay Việt Nam và hỗ trợ đón học viên tận tình ngay khi nhập cảnh tại Nhật Bản, Hàn Quốc.</p>", 
                        ImageUrl = "/pdf_pages/page_17.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Sustainability", 
                        Title = "Cam kết dịch vụ", 
                        ContentHtml = @"<blockquote class='quote-box'>Chúng tôi, Công ty TNHH Đào Tạo Ngoại ngữ và Tư vấn du học Nhân Phú, cam kết luôn đồng hành và hỗ trợ Quý khách hàng trong suốt hành trình chinh phục tri thức quốc tế. Với kinh nghiệm và sự tận tâm, chúng tôi đảm bảo:</blockquote>
<ol class='commit-list'>
<li><b>01 | Tư vấn chính xác và trung thực:</b> Cung cấp thông tin đúng đắn, minh bạch về các chương trình học, điều kiện nhập học và cơ hội nghề nghiệp tại các quốc gia mà Quý khách hàng quan tâm.</li>
<li><b>02 | Hỗ trợ toàn diện:</b> Từ quá trình chuẩn bị hồ sơ, xin visa, cho đến khi Quý khách hàng ổn định cuộc sống tại nước ngoài, chúng tôi luôn sẵn sàng hỗ trợ mọi lúc mọi nơi.</li>
<li><b>03 | Tối ưu hoá chi phí:</b> Tư vấn các phương án học tập hiệu quả với chi phí hợp lý, giúp Quý khách hàng tối ưu hoá ngân sách mà vẫn đạt được mục tiêu học tập.</li>
<li><b>04 | Trách nhiệm và minh bạch:</b> Chúng tôi luôn đặt lợi ích của Quý khách hàng lên hàng đầu, cam kết làm việc với tinh thần trách nhiệm cao nhất, đảm bảo minh bạch trong mọi giao dịch và thỏa thuận.</li>
<li><b>05 | Liên tục cải tiến và cập nhật:</b> Công ty chúng tôi luôn cập nhật những thay đổi mới nhất về chính sách du học, học bổng và các cơ hội học tập, đảm bảo mang lại thông tin kịp thời và chính xác nhất cho Quý khách hàng.</li>
</ol>", 
                        ImageUrl = "/pdf_pages/page_18.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "Careers", 
                        Title = "Những thành tựu đạt được", 
                        ContentHtml = @"<h3>01 | Lĩnh vực đào tạo ngoại ngữ</h3>
<ul>
<li>Trung tâm đã mở được hơn 50 lớp học tiếng Nhật và Hàn Quốc ở nhiều cấp độ khác nhau, từ sơ cấp đến cao cấp, phục vụ nhu cầu học tập đa dạng của học viên.</li>
<li>Mỗi năm, trung tâm mở thêm khoảng 50 lớp học mới để đáp ứng số lượng học viên ngày càng tăng.</li>
<li>Đào tạo thành công 99% học viên đạt các chứng chỉ tiếng Nhật như JLPT (N5 đến N3) và tiếng Hàn như TOPIK (cấp 1 đến cấp 3) với kết quả xuất sắc.</li>
<li>Tỷ lệ học viên vượt qua các kỳ thi quốc tế ngày càng cao, đạt thành tích tốt trong thời gian ngắn.</li>
</ul>

<h3>02 | Lĩnh vực du học</h3>
<p><b>2.1 Liên kết với nhiều trường ngoại ngữ, đại học và chương trình đào tạo</b><br/>
Sau gần một năm tư vấn, đào tạo tiếng Nhật và tiếng Hàn, cùng với việc hoàn thiện hồ sơ du học, số lượng học viên được đào tạo ngoại ngữ và sang Nhật Bản, Hàn Quốc thành công đã tăng đều đặn qua từng kỳ nhập học. Đến đầu năm 2024, công ty đã ký hợp đồng hợp tác với hơn 100 trường ngoại ngữ và đại học hàng đầu tại Nhật Bản và Hàn Quốc.<br/>
Các chương trình học bổng như: Du học học bổng báo, du học học bổng điều dưỡng, chương trình du học Nhật Bản tự túc,...</p>

<p><b>2.2 Số lượng học viên được gửi đi du học</b><br/>
Tính đến tháng 7 năm 2024, công ty đã đưa thành công hơn 60 học viên đi du học tại hai quốc gia Nhật Bản và Hàn Quốc.</p>

<p><b>2.3 Tỷ lệ đạt visa du học cao</b><br/>
Tỷ lệ ra visa thành công của công ty đạt trên 95%, thể hiện sự chuyên nghiệp và hiệu quả trong quá trình tư vấn và hỗ trợ học viên chuẩn bị hồ sơ.</p>", 
                        ImageUrl = "/pdf_pages/page_19.png" 
                    },
                    new PageContent { 
                        PageIdentifier = "ContactUs", 
                        Title = "Lời cảm ơn & Liên hệ", 
                        ContentHtml = @"<div class='thanks-contact-box'>
<h2>CÔNG TY TNHH ĐÀO TẠO NGOẠI NGỮ VÀ TƯ VẤN DU HỌC NHÂN PHÚ</h2>
<ul class='contact-final-list'>
<li>📍 <b>Cs1:</b> 219 Nguyễn Tất Thành - Phường 2 - Tuy Hoà - Phú Yên</li>
<li>📍 <b>Cs2:</b> 176 Nguyễn Tất Thành - Phường 8 - Tuy Hoà - Phú Yên</li>
<li>📞 <b>Hotline:</b> 0329.25.6839 / 0702.587.274 ( Thi )</li>
<li>✉ <b>Gmail:</b> duhocxkldnhanphu.phuyen@gmail.com</li>
</ul>
</div>", 
                        ImageUrl = "/pdf_pages/page_20.png" 
                    }
                };
            }
            else 
            {
                string[] defaultPages = { "Home", "AboutUs", "MissionVision", "History", "Leadership", "Services", "Service1", "Service2", "Service3", "Products", "Product1", "Product2", "Portfolio", "ProjectDetails", "Clients", "Testimonials", "News", "Sustainability", "Careers", "ContactUs" };
                foreach (var page in defaultPages)
                {
                    profile.Pages.Add(new PageContent { PageIdentifier = page, Title = page, ContentHtml = "Default content for " + page, ImageUrl = "" });
                }
            }

            _context.Profiles.Add(profile);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProfile), new { id = profile.Id }, profile);
        }

        [HttpPut("{id}/pages/{pageIdentifier}")]
        public async Task<IActionResult> UpdatePageContent(int id, string pageIdentifier, [FromBody] PageContent updateData)
        {
            var page = await _context.Pages.FirstOrDefaultAsync(p => p.CompanyProfileId == id && p.PageIdentifier == pageIdentifier);
            if (page == null) return NotFound();

            page.Title = updateData.Title;
            page.ContentHtml = updateData.ContentHtml;
            page.ImageUrl = updateData.ImageUrl;

            await _context.SaveChangesAsync();
            return Ok(page);
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfile(int id)
        {
            var profile = await _context.Profiles.FindAsync(id);
            if (profile == null) return NotFound();
            _context.Profiles.Remove(profile);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
