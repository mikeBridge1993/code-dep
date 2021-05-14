### CD app

- Inside the `app` directory, create a `.env` file with the following 2 entries: `GITHUB_API="https://api.github.com/graphql"` and your access token: `GITHUB_TOKEN="YOUR_TOKEN"`

- Run `docker-compose up -d --build`, if you prefer a dockerized version.

- If not using Docker, please run `cd app`, `npm install` and finally `npm run start` for local version

- Go to <http://localhost:3000/> for local version

- Go to <https://code-dep.vercel.app/> for deployed version
