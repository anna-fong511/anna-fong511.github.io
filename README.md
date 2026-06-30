## Overview

- Stack: Jekyll + Sass
- Branch used for deploy: `main`
- Live URL: `https://anna-fong511.github.io/`

## Local development

1. Install Ruby 3.x and Bundler.
2. Install dependencies:

   ```bash
   bundle install
   ```

3. Start local server:

   ```bash
   bundle exec jekyll serve
   ```

4. Open `http://127.0.0.1:4000`.

## Build

```bash
bundle exec jekyll build
```

The generated static output is in `_site/`.

## Sass warnings

This project currently uses legacy Bootstrap/Font Awesome Sass sources. Dart Sass may show deprecation warnings (for example `@import`, `slash-div`, and color function warnings). These are warnings, not build-breaking errors.

For Jekyll builds, warning noise is already reduced in `_config.yml` with:

- `sass.quiet_deps: true`
- `sass.silence_deprecations`

If you compile Sass directly with Dart Sass, use:

```bash
sass --quiet-deps --silence-deprecation=import,global-builtin,color-functions,slash-div,abs-percent,function-units assets/css/styles.scss assets/css/styles.css
```

## Deployment (GitHub Pages)

- Deployment uses GitHub Actions workflow in `.github/workflows/jekyll.yml`.
- The workflow builds and deploys on pushes to `main`.
- In repository settings, ensure `Settings -> Pages -> Source` is set to `GitHub Actions`.

## Troubleshooting

- If styles look missing, verify `assets/src/css/*.css` files exist and Sass imports in `assets/src/sass/styles.scss` point to `../src/css/...`.
- If local `bundle` commands fail, install Ruby and Bundler first, then run `bundle install` again.
