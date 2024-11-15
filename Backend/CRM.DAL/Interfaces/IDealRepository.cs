using CRM.DAL.Models;

namespace CRM.DAL.Interfaces;

public interface IDealRepository
{
    Task<List<Deal>> GetAllDealsAsync();
    Task<Deal> GetDealByIdAsync(Guid id);
    Task<Deal> CreateDealAsync(Deal deal);
    Task<Deal> UpdateDealAsync(Deal deal);
    Task<bool> DeleteDealAsync(Guid id);
    Task<bool> CompleteDealAsync(Guid id);
    Task<bool> CancelDealAsync(Guid id);
}
