namespace CRM.DAL.Models;

public class Deal
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid ClientId { get; set; }
    public Client Client { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? CancelDate { get; set; }
    public DateTime? CompletionDate { get; set; }
    public Status Status { get; set; } = Status.Pending;
}
