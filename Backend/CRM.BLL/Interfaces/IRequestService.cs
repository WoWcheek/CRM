using CRM.BLL.Models.Requests;

namespace CRM.BLL.Interfaces;

public interface IRequestService
{
    Task<bool> CreateRequestAsync(RequestDTO requestDTO);
}
