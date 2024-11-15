namespace CRM.BLL.Models.Responses;

public class DealResponse
{
    public Guid Id { get; set; }
    public Guid ClientId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? CancelDate { get; set; }
    public DateTime? CompletionDate { get; set; }
    public string Status { get; set; } = string.Empty;
}
