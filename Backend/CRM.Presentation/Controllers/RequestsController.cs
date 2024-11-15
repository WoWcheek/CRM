using CRM.BLL.Interfaces;
using CRM.BLL.Models.Requests;
using Microsoft.AspNetCore.Mvc;

namespace CRM.Presentation.Controllers;

[Route("api/[controller]")]
[ApiController]
public class RequestsController : ControllerBase
{
    private readonly IRequestService _requestService;

    public RequestsController(IRequestService requestService)
    {
        _requestService = requestService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateRequest([FromBody] RequestDTO requestDTO)
    {
        if (requestDTO == null)
            return BadRequest("Invalid data.");

        var result = await _requestService.CreateRequestAsync(requestDTO);

        if (result)
            return Ok("Request submitted successfully.");
        else
            return StatusCode(500, "An error occurred while processing your request.");
    }
}