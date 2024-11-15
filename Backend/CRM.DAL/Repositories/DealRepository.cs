using CRM.DAL.Interfaces;
using CRM.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace CRM.DAL.Repositories;

public class DealRepository : IDealRepository
{
    private readonly CrmContext _context;

    public DealRepository(CrmContext context)
    {
        _context = context;
    }

    public async Task<List<Deal>> GetAllDealsAsync()
    {
        return await _context.Deals
            .Include(d => d.Client)
            .ToListAsync();
    }

    public async Task<Deal> GetDealByIdAsync(Guid id)
    {
        return await _context.Deals
            .Include(d => d.Client)
            .FirstOrDefaultAsync(d => d.Id == id);
    }

    public async Task<Deal> CreateDealAsync(Deal deal)
    {
        _context.Deals.Add(deal);
        await _context.SaveChangesAsync();
        return deal;
    }

    public async Task<Deal> UpdateDealAsync(Deal deal)
    {
        _context.Deals.Update(deal);
        await _context.SaveChangesAsync();
        return deal;
    }

    public async Task<bool> DeleteDealAsync(Guid id)
    {
        var deal = await _context.Deals.FindAsync(id);
        if (deal == null)
            return false;

        _context.Deals.Remove(deal);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> CompleteDealAsync(Guid id)
    {
        var deal = await _context.Deals.FindAsync(id);
        if (deal == null || deal.Status == Status.Completed)
            return false;

        deal.Status = Status.Completed;
        deal.CompletionDate = DateTime.UtcNow;
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> CancelDealAsync(Guid id)
    {
        var deal = await _context.Deals.FindAsync(id);
        if (deal == null || deal.Status == Status.Cancelled)
            return false;

        deal.Status = Status.Cancelled;
        deal.CancelDate = DateTime.UtcNow;
        await _context.SaveChangesAsync();
        return true;
    }
}