using CRM.DAL.Models;

namespace CRM.DAL.Interfaces;

public interface IClientRepository
{
    Task<List<Client>> GetAllClientsAsync();
    Task<Client> GetClientByIdAsync(Guid id);
    Task CreateClientAsync(Client client);
    Task UpdateClientAsync(Client client);
    Task DeleteClientAsync(Client client);
}
