<?php
/**
 * Santella React Theme functions
 */

function santella_enqueue_assets() {
    $theme_dir = get_stylesheet_directory();
    $manifest_path = $theme_dir . '/dist/manifest.json';
    if (!file_exists($manifest_path)) {
        return;
    }

    $manifest = json_decode(file_get_contents($manifest_path), true);

    // Try to find the main entry. Vite includes an index.html entry by default when building HTML.
    $entry = isset($manifest['index.html']) ? $manifest['index.html'] : null;
    if (!$entry) {
        // Fallback: attempt to find first entry with 'file'
        foreach ($manifest as $key => $val) {
            if (is_array($val) && isset($val['file'])) { $entry = $val; break; }
        }
        if (!$entry) return;
    }

    // Enqueue CSS files
    if (!empty($entry['css'])) {
        foreach ($entry['css'] as $i => $css) {
            wp_enqueue_style(
                'santella-style-' . $i,
                get_stylesheet_directory_uri() . '/dist/' . $css,
                [],
                null
            );
        }
    }

    // Enqueue main JS
    if (!empty($entry['file'])) {
        wp_enqueue_script(
            'santella-app',
            get_stylesheet_directory_uri() . '/dist/' . $entry['file'],
            [],
            null,
            true
        );
    }

    // Print modulepreload links for imports (performance)
    if (!empty($entry['imports'])) {
        foreach ($entry['imports'] as $importKey) {
            if (isset($manifest[$importKey]['file'])) {
                echo '<link rel="modulepreload" href="' . esc_url(get_stylesheet_directory_uri() . '/dist/' . $manifest[$importKey]['file']) . '" />' . PHP_EOL;
            }
        }
    }
}
add_action('wp_enqueue_scripts', 'santella_enqueue_assets', 5);

// Basic theme supports
add_action('after_setup_theme', function() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
});
