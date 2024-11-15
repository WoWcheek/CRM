using CRM.BLL.Interfaces;
using CRM.BLL.Models.Requests;
using CRM.BLL.Models.Responses;
using Microsoft.AspNetCore.Mvc;

namespace CRM.Presentation.Controllers;

[Route("api/[controller]")]
[ApiController]
public class DealsController : ControllerBase
{
    private readonly IDealService _dealService;

    public DealsController(IDealService dealService)
    {
        _dealService = dealService;
    }

    [HttpGet]
    public async Task<ActionResult<List<DealResponse>>> GetAllDeals()
    {
        var deals = await _dealService.GetAllDealsAsync();
        return Ok(deals);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<DealResponse>> GetDealById(Guid id)
    {
        var deal = await _dealService.GetDealByIdAsync(id);
        if (deal == null)
            return NotFound();

        return Ok(deal);
    }

    [HttpPost]
    public async Task<ActionResult<DealResponse>> CreateDeal([FromBody] CreateDealRequest request)
    {
        if (request == null)
            return BadRequest();

        var createdDeal = await _dealService.CreateDealAsync(request);
        return CreatedAtAction(nameof(GetDealById), new { id = createdDeal.Id }, createdDeal);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<DealResponse>> UpdateDeal(Guid id, [FromBody] UpdateDealRequest request)
    {
        if (request == null)
            return BadRequest();

        var updatedDeal = await _dealService.UpdateDealAsync(id, request);
        if (updatedDeal == null)
            return NotFound();

        return Ok(updatedDeal);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteDeal(Guid id)
    {
        var success = await _dealService.DeleteDealAsync(id);
        if (!success)
            return NotFound();

        return NoContent();
    }

    [HttpPatch("{id}/complete")]
    public async Task<ActionResult> CompleteDeal(Guid id)
    {
        var success = await _dealService.CompleteDealAsync(id);
        if (!success)
            return NotFound();

        return NoContent();
    }

    [HttpPatch("{id}/cancel")]
    public async Task<ActionResult> CancelDeal(Guid id)
    {
        var success = await _dealService.CancelDealAsync(id);
        if (!success)
            return NotFound();

        return NoContent();
    }
}
