using CRM.BLL.Interfaces;
using CRM.BLL.Models.Requests;
using CRM.DAL.Interfaces;
using CRM.DAL.Models;

namespace CRM.BLL.Services;

public class RequestService : IRequestService
{
    private readonly IRequestRepository _requestRepository;

    public RequestService(IRequestRepository requestRepository)
    {
        _requestRepository = requestRepository;
    }

    public async Task<bool> CreateRequestAsync(RequestDTO requestDTO)
    {
        var request = new Request
        {
            Id = Guid.NewGuid(),
            FullName = requestDTO.FullName,
            Topic = requestDTO.Topic,
            Description = requestDTO.Description,
            ReceivedAt = DateTime.UtcNow
        };

        return await _requestRepository.AddRequestAsync(request);
    }
}
