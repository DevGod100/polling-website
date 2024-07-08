import { useState } from 'react';
import axios from 'axios';

interface PollProps {
  poll: {
    id: number;
    question: string;
    option1: string;
    option2: string;
    votes1: number;
    votes2: number;
  };
}

export default function Poll({ poll }: PollProps) {
  const [pollData, setPollData] = useState(poll);

  const handleVote = async (option: number) => {
    try {
      const response = await axios.post('/api/polls/vote', {
        pollId: pollData.id,
        option
      });
      setPollData({...pollData, ...response.data});
    } catch (error) {
      alert('Failed to record vote');
    }
  };

  return (
    <div>
      <h3>{pollData.question}</h3>
      <button onClick={() => handleVote(1)}>{pollData.option1} - {pollData.votes1} Votes</button>
      <button onClick={() => handleVote(2)}>{pollData.option2} - {pollData.votes2} Votes</button>
    </div>
  );
}