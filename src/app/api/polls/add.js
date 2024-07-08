import { db } from '@/lib/db';
import { z } from 'zod';

export async function POST(req) {
  try {
    const { question, option1, option2, password } = await z.object({
      question: z.string(),
      option1: z.string(),
      option2: z.string(),
      password: z.string(),
    }).parse(await req.json());

    // Check the password before proceeding
    if (password !== "KiwiKiller123") {
      return new Response("Unauthorized", { status: 403 });
    }

    const poll = await db.poll.create({
      data: { question, option1, option2 },
    });

    return new Response(JSON.stringify(poll), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Failed to create poll', { status: 500 });
  }
}
