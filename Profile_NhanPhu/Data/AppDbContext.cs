using Microsoft.EntityFrameworkCore;
using Profile_NhanPhu.Models;

namespace Profile_NhanPhu.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<CompanyProfile> Profiles { get; set; }
        public DbSet<PageContent> Pages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CompanyProfile>()
                .HasMany(p => p.Pages)
                .WithOne(p => p.CompanyProfile)
                .HasForeignKey(p => p.CompanyProfileId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
