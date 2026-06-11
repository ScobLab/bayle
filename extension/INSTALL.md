# Installer l'extension Bayle

## Chrome, Edge, Opera (installation manuelle)

1. Téléchargez ce dossier `extension/` depuis GitHub
2. Dans Chrome : ouvrez chrome://extensions/
   Dans Edge : ouvrez edge://extensions/
   Dans Opera : ouvrez opera://extensions/
3. Activez le "Mode développeur" (interrupteur en haut à droite)
4. Cliquez sur "Charger l'extension non empaquetée"
5. Sélectionnez le dossier `extension/` que vous avez téléchargé
6. L'icône Bayle (B doré) apparaît dans votre barre d'outils

Note : Chrome peut afficher un avertissement "extension non vérifiée par le Chrome Web Store" au démarrage. C'est normal pour une installation manuelle. Cliquez sur "Conserver l'extension".

## Firefox

1. Téléchargez ce dossier `extension/` depuis GitHub
2. Renommez `manifest-firefox.json` en `manifest.json` (remplacez l'existant)
3. Ouvrez Firefox et allez sur about:debugging
4. Cliquez sur "Ce Firefox" puis "Charger un module complémentaire temporaire"
5. Sélectionnez le fichier `manifest.json` dans le dossier `extension/`
6. L'icône Bayle apparaît dans votre barre d'outils

Note : en installation temporaire Firefox, l'extension doit être rechargée à chaque redémarrage du navigateur. La publication sur addons.mozilla.org (gratuite) permettra une installation permanente.

## Utilisation

1. Naviguez sur n'importe quel article de presse
2. Cliquez sur l'icône Bayle dans votre barre d'outils
3. Entrez votre clé API Mistral (une seule fois, elle est mémorisée)
4. Cliquez sur "Analyser cet article"
5. Lisez l'analyse dans le panneau
