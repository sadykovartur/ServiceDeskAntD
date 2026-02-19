using Microsoft.AspNetCore.Mvc;

namespace ServiceDesk.Api.Controllers;

[ApiController]
[Route("api/tickets")]
public class TicketsController : ControllerBase
{
  [HttpGet]
  public IActionResult GetTickets()
  {
    // ЛР3/ЛР4: заменить на данные из БД
    var data = new[]
    {
      new { id = 1, title = "Не открывается страница", status = "New", priority = "High" },
      new { id = 2, title = "Ошибка в форме", status = "Assigned", priority = "Medium" }
    };

    return Ok(data);
  }

  [HttpGet("{id:int}")]
  public IActionResult GetTicketById([FromRoute] int id)
  {
    if (id <= 0) return NotFound();

    var ticket = new { id, title = $"Ticket #{id} (stub)", status = "New", priority = "High" };
    return Ok(ticket);
  }

  public sealed record CreateTicketRequest(string Title, int CategoryId, string Priority, string Description);

  [HttpPost]
  public IActionResult Create([FromBody] CreateTicketRequest request)
  {
    if (string.IsNullOrWhiteSpace(request.Title))
    {
      // ЛР5: сделать нормальную валидацию + 400 ProblemDetails с errors
      return ValidationProblem(new Dictionary<string, string[]>
      {
        ["title"] = ["Required"]
      });
    }

    // ЛР3: сохранить в БД и вернуть реальный Id
    var createdId = 123;
    return CreatedAtAction(nameof(GetTicketById), new { id = createdId }, new { id = createdId });
  }
}
