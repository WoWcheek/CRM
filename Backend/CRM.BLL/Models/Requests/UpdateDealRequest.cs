namespace CRM.BLL.Models.Requests;

public class UpdateDealRequest
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal Price { get; set; }
}