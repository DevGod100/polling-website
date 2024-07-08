import { db } from '@/lib/db'
import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/config'

const GeneralFeed = async () => {
  // const posts = await db.Poll.findMany({
  //   orderBy: {
  //     createdAt: 'desc',
  //   },
  //   include: {
  //     votes: true,
  //     author: true,
  //     comments: true,
  //     subreddit: true,
  //   },
  //   take: INFINITE_SCROLL_PAGINATION_RESULTS, // 4 to demonstrate infinite scroll, should be higher in production
  // })

  return <p>THIS IS THE FEED OF POLLS</p>
}

export default GeneralFeed
