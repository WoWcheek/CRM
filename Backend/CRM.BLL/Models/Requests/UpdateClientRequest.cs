using CRM.DAL.Models;

namespace CRM.BLL.Models.Requests;

public class UpdateClientRequest
{
    public string FullName { get; set; } = string.Empty;
    public Gender Gender { get; set; }
    public string Country { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}
