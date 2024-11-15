namespace CRM.BLL.Models.Requests;

public class SetRoleRequest
{
    public Guid UserId { get; set; }
    public Guid RoleId { get; set; }
}
