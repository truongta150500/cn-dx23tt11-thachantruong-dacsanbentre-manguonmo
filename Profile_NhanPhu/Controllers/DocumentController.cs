using Microsoft.AspNetCore.Mvc;
using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using Xceed.Document.NET;
using Xceed.Words.NET;
using Microsoft.EntityFrameworkCore;

namespace Profile_NhanPhu.Controllers
{
    [ApiController]
    [Route("api/documents")]
    public class DocumentController : ControllerBase
    {
        private readonly Profile_NhanPhu.Data.AppDbContext _context;

        public DocumentController(Profile_NhanPhu.Data.AppDbContext context)
        {
            QuestPDF.Settings.License = LicenseType.Community;
            _context = context;
        }

        [HttpGet("profile/pdf/{profileId}")]
        public IActionResult GeneratePdf(int profileId)
        {
            var profile = _context.Profiles.Include(p => p.Pages).FirstOrDefault(p => p.Id == profileId);
            if (profile == null) return NotFound();

            var homePage = profile.Pages.FirstOrDefault(p => p.PageIdentifier == "Home");
            var title = homePage?.Title ?? profile.Name;
            var content = homePage?.ContentHtml ?? "This is a dynamically generated profile.";

            var document = QuestPDF.Fluent.Document.Create(container =>
            {
                container.Page(page =>
                {
                    page.Size(PageSizes.A4);
                    page.Margin(2, Unit.Centimetre);
                    page.PageColor(Colors.White);
                    page.DefaultTextStyle(x => x.FontSize(12));

                    page.Header()
                        .Text(profile.Name)
                        .SemiBold().FontSize(36).FontColor(profile.TemplateId == "template1" ? Colors.Red.Darken2 : Colors.Blue.Darken2);

                    page.Content()
                        .PaddingVertical(1, Unit.Centimetre)
                        .Column(x =>
                        {
                            x.Spacing(20);
                            x.Item().Text(title).FontSize(20).SemiBold();
                            x.Item().Text(content);
                            x.Item().Text("Template Applied: " + profile.TemplateId).Italic().FontColor(Colors.Grey.Medium);
                        });

                    page.Footer()
                        .AlignCenter()
                        .Text(x =>
                        {
                            x.Span("Page ");
                            x.CurrentPageNumber();
                            x.Span(" of ");
                            x.TotalPages();
                        });
                });
            });

            var pdfBytes = document.GeneratePdf();
            return File(pdfBytes, "application/pdf", $"{profile.Name}_Profile.pdf");
        }

        [HttpGet("profile/word")]
        public IActionResult GenerateWord()
        {
            using (var memoryStream = new MemoryStream())
            {
                using (var document = DocX.Create(memoryStream))
                {
                    document.InsertParagraph("Company Profile")
                            .FontSize(24)
                            .Bold()
                            .Alignment = Alignment.center;

                    document.InsertParagraph("\nWelcome to our Company")
                            .FontSize(16)
                            .Bold();

                    document.InsertParagraph("We are dedicated to delivering excellence through innovation and dedication. This document serves as a brief overview of our 20-page premium company profile.");

                    document.InsertParagraph("\nOur Core Values").Bold();
                    document.InsertList(document.AddList("Innovation", 0, ListItemType.Bulleted));
                    document.InsertList(document.AddList("Integrity", 0, ListItemType.Bulleted));
                    document.InsertList(document.AddList("Excellence", 0, ListItemType.Bulleted));
                    document.InsertList(document.AddList("Customer Success", 0, ListItemType.Bulleted));

                    document.Save();
                }

                return File(memoryStream.ToArray(), "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "Company_Profile.docx");
            }
        }
    }
}
