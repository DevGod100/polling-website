"use client"
import { useState, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface AddPollFormState {
  question: string;
  option1: string;
  option2: string;
  password: string;
}

export default function AddPollForm() {
  const [inputs, setInputs] = useState<AddPollFormState>({
    question: '',
    option1: '',
    option2: '',
    password: ''
  });
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/polls/add', inputs);
      router.push('/polls');  // Redirect to the polls listing page
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create poll');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="question" value={inputs.question} onChange={handleChange} placeholder="Poll Question" required />
      <input type="text" name="option1" value={inputs.option1} onChange={handleChange} placeholder="Option 1" required />
      <input type="text" name="option2" value={inputs.option2} onChange={handleChange} placeholder="Option 2" required />
      <input type="password" name="password" value={inputs.password} onChange={handleChange} placeholder="Admin Password" required />
      <button type="submit">Add Poll</button>
      {error && <div>{error}</div>}
    </form>
  );
}