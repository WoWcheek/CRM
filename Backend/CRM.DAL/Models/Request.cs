namespace CRM.DAL.Models;

public class Request
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string FullName { get; set; } = string.Empty;
    public string Topic { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateTime ReceivedAt { get; set; }
}
