# Site

**We are live: https://inan.dev/**

## Description

This project is a portfolio site. It showcases my expierence, projects, interests and contact information. I made use of the following tools adn frameworks:

-   Next.JS
-   ESlint
-   Prettier
-   Docker
-   Tailwind

Recently Next.JS has become quite popular and I wanted to try it's features with this portfolio site. Together with this, I also applied ESlint and Prettier in order to enforce and encourage writing proper code. Next up I used Docker for deployment. Together with some other images, it saves a lot of work with configuring a web server and SSL.

## Quick start

### Docker

Since the project makes use of Docker, you don't have to worry about having outdated dependencies or such. However, in order to run the container you are required to have Docker installed on your machine.

Simply clone this repo to your machine and execute the following command to create the front-end image and the container.

```sh
docker-compose up
```

Now you can see that the frontend is running on http://localhost:3000/.

### Manual

To run the front-end manually, you are required to install a few dependencies. In the root directory, run the following command to install all npm packages and run the environment:

```sh
npm install &&
npm run start
```

Now the front-end should be running on http://localhost:3000/.
