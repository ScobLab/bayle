# Soumettre Bayle sur Firefox Add-ons (AMO)

## Prérequis

Le dossier `extension-firefox/` à la racine du projet contient le package prêt à soumettre :
- `manifest.json` — Manifest V2, compatible Firefox 57+
- `popup.html`, `popup.js`, `popup.css` — interface du panneau
- `content.js`, `background.js`, `readability.js` — scripts
- `icons/` — icônes PNG

---

## Étape 1 — Créer un compte développeur Mozilla

1. Rendez-vous sur **https://addons.mozilla.org/fr/developers/**
2. Cliquez sur **"S'inscrire"** (gratuit, aucun frais)
3. Créez ou connectez-vous avec un compte Firefox (Mozilla account)
4. Acceptez les conditions d'utilisation développeur

---

## Étape 2 — Zipper le dossier extension-firefox/

Depuis la racine du projet, zippez le **contenu** du dossier (pas le dossier lui-même) :

**Windows (PowerShell) :**
```powershell
Compress-Archive -Path "extension-firefox\*" -DestinationPath "bayle-firefox-1.0.0.zip" -Force
```

**macOS/Linux :**
```bash
cd extension-firefox && zip -r ../bayle-firefox-1.0.0.zip . && cd ..
```

Vérifiez que le zip contient bien `manifest.json` à la racine (pas `extension-firefox/manifest.json`).

---

## Étape 3 — Soumettre l'extension

1. Rendez-vous sur **https://addons.mozilla.org/fr/developers/addon/submit/upload-listed**
2. Choisissez **"Sur addons.mozilla.org"** (extension listée publiquement)
3. Uploadez le fichier `bayle-firefox-1.0.0.zip`
4. AMO valide automatiquement la structure — corrigez les erreurs éventuelles

---

## Étape 4 — Remplir la fiche de l'extension

### Informations requises

| Champ | Valeur suggérée |
|---|---|
| **Nom** | Bayle |
| **Résumé** (max 250 car.) | Analysez les biais médiatiques de n'importe quel article en un clic. Utilise l'IA Mistral pour identifier faits, opinions, biais de cadrage et omissions. |
| **Description** | Voir ci-dessous |
| **Catégorie** | Outils de productivité |
| **Étiquettes** | actualités, journalisme, biais, analyse, IA |
| **Site web** | https://scoblab.github.io/bayle/ |
| **URL du code source** | https://github.com/ScobLab/bayle |

### Description complète suggérée

```
Bayle est un outil open source d'aide à la lecture critique des articles de presse, en hommage à Pierre Bayle (1647-1706), père du fact-checking moderne.

En un clic sur n'importe quel article, Bayle extrait le texte et produit une analyse structurée via l'API Mistral (clé API fournie par l'utilisateur) :

• Score de fiabilité sur 10
• Faits vérifiables vs opinions
• Biais de cadrage et mots chargés
• Omissions notables
• Intérêts servis par le discours
• Points de vue légitimes alternatifs
• Niveau de vigilance recommandé (géopolitique, santé, élections…)

Aucune donnée collectée. Votre clé API est stockée uniquement dans votre navigateur et ne transite que vers api.mistral.ai. Code source entièrement public et auditable.

Nécessite une clé API Mistral gratuite (console.mistral.ai/api-keys).
```

### Politique de confidentialité

AMO exige une politique de confidentialité car l'extension accède au contenu des pages. Utilisez ce texte :

```
Bayle n'enregistre, ne transmet et ne collecte aucune donnée personnelle.

La seule communication réseau effectuée est l'envoi du texte de l'article vers l'API Mistral (api.mistral.ai) avec la clé API fournie par l'utilisateur. Cette clé est stockée localement dans le navigateur (storage.local) et n'est jamais envoyée ailleurs qu'à api.mistral.ai.

Aucun cookie, aucun tracking, aucune télémétrie.

Code source complet disponible sur https://github.com/ScobLab/bayle
```

---

## Étape 5 — Upload des captures d'écran (recommandé)

AMO recommande 1 à 5 captures. Prenez des screenshots de :
1. Le panneau Bayle ouvert sur un article avec le résultat d'analyse
2. Le score de fiabilité affiché

Dimensions recommandées : **1280×800** ou **640×400** minimum.

---

## Étape 6 — Soumettre pour révision

1. Cliquez sur **"Soumettre pour révision"**
2. AMO effectue une révision automatique puis manuelle
3. Délai habituel : **1 à 7 jours ouvrés**
4. Vous recevez un email de confirmation ou de demande de correction

### Questions fréquentes de la révision AMO

AMO peut demander à justifier :
- L'usage de `<all_urls>` dans `content_scripts` → justification : l'utilisateur peut lire des articles sur n'importe quel site
- L'accès réseau à `api.mistral.ai` → justification : analyse IA de l'article, clé fournie par l'utilisateur
- La permission `storage` → justification : stockage local de la clé API uniquement

---

## Après la publication

- L'URL publique sera : `https://addons.mozilla.org/fr/firefox/addon/bayle/`
- Pour mettre à jour : incrémentez `version` dans `manifest.json` et resoumettez un nouveau zip
- Mettez à jour `CLAUDE.md` et `extension/INSTALL.md` avec l'URL AMO une fois publiée
