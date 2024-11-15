using CRM.BLL.Interfaces;
using CRM.BLL.Models.Requests;
using Microsoft.AspNetCore.Mvc;

namespace CRM.Presentation.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ClientController : ControllerBase
{
    private readonly IClientService _clientService;

    public ClientController(IClientService clientService)
    {
        _clientService = clientService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllClients()
    {
        var clients = await _clientService.GetAllClientsAsync();
        return Ok(clients);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetClientById(Guid id)
    {
        var client = await _clientService.GetClientByIdAsync(id);
        if (client == null)
        {
            return NotFound();
        }

        return Ok(client);
    }

    [HttpPost]
    public async Task<IActionResult> CreateClient([FromBody] CreateClientRequest request)
    {
        if (request == null)
        {
            return BadRequest("Invalid client data.");
        }

        var client = await _clientService.CreateClientAsync(request);
        return CreatedAtAction(nameof(GetClientById), new { id = client.Id }, client);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateClient(Guid id, [FromBody] UpdateClientRequest request)
    {
        if (request == null)
        {
            return BadRequest("Invalid client data.");
        }

        var updatedClient = await _clientService.UpdateClientAsync(id, request);
        if (updatedClient == null)
        {
            return NotFound();
        }

        return Ok(updatedClient);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteClient(Guid id)
    {
        var result = await _clientService.DeleteClientAsync(id);
        if (!result)
        {
            return NotFound();
        }

        return NoContent();
    }
}