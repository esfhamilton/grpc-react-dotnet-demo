using Grpc.Core;
using Microsoft.AspNetCore.Authorization;

namespace Service.Services
{
    public class RiddleService : Riddle.RiddleBase
    {
        private readonly ILogger<RiddleService> _logger;
        public RiddleService(ILogger<RiddleService> logger)
        {
            _logger = logger;
        }

        [AllowAnonymous]
        public override Task<PositiveAffirmationReply> GetPositiveAffirmation(PositiveAffirmationRequest request, ServerCallContext context)
        {
            string[] affirmations = 
            { 
                "You can do it!", 
                "A riddle a day keeps the doctor away",
                "This riddle is about to meet its match",
                "Your brain is so bright; even this riddle needs sunglasses!",
                "Guess what? The riddle Gods have told me they're secretly scared of your puzzle-solving prowess. They fear your hunger " +
                "for answers and have begun to conspire against you m'lord. Finish them now and take your place upon the riddle throne.",
                "Listen to that victorious fanfare! It's for you, you lil champ in the making you",
                "Even Sherlock trembles in your presence"
            } ;

            Random rnd = new Random();
            int rndIndex = rnd.Next(0, affirmations.Length);

            return Task.FromResult(new PositiveAffirmationReply
            {
                Affirmation = affirmations[rndIndex]
            });
        }

        [AllowAnonymous]
        public override Task<RiddleReply> GetNewRiddle(RiddleRequest request, ServerCallContext context)
        {
            Dictionary<int, string> riddles = new Dictionary<int, string>
            {
                {0, "What is always coming, but will never arrive?" },
                {1, "What belongs to you, yet others use it more than you?" },
                {2, "I'm tall when young and I'm short when I'm old. What am I?" },
                {3, "The more you take, the more you leave behind. What am I?" },
                {4, "What's strong enough to smash ships but still fears the sun?" },
                {5, "I am greater than God, yet more evil than the Devil, the poorest have me, yet the richest need me. What am I?" },
                {6, "I'm a word of letters three, add two and fewer there will be. What am I?" },
                {7, "I start and end with an 'E' and contain a single letter. Yet I am not the letter 'E'. How can this be? " }
            };

            int[] newRiddleIds = riddles.Keys.Where(id => id != request.RiddleId).ToArray();
            Random rnd = new Random();
            int newRiddleId = newRiddleIds[rnd.Next(0, newRiddleIds.Length)];

            return Task.FromResult(new RiddleReply
            {
                RiddleId = newRiddleId,
                Riddle = riddles[newRiddleId]
            });
        }

        [AllowAnonymous]
        public override Task<RiddleAnswerReply> SubmitRiddleAnswer(RiddleAnswerRequest request, ServerCallContext context)
        {
            bool isCorrect = false;

            Dictionary<int, string[]> riddleAnswers = new Dictionary<int, string[]>
            {
                {0, new string[] { "Tomorrow", "The future" } },
                {1, new string[] { "A name", "your name", "name" } }, 
                {2, new string[] { "A candle", "candle" } }, 
                {3, new string[] { "footsteps", "steps" } },
                {4, new string[] { "ice" } },
                {5, new string[] { "nothing" } },
                {6, new string[] { "few" } },
                {7, new string[] { "envelope" } },
            };

            if (riddleAnswers[request.RiddleId] != null 
                && riddleAnswers[request.RiddleId].Where(a => a.ToLower() == request.Answer.ToLower()).Count() != 0)
                isCorrect = true;
            
            return Task.FromResult(new RiddleAnswerReply
            {
                IsCorrect = isCorrect
            });
        }
    }
}