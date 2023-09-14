import { useState } from 'react';
import { PositiveAffirmationRequest } from '../proto/riddle_pb';
import { RiddleClient } from '../proto/RiddleServiceClientPb';

interface PositiveAffirmationsProps {
  client: RiddleClient
}

function PositiveAffirmations({client} :PositiveAffirmationsProps) {
  const request = new PositiveAffirmationRequest();

  const [positiveAffirmation, setPositiveAffirmation] = useState("")

  const handleClick = () => {
    client.getPositiveAffirmation(request, {}, (err,response) => {
      if(err){
        console.error('Error: ', err.message);
        return;
      }
      setPositiveAffirmation(response.getAffirmation());
    });
  }

  return (
    <div style={{marginTop: 70, marginLeft: 80, marginRight: 80}}>
      <button onClick={handleClick}>Need a Morale Boost?</button>
      <p style={{margin: 0, fontSize: "calc(10px + .8vmin)"}}>{positiveAffirmation}</p>
    </div>    
  );
}

export default PositiveAffirmations;
