# Bayle — Contexte projet pour Claude Code

## Identité du projet
- Nom : Bayle (hommage à Pierre Bayle 1647-1706, père du fact-checking moderne)
- GitHub : https://github.com/ScobLab/bayle
- Site : https://scoblab.github.io/bayle/
- Propriétaire : Arthur Bosc
- Pseudo GitHub actuel : ScobLab (ancien pseudo : Scobarth, ne plus utiliser)
- Description : Outil open source d'analyse de biais médiatiques, vocation civique, contexte présidentielle 2027

## Stack technique
- HTML + CSS + JS vanilla, zéro backend, zéro coût serveur
- GitHub Pages (hébergement gratuit)
- API Mistral (endpoint hardcodé : https://api.mistral.ai/v1/chat/completions)
- Modèle : mistral-small-latest
- response_format: json_object activé (force JSON valide)
- Clé API fournie par l'utilisateur : localStorage (site) ou chrome.storage.local (extension)
- Tailwind CSS via CDN uniquement

## Architecture fichiers
- index.html, style.css, script.js : site principal
- risques.html : page documentation des risques (même design que le site)
- PROMPT.md : prompt d'analyse public et auditable
- favicon.svg : icône B doré sur fond noir, coins arrondis rx=12
- .nojekyll : nécessaire pour GitHub Pages
- demo/analyse-1.json : cinéma français, score 7/10, vigilance aucune
- demo/analyse-2.json : Ukraine, score 5/10, vigilance géopolitique_russie_ukraine
- demo/analyse-3.json : vaccination, score 4/10, vigilance santé_science_médicale
- extension/ : extension navigateur complète

## Architecture extension/
- manifest.json : Chrome/Edge/Opera (Manifest V3)
- manifest-firefox.json : Firefox (Manifest V2)
- popup.html, popup.css, popup.js : interface panneau 420px
- content.js : extraction texte + métadonnées (Readability.js + fallbacks)
- background.js : service worker minimal
- readability.js : Mozilla Readability (téléchargé depuis GitHub)
- icons/icon16.png, icon48.png, icon128.png : icônes PNG (rendu via Chrome headless)
- INSTALL.md : guide installation Chrome/Edge/Opera/Firefox

## Design (ne jamais modifier sans brief explicite)
- Header : fond #1A1A1A, grille SVG blanche opacity 0.10
- Corps : fond #FAF8F4
- Accent doré : #C9A84C (trait sous titre, bouton démo)
- Texte : #1A1A1A
- Bordures : #DDD
- Bouton principal : fond #1A1A1A, texte #FFF
- Typographie : Georgia serif pour titres, system-ui pour corps
- Largeur max : 800px centré
- Surtitre : "Outil d'analyse · Open source"
- Titre : "Bayle" Georgia 56px
- Trait doré : 40px x 3px #C9A84C
- Sous-titre : italique Georgia #AAA

## Prompt et vigilance (CRITIQUE)
- ANALYSIS_PROMPT doit toujours être identique dans script.js ET extension/popup.js
- PROMPT.md doit toujours être synchronisé avec ANALYSIS_PROMPT
- response_format json_object dans les deux appels API
- 8 niveaux de vigilance : aucune, géopolitique_russie_ukraine, géopolitique_chine, histoire_innovation_européenne, économie_entreprise_spécifique, élections_démocratie, santé_science_médicale, tentative_manipulation_détectée
- VIGILANCE_MESSAGES doit être identique dans script.js ET extension/popup.js
- Marqueur [DÉSINFORMATION SUSPECTÉE] intégré dans le prompt

## Parsing JSON (3 niveaux de fallback)
1. JSON.parse(cleanJSON(rawText))
2. JSON.parse(fixMissingCommas(cleanJSON(rawText)))
3. repairJSON(cleanJSON(rawText))
4. showRawResponse si tout échoue
- cleanJSON(), fixMissingCommas(), repairJSON() doivent être identiques dans script.js ET extension/popup.js

## Ordre d'affichage du résultat
filigrane → article source (replié) → fiabilité_globale (mis en avant, header noir) → locuteur → faits_vs_opinions → vérifications → intérêts_servis → biais_de_cadrage → omissions → contre_points_légitimes → encart vigilance (en dernier, fond ambré)

## Contraintes non négociables
- Endpoint Mistral hardcodé, jamais paramétrable depuis l'interface
- Zéro collecte de données, zéro tracking, zéro cookie
- Clé API jamais envoyée ailleurs que vers api.mistral.ai
- Bouton "Effacer ma clé" toujours présent
- Filigrane traçable sur tous les résultats (URL officielle + horodatage)
- Mentions "article fictif" sur les 3 démos

## Sessions restantes à implémenter
- methode.html : page pédagogique (biais de cadrage, mots chargés, omissions, faux dilemme)
- Champ "Auteur (optionnel)" dans l'extension
- Bouton "Copier l'analyse"
- Permalien pour partager une analyse
- Niveau de vigilance recherche_scientifique dans le prompt
- Traduction anglaise
- Publication Firefox Add-ons (gratuit, dossier extension/ prêt)
- Publication Chrome Web Store (5€, plus tard)

## Points de vigilance pour Claude Code
- Toujours modifier script.js ET extension/popup.js en même temps pour les fonctions partagées
- Ne jamais modifier l'endpoint Mistral
- Ne jamais écraser README.md sans instruction explicite
- Les fichiers numérotés (2_BRIEF_CLAUDE_CODE.md, etc.) sont des documents de travail, pas des fichiers de l'application
- Pseudo GitHub : ScobLab (pas Scobarth)
- Commande de lancement : cd "F:\Claude-projects\Bayle\bayle" puis claude
