import { db } from '@/lib/db';
import { z } from 'zod';

export async function POST(req) {
  try {
    const { pollId, option } = await z.object({
      pollId: z.number(),
      option: z.number().min(1).max(2),
    }).parse(await req.json());

    const fieldName = option === 1 ? 'votes1' : 'votes2';
    const poll = await db.poll.update({
      where: { id: pollId },
      data: {
        [fieldName]: {
          increment: 1
        }
      },
    });

    return new Response(JSON.stringify(poll), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Failed to register vote', { status: 500 });
  }
}