# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/8ebf6de6-ce98-4955-8de0-f4f1b6f0bdcc

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/8ebf6de6-ce98-4955-8de0-f4f1b6f0bdcc) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/8ebf6de6-ce98-4955-8de0-f4f1b6f0bdcc) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# Santella site — Apache on port 5000

This project is built with Vite + React and served via Apache HTTP Server inside a Docker container.

## Quick start

1) Build the site

```bash
npm install
npm run build
```

2) Run Apache on port 5000 (containerized)

```bash
docker run -d --name santella-httpd \
  -p 5000:80 \
  -v $(pwd)/dist:/usr/local/apache2/htdocs:ro \
  -v $(pwd)/apache/httpd.conf:/usr/local/apache2/conf/httpd.conf:ro \
  httpd:2.4
```

3) Open the site

- http://localhost:5000
- Deep links (SPA) like http://localhost:5000/produtos will also work.

## Contact form (Formspree)

The contact form posts to Formspree. Configure your form id:

1. Create a form at https://formspree.io/ and copy the form id (e.g., `xpwjelnl`).
2. Create `.env.local` with:

```
VITE_FORMSPREE_ID=your_form_id
```

3. Rebuild the site:

```bash
npm run build
```

Notes:
- A fallback id `xpwjelnl` is used if the env var is not set.
- We append `_subject` and `_replyto` to improve inbox handling.
- On success, a toast confirms the message was sent.
- Optionally configure auto-reply and notifications in Formspree dashboard.

## Stop / remove

```bash
docker stop santella-httpd
# optional: remove container
docker rm santella-httpd
```

## Notes

- The Apache config at `apache/httpd.conf` enables a Single Page App fallback to `index.html` using `mod_rewrite`.
- If you change the app, rebuild with `npm run build` and the container will serve the updated `dist/` files.
- To mount a custom favicon or images, place them in `public/` before building. Currently images load from `src/assets/`.
