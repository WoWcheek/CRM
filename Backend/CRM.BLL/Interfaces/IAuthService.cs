using Microsoft.AspNetCore.Identity;

namespace CRM.BLL.Interfaces;

public interface IAuthService
{
    string GenerateJwtToken(IdentityUser user);
}
