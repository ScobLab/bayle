# Install the Bayle extension

Lire en français : [INSTALL.md](INSTALL.md)

## Chrome, Edge, Opera (manual installation)

1. Download this `extension/` folder from GitHub
2. In Chrome: open chrome://extensions/
   In Edge: open edge://extensions/
   In Opera: open opera://extensions/
3. Enable "Developer mode" (toggle in the top right corner)
4. Click "Load unpacked"
5. Select the `extension/` folder you downloaded
6. The Bayle icon (golden B) appears in your toolbar

Note: Chrome may display a "extension not verified by the Chrome Web Store" warning at startup. This is normal for a manual installation. Click "Keep extension".

## Firefox

1. Download this `extension/` folder from GitHub
2. Rename `manifest-firefox.json` to `manifest.json` (replace the existing one)
3. Open Firefox and go to about:debugging
4. Click "This Firefox" then "Load Temporary Add-on"
5. Select the `manifest.json` file in the `extension/` folder
6. The Bayle icon appears in your toolbar

Note: with a temporary Firefox installation, the extension must be reloaded each time the browser restarts. Publishing on addons.mozilla.org (free) will allow a permanent installation.

## Usage

1. Navigate to any news article
2. Click the Bayle icon in your toolbar
3. Enter your Mistral API key (only once, it is saved locally)
4. Click "Analyze this article"
5. Read the analysis in the panel
