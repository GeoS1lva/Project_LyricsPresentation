using Application.Models;
using Application.Services;
using Microsoft.AspNetCore.Mvc;


namespace LyricsPresentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LyricsPresentationController(IPresentationService presentationService) : ControllerBase
    {
        private readonly IPresentationService _presentationService = presentationService;

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateLyricsPresentationRequest request)
        {
            await _presentationService.Create(request);
            return Ok();
        }
    }
}
