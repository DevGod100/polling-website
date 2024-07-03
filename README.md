
# RealOpinions - A Modern Fullstack Reddit Clone with polling features

Built with the Next.js App Router, TypeScript & Tailwind


## Features

 - Infinite scrolling for dynamically loading posts
 - Authentication using NextAuth & Google
 - Custom feed for authenticated users
 - Advanced caching using [Upstash Redis](https://upstash.com)
 - Optimistic updates for a great user experience
 - Modern data fetching using React-Query
 - A beautiful and highly functional post editor
 - Image uploads & link previews
 - Full comment functionality with nested replies
 - ... and much more

```
npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Datasource "db": MySQL database "defaultdb" at "**************************************************"

√ Enter a name for the new migration: ... fordigiocean
Applying migration `****************************`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ ****************************/
    └─ migration.sql

Your database is now in sync with your schema.


## Acknowledgements

- [Upstash Redis](https://upstash.com/?utm_source=Josh2) for making this possible
- [Code with Antonio](https://www.youtube.com/@codewithantonio) for thumbnail design inspiration
- Shadcn's [Taxonomy respository](https://github.com/shadcn/taxonomy) for showcasing the post editor
-[Josh Tried Coding](https://www.youtube.com/watch?v=mSUKMfmLAt0&t=21999s)

## License

[MIT](https://choosealicense.com/licenses/mit/)
