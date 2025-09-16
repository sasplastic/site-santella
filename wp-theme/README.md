# Santella React WordPress Theme

This folder contains a minimal WordPress theme that hosts the built React app.

## Build steps

1. From project root, build the theme assets with Vite using the WP_THEME flag:

   - Linux/macOS:
     - `WP_THEME=1 npm run build`

2. The build will output to `wp-theme/santella/dist/` with `manifest.json` and hashed assets.

## Install in WordPress

1. Copy the entire `wp-theme/santella/` directory into your WordPress installation at:
   - `wp-content/themes/santella/`

2. In the WordPress Admin → Appearance → Themes, activate "Santella React Theme".

3. Visit your site homepage. The React app mounts into the theme’s `index.php`.

## Routing notes

- This theme renders a single-page app at the root.
- If you need WordPress pages/posts, consider adding a custom page template instead.
