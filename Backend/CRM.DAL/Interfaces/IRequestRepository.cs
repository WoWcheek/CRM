using CRM.DAL.Models;

namespace CRM.DAL.Interfaces;

public interface IRequestRepository
{
    Task<bool> AddRequestAsync(Request request);
}