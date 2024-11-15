using CRM.BLL.Interfaces;
using CRM.BLL.Models.Requests;
using CRM.BLL.Models.Responses;
using CRM.DAL.Interfaces;
using CRM.DAL.Models;

namespace CRM.BLL.Services;

public class DealService : IDealService
{
    private readonly IDealRepository _dealRepository;
    private readonly IClientRepository _clientRepository;

    public DealService(IDealRepository dealRepository, IClientRepository clientRepository)
    {
        _dealRepository = dealRepository;
        _clientRepository = clientRepository;
    }

    public async Task<List<DealResponse>> GetAllDealsAsync()
    {
        var deals = await _dealRepository.GetAllDealsAsync();
        return deals.ConvertAll(deal => new DealResponse
        {
            Id = deal.Id,
            ClientId = deal.ClientId,
            Title = deal.Title,
            Description = deal.Description,
            Price = deal.Price,
            StartDate = deal.StartDate,
            CancelDate = deal.CancelDate,
            CompletionDate = deal.CompletionDate,
            Status = deal.Status.ToString()
        });
    }

    public async Task<DealResponse> GetDealByIdAsync(Guid id)
    {
        var deal = await _dealRepository.GetDealByIdAsync(id);
        if (deal == null)
            return null;

        return new DealResponse
        {
            Id = deal.Id,
            ClientId = deal.ClientId,
            Title = deal.Title,
            Description = deal.Description,
            Price = deal.Price,
            StartDate = deal.StartDate,
            CancelDate = deal.CancelDate,
            CompletionDate = deal.CompletionDate,
            Status = deal.Status.ToString()
        };
    }

    public async Task<DealResponse> CreateDealAsync(CreateDealRequest request)
    {
        var deal = new Deal
        {
            ClientId = request.ClientId,
            Title = request.Title,
            Description = request.Description,
            StartDate = DateTime.UtcNow,
            Price = request.Price,
            Status = Status.Pending
        };

        var createdDeal = await _dealRepository.CreateDealAsync(deal);
        return new DealResponse
        {
            Id = createdDeal.Id,
            ClientId = createdDeal.ClientId,
            Title = createdDeal.Title,
            Description = createdDeal.Description,
            Price = createdDeal.Price,
            StartDate = createdDeal.StartDate,
            Status = createdDeal.Status.ToString()
        };
    }

    public async Task<DealResponse> UpdateDealAsync(Guid id, UpdateDealRequest request)
    {
        var deal = await _dealRepository.GetDealByIdAsync(id);
        if (deal == null)
            return null;

        deal.Title = request.Title;
        deal.Description = request.Description;
        deal.Price = request.Price;

        var updatedDeal = await _dealRepository.UpdateDealAsync(deal);
        return new DealResponse
        {
            Id = updatedDeal.Id,
            ClientId = updatedDeal.ClientId,
            Title = updatedDeal.Title,
            Description = updatedDeal.Description,
            Price = updatedDeal.Price,
            StartDate = updatedDeal.StartDate,
            Status = updatedDeal.Status.ToString()
        };
    }

    public async Task<bool> DeleteDealAsync(Guid id)
    {
        return await _dealRepository.DeleteDealAsync(id);
    }

    public async Task<bool> CompleteDealAsync(Guid id)
    {
        return await _dealRepository.CompleteDealAsync(id);
    }

    public async Task<bool> CancelDealAsync(Guid id)
    {
        return await _dealRepository.CancelDealAsync(id);
    }
}
