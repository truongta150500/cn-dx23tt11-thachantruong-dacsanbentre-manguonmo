namespace Profile_NhanPhu.Models
{
    public class CompanyProfile
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string TemplateId { get; set; } = "template1"; // template1, template2, template3, template4
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation property
        public List<PageContent> Pages { get; set; } = new List<PageContent>();
    }
}
