"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import Poll from '../components/Poll';

export default function PollsPage() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await axios.get('/api/polls');
        setPolls(response.data);
      } catch (error) {
        console.error('Failed to fetch polls', error);
      }
    };

    fetchPolls();
  }, []);

  return (
    <div>
      {polls.map(poll => <Poll key={poll.id} poll={poll} />)}
    </div>
  );
}