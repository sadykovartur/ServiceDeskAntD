using Microsoft.AspNetCore.Mvc;

namespace ServiceDesk.Api.Controllers;

[ApiController]
[Route("api/categories")]
public class CategoriesController : ControllerBase
{
  [HttpGet]
  public IActionResult GetCategories()
  {
    // ЛР3: заменить на реальные данные из БД
    var data = new[]
    {
      new { id = 1, name = "UI", isEnabled = true },
      new { id = 2, name = "Auth", isEnabled = true }
    };

    return Ok(data);
  }
}
