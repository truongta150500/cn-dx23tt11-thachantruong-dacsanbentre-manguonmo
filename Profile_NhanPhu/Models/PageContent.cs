namespace Profile_NhanPhu.Models
{
    public class PageContent
    {
        public int Id { get; set; }
        public int CompanyProfileId { get; set; }
        public string PageIdentifier { get; set; } = string.Empty; // e.g. "home", "about", "services"
        public string Title { get; set; } = string.Empty;
        public string ContentHtml { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;

        public CompanyProfile? CompanyProfile { get; set; }
    }
}
