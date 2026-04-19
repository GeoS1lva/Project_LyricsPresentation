using Application.Models;
using DocumentFormat.OpenXml.Drawing.Wordprocessing;
using Microsoft.Extensions.Configuration;
using ShapeCrawler;

namespace Application.Services
{
    public class PresentationService(IConfiguration _configuration) : IPresentationService
    {
        public async Task Create(CreateLyricsPresentationRequest request)
        {
            try
            {
                var standardApresentation = _configuration.GetSection("StandardPresentation").Value;

                using IPresentation presentation = new Presentation(standardApresentation);

                AddSlideCover(presentation, request.NameMusic, request.NameAuthor);
                AddSlideLyrics(presentation, request.LyricsList);

                using var newFile = new FileStream(GenerateFileName(request.NameMusic), FileMode.Create);

                presentation.Save(newFile);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error creating presentation: {ex}");
            }
        }

        private void AddSlideCover(IPresentation presentation, string nameMusic, string nameAuthor)
        {
            var slide = presentation.Slides[0];

            var NameMusicShape = slide.Shape("NameMusic");
            var NameAuthorShape = slide.Shape("NameAuthor");

            NameMusicShape?.TextBox?.SetText(nameMusic);
            NameAuthorShape?.TextBox?.SetText(nameAuthor);

            PersonalizationLetters(NameMusicShape, 60);
            PersonalizationLetters(NameAuthorShape, 24);
        }

        private void AddSlideLyrics(IPresentation presentation, List<CreateLyricsRequest> lyricsRequest)
        {
            var slide = presentation.Slides[1];

            foreach(var lyric in lyricsRequest)
            {
                presentation.Slides.Add(slide);

                var newSlide = presentation.Slides[presentation.Slides.Count - 1];
                var LyricText = newSlide.Shape("LyricText");
                LyricText?.TextBox?.SetText(lyric.Text);

                PersonalizationLetters(LyricText, 44);
            }

            presentation.Slides[1].Remove();
        }

        private void PersonalizationLetters(IShape excerpt, int fontSize)
        {
            foreach (var paragraph in excerpt.TextBox.Paragraphs)
            {
                paragraph.HorizontalAlignment = TextHorizontalAlignment.Center;

                foreach (var portion in paragraph.Portions)
                {
                    portion.Font.Size = fontSize;
                    portion.Font.LatinName = "Abadi";
                    portion.Font.IsBold = true;
                }
            }
        }

        private string GenerateFileName(string nameFile)
        {
            return @$"C:\Users\Geovana\Documents\PowerPoint Pai\{nameFile}.pptx";
        }
    }
}
