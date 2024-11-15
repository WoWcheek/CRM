using CRM.DAL.Interfaces;
using CRM.DAL.Models;

namespace CRM.DAL.Repositories;

public class RequestRepository : IRequestRepository
{
    private readonly CrmContext _context;

    public RequestRepository(CrmContext context)
    {
        _context = context;
    }

    public async Task<bool> AddRequestAsync(Request request)
    {
        _context.Requests.Add(request);
        await _context.SaveChangesAsync();
        return true;
    }
}
