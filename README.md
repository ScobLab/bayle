# Bayle

**Outil open source d'analyse de biais médiatiques. Collez un article, obtenez une lecture neutre et documentée.**

Bayle analyse un article de presse ou un discours public et vous restitue : qui parle, ce qui est factuel, ce qui relève de l'opinion, quels intérêts le discours sert, ce qui est passé sous silence, et les contre-points légitimes d'autres acteurs.

Le but n'est pas de vous dire ce qu'il faut penser. Il est de vous donner les éléments pour penser par vous-même.

→ **[Utiliser Bayle](https://scoblab.github.io/bayle/)**

## Pourquoi ce nom

Pierre Bayle (1647-1706), philosophe français des Lumières, est considéré comme le père du fact-checking moderne. Son *Dictionnaire historique et critique* (1697) est le premier ouvrage à appliquer une méthode rigoureuse de vérification des sources : confrontation systématique des témoignages, citation des positions contradictoires, signalement des incertitudes.

Persécuté pour sa défense de la liberté de conscience, exilé à Rotterdam, Bayle a passé sa vie à démontrer qu'on pouvait analyser un texte sans en partager les conclusions. Cet outil reprend son esprit : exposer la méthode, citer les sources, laisser le lecteur arbitrer.

## Pourquoi cet outil

Les présidentielles 2027 approchent. Les rédactions se concentrent, les algorithmes polarisent, les discours clivants rapportent des clics. Face à ça, un citoyen isolé n'a pas le temps ni les outils pour remonter chaque affirmation à sa source.

Bayle ne remplace pas le journalisme. Il aide à le lire.

## Comment ça marche

1. Vous collez un article, une transcription, ou un extrait de discours
2. L'outil envoie le texte à l'API Mistral avec un prompt d'analyse structuré
3. Vous recevez une fiche en sept rubriques : locuteur, faits vs opinions, vérifications, intérêts servis, biais de cadrage, omissions, contre-points, fiabilité globale

Aucune donnée n'est stockée. Tout passe directement entre votre navigateur et l'API Mistral.

## Utilisation

### Prérequis

Une clé API Mistral. [Obtenir une clé gratuitement](https://console.mistral.ai/api-keys) — sans carte bancaire, juste une adresse email et un numéro de téléphone.

### Démarrer

Rendez-vous sur https://scoblab.github.io/bayle/, collez votre clé API Mistral, collez votre article, lancez l'analyse.

La clé est stockée uniquement dans votre navigateur, en localStorage. Elle n'est jamais transmise à un serveur tiers.

### Pourquoi Mistral ?

Mistral AI est une entreprise française dont les modèles sont open source. Utiliser Mistral pour Bayle est cohérent avec la vocation civique et française de l'outil. Le tier gratuit de l'API Mistral ne nécessite pas de carte bancaire.

## Avertissement important

Bayle est un outil expérimental. Les analyses sont générées par une IA qui peut se tromper, présenter des biais, ou être manipulée par du contenu adversaire. **Cet outil ne remplace ni le journalisme, ni votre propre jugement.** Vérifiez toujours les analyses avec d'autres sources.

## Limites assumées

- **Pas de vérification factuelle en temps réel** : l'outil s'appuie sur les connaissances du modèle Mistral, pas sur des bases de données officielles en direct.
- **Pas de récupération automatique depuis URL** : il faut copier-coller le texte.
- **Pas de transcription vidéo** : hors périmètre V0.
- **Biais résiduel du modèle** : Mistral a ses propres biais d'entraînement. Le prompt est conçu pour les minimiser, pas les éliminer.

## Méthodologie

Le prompt d'analyse complet est [disponible ici](./PROMPT.md). Il est volontairement public. Toute la légitimité de l'outil repose sur la transparence de ce qu'il demande au modèle.

Si vous pensez que le prompt introduit un biais, ouvrez une Issue. Les décisions méthodologiques sont discutées publiquement.

## Contribuer

- **Signaler un bug ou un biais** : ouvrir une Issue avec exemple précis
- **Proposer une amélioration du prompt** : ouvrir une Pull Request avec justification
- **Débattre de la méthodologie** : Discussions GitHub
- **Traduire** : une version EN / ES / DE / IT est envisageable, contributions bienvenues

## Forks et usage du nom

Le code est sous licence MIT. **Le nom "Bayle" et l'identité visuelle sont réservés à l'instance officielle.** Si vous créez un fork, utilisez un autre nom et indiquez clairement qu'il ne s'agit pas de Bayle officiel.

## Gouvernance

Version 0 maintenue par Arthur Bosc ([@ScobLab](https://github.com/ScobLab)). Objectif à court terme : constituer un comité éditorial pluraliste pour arbitrer les évolutions méthodologiques. Toute candidature via Issues.

## Architecture technique

- HTML + CSS + JavaScript vanilla
- Aucun backend, aucune base de données
- Hébergé en GitHub Pages, coût d'infrastructure : zéro
- Appel direct depuis le navigateur vers l'API Mistral
- Tailwind CSS via CDN
- Endpoint Mistral hardcodé dans le code source

## Licence

MIT. Voir [LICENSE](./LICENSE).

## Contact

Issues GitHub pour tout ce qui concerne le projet.
