namespace Application.Models
{
    public class CreateLyricsPresentationRequest
    {
        public string NameFile { get; set; }
        public string NameMusic { get; set; }
        public string NameAuthor { get; set; }
        public List<CreateLyricsRequest> LyricsList { get; set; }
    }
}
