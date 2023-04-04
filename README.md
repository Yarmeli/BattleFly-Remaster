# BattleFly Remastered

This project was created to rework the existing [BattleFly website](https://www.battlefly.game/). I went through the website and found some minor issues that could be fixed in their current implementation, and decided to rework some of the pages of the website.

I have only reworked the front-end, however, NextJS also supports back-end code. This project can easily be extended to include custom back-end logic

This project is using the [T3 Stack](https://create.t3.gg/) and since it's mainly focused on the front-end, I have used Tailwind to style it.

Front-End libraries used:

- [React DaisyUI](https://github.com/daisyui/react-daisyui) (React component library for DaisyUI)
- [Framer-Motion](https://github.com/framer/motion) - Add custom transitions in the `/Battlegrounds` page
- [React-Toastify](https://github.com/fkhadra/react-toastify) - Add a toast message when copying discord handles in the `/team` page

## How do I deploy this?

I am currently using [Vercel](https://create.t3.gg/en/deployment/vercel) to handle all the deployment configuration. It is as simple as:

1. Login with GitHub
2. Select the correct project
3. Set any environment variables (if needed)
4. Enjoy - Push and let Vercel do its thing
