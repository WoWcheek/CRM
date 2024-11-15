using CRM.DAL.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CRM.DAL;

public class CrmContext : IdentityDbContext<IdentityUser>
{
    public DbSet<Client> Clients { get; set; }
    public DbSet<Deal> Deals { get; set; }
    public DbSet<Request> Requests { get; set; }

    public CrmContext() { }

    public CrmContext(DbContextOptions<CrmContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder builder)
        => base.OnConfiguring(builder);

    protected override void OnModelCreating(ModelBuilder builder)
        => base.OnModelCreating(builder);
}
