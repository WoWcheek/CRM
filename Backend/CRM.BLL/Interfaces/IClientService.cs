using CRM.BLL.Models.Requests;
using CRM.BLL.Models.Responses;

namespace CRM.BLL.Interfaces;

public interface IClientService
{
    Task<List<ClientResponse>> GetAllClientsAsync();
    Task<ClientResponse> GetClientByIdAsync(Guid id);
    Task<ClientResponse> CreateClientAsync(CreateClientRequest request);
    Task<ClientResponse> UpdateClientAsync(Guid id, UpdateClientRequest request);
    Task<bool> DeleteClientAsync(Guid id);
}
