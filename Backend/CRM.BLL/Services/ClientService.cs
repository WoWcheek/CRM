using CRM.BLL.Interfaces;
using CRM.BLL.Models.Requests;
using CRM.BLL.Models.Responses;
using CRM.DAL.Interfaces;
using CRM.DAL.Models;

namespace CRM.BLL.Services;

public class ClientService : IClientService
{
    private readonly IClientRepository _clientRepository;

    public ClientService(IClientRepository clientRepository)
    {
        _clientRepository = clientRepository;
    }

    public async Task<List<ClientResponse>> GetAllClientsAsync()
    {
        var clients = await _clientRepository.GetAllClientsAsync();
        var clientResponses = new List<ClientResponse>();

        foreach (var client in clients)
        {
            clientResponses.Add(new ClientResponse
            {
                Id = client.Id,
                FullName = client.FullName,
                Gender = client.Gender,
                Country = client.Country,
                PhoneNumber = client.PhoneNumber,
                Email = client.Email
            });
        }

        return clientResponses;
    }

    public async Task<ClientResponse> GetClientByIdAsync(Guid id)
    {
        var client = await _clientRepository.GetClientByIdAsync(id);
        if (client == null)
        {
            return null!;
        }

        return new ClientResponse
        {
            Id = client.Id,
            FullName = client.FullName,
            Gender = client.Gender,
            Country = client.Country,
            PhoneNumber = client.PhoneNumber,
            Email = client.Email
        };
    }

    public async Task<ClientResponse> CreateClientAsync(CreateClientRequest request)
    {
        var client = new Client
        {
            Id = Guid.NewGuid(),
            FullName = request.FullName,
            Gender = request.Gender,
            Country = request.Country,
            PhoneNumber = request.PhoneNumber,
            Email = request.Email
        };

        await _clientRepository.CreateClientAsync(client);

        return new ClientResponse
        {
            Id = client.Id,
            FullName = client.FullName,
            Gender = client.Gender,
            Country = client.Country,
            PhoneNumber = client.PhoneNumber,
            Email = client.Email
        };
    }

    public async Task<ClientResponse> UpdateClientAsync(Guid id, UpdateClientRequest request)
    {
        var client = await _clientRepository.GetClientByIdAsync(id);
        if (client == null)
        {
            return null!;
        }

        client.FullName = request.FullName;
        client.Gender = request.Gender;
        client.Country = request.Country;
        client.PhoneNumber = request.PhoneNumber;
        client.Email = request.Email;

        await _clientRepository.UpdateClientAsync(client);

        return new ClientResponse
        {
            Id = client.Id,
            FullName = client.FullName,
            Gender = client.Gender,
            Country = client.Country,
            PhoneNumber = client.PhoneNumber,
            Email = client.Email
        };
    }

    public async Task<bool> DeleteClientAsync(Guid id)
    {
        var client = await _clientRepository.GetClientByIdAsync(id);
        if (client == null)
        {
            return false;
        }

        await _clientRepository.DeleteClientAsync(client);
        return true;
    }
}