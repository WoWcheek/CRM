namespace CRM.BLL.Models.Requests;

public class CreateDealRequest
{
    public Guid ClientId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal Price { get; set; }
}