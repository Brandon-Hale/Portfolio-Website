# Portfolio Website

My personal portfolio and resume website built with React. This site showcases my experience as a Software Engineer and serves as an interactive resume highlighting my projects, skills, and professional background.

## 🚀 Features

- Built with modern JavaScript, using tools and frameworks like [create-react-app](https://github.com/facebook/create-react-app), [React-Router](https://reactrouter.com/), and SCSS.
- Automated workflows via [GitHub Actions](https://github.com/features/actions).
- Responsive design optimized for all devices
- Interactive resume sections with detailed project information

## 🚀 Setup and Running

1. Clone the repository:

   ```bash
   git clone https://github.com/Brandon-Hale/portfolio-website.git
   cd portfolio-website
   ```

2. (Optional) Ensure you're on Node v16 or higher:

   ```bash
   nvm install
   node --version
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

By default, the application should be available at [http://localhost:3000/](http://localhost:3000/).

## 🚢 Deploying

### Deploying to GitHub Pages

1. Update the environment variables and Git remote URL in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Adjust the `homepage` value in `package.json` based on your hosting preferences.
3. Planning on using a custom domain? Update `public/CNAME`. Otherwise, remove it.

After making a commit to `main`, simply push your changes, and the deployment will be handled automatically.

### Static Export

For a static export without deploying to GitHub Pages:

- Remove or disable `.github/workflows/github-pages.yml`.
- Execute:

  ```bash
  npm run predeploy
  ```

This will generate a static version in `build/` which you can host or deploy to a CDN.

## 🙌 Acknowledgements

- Initial template from [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](html5up.net).
- Built with React and modern web technologies.
