using CRM.BLL.Models.Requests;
using CRM.BLL.Models.Responses;

namespace CRM.BLL.Interfaces;

public interface IDealService
{
    Task<List<DealResponse>> GetAllDealsAsync();
    Task<DealResponse> GetDealByIdAsync(Guid id);
    Task<DealResponse> CreateDealAsync(CreateDealRequest request);
    Task<DealResponse> UpdateDealAsync(Guid id, UpdateDealRequest request);
    Task<bool> DeleteDealAsync(Guid id);
    Task<bool> CompleteDealAsync(Guid id);
    Task<bool> CancelDealAsync(Guid id);
}
