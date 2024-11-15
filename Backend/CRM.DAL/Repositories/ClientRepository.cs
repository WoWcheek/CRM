using CRM.DAL.Interfaces;
using CRM.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace CRM.DAL.Repositories;

public class ClientRepository : IClientRepository
{
    private readonly CrmContext _context;

    public ClientRepository(CrmContext context)
    {
        _context = context;
    }

    public async Task<List<Client>> GetAllClientsAsync()
    {
        return await _context.Clients.ToListAsync();
    }

    public async Task<Client> GetClientByIdAsync(Guid id)
    {
        return await _context.Clients.FindAsync(id);
    }

    public async Task CreateClientAsync(Client client)
    {
        await _context.Clients.AddAsync(client);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateClientAsync(Client client)
    {
        _context.Clients.Update(client);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteClientAsync(Client client)
    {
        _context.Clients.Remove(client);
        await _context.SaveChangesAsync();
    }
}
