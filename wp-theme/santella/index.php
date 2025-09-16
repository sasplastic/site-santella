<?php
/**
 * Santella React Theme entry
 */
get_header();
?>
<main id="santella-app">
  <div id="root"></div>
  <?php
  // Optional: Fallback content for no-JS
  echo '<noscript>Para melhor experiência, ative o JavaScript.</noscript>';
  ?>
  <style>
    /* Ensure the app can consume viewport height without extra spacing from WP */
    html, body, #santella-app, #root { height: auto; min-height: 100%; }
  </style>
</main>
<?php get_footer();
