import { useEffect, useState } from 'react';
import { RiddleClient } from '../proto/RiddleServiceClientPb';
import { RiddleAnswerRequest, RiddleRequest } from '../proto/riddle_pb';


interface RiddleProps {
  client: RiddleClient
}

function Riddle({client} : RiddleProps) {

  const [riddleId, setRiddleId] = useState(-1);
  const [riddle, setRiddle] = useState('');
  const [message, setMessage] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const riddleRequest = new RiddleRequest();
    riddleRequest.setRiddleId(riddleId);
    client.getNewRiddle(riddleRequest, {}, (err, response) => {
      if(err){
        console.error('Error: ', err.message);
        return;
      }
      setRiddleId(response.getRiddleId());
      setRiddle(response.getRiddle());
    });
  }, []);

  const handleSubmitAnswer = () => {
    if(riddleId === -1) return;
    const riddleAnswerRequest = new RiddleAnswerRequest();
    riddleAnswerRequest.setRiddleId(riddleId);
    riddleAnswerRequest.setAnswer(userAnswer);
    client.submitRiddleAnswer(riddleAnswerRequest, {}, (err, response) => {
      if(err){
        console.error('Error: ', err.message);
        return;
      }
      if (response.getIsCorrect()) {
        setMessage('Correct');
      } else {
        setMessage('Incorrect');
      }
      setIsCorrect(response.getIsCorrect());
    })
  };

  const handleNextRiddle = () => {
    if(riddleId === -1) return;
    const riddleRequest = new RiddleRequest();
    riddleRequest.setRiddleId(riddleId);
    client.getNewRiddle(riddleRequest, {}, (err, response) => {
      if(err){
        console.error('Error: ', err.message);
        return;
      }
      setRiddleId(response.getRiddleId());
      setRiddle(response.getRiddle());
      setIsCorrect(false);
      setMessage('');
      setUserAnswer('');
    });
  };

  return (
    <div style={{marginTop: "10%"}}>
        <p>{riddle}</p>
        { isCorrect 
          ? <button onClick={handleNextRiddle}> Next Riddle</button>
          : <div>
              <input
                type="text"
                placeholder="Enter your answer"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                />
                <button onClick={handleSubmitAnswer}>Submit Answer</button>
            </div>
      }
        <div>{message}</div>
    </div>
  );
}

export default Riddle;
