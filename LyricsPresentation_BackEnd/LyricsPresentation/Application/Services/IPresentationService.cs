using Application.Models;

namespace Application.Services
{
    public interface IPresentationService
    {
        public Task Create(CreateLyricsPresentationRequest request);
    }
}
