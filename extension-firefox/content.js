// Écoute les demandes d'extraction de texte depuis popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'extractText') {
    try {
      const article = extractArticle();
      sendResponse({ success: true, text: article.text, title: article.title });
    } catch (e) {
      sendResponse({ success: false, error: e.message });
    }
    return true;
  }
});

function extractArticle() {
  // Utilise Readability.js (Mozilla) si disponible pour une extraction propre de l'article
  const result = extractWithReadability() || extractBasic();

  // Préfixe avec les métadonnées de la page (titre, auteur, source) si disponibles
  const metaPrefix = buildMetadataPrefix();
  if (metaPrefix) {
    result.text = metaPrefix + result.text;
  }

  return result;
}

// ====================================================================
// MÉTADONNÉES DE LA PAGE (auteur, titre, source)
// ====================================================================
function buildMetadataPrefix() {
  const titre = extractTitre();
  const auteur = extractAuteur();
  const source = extractSource();

  const lines = [];
  if (titre) lines.push(`Titre : ${titre}`);
  if (auteur) lines.push(`Auteur : ${auteur}`);
  if (source) lines.push(`Source : ${source}`);

  if (lines.length === 0) return '';

  return `[MÉTADONNÉES DE LA PAGE]\n${lines.join('\n')}\n[FIN MÉTADONNÉES]\n\n`;
}

function extractTitre() {
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle?.content?.trim()) return ogTitle.content.trim();

  const h1 = document.querySelector('h1');
  if (h1?.textContent?.trim()) return h1.textContent.replace(/\s+/g, ' ').trim();

  return '';
}

function extractAuteur() {
  const metaAuthor = document.querySelector('meta[name="author"]');
  if (metaAuthor?.content?.trim()) return metaAuthor.content.trim();

  const relAuthor = document.querySelector('[rel="author"]');
  if (relAuthor?.textContent?.trim()) return relAuthor.textContent.replace(/\s+/g, ' ').trim();

  const classAuthor = document.querySelector('.author');
  if (classAuthor?.textContent?.trim()) return classAuthor.textContent.replace(/\s+/g, ' ').trim();

  const classContainsAuthor = document.querySelector('[class*="author"]');
  if (classContainsAuthor?.textContent?.trim()) return classContainsAuthor.textContent.replace(/\s+/g, ' ').trim();

  // Sites académiques (ex. Cairn)
  const classContrib = document.querySelector('[class*="contrib"]');
  if (classContrib?.textContent?.trim()) return classContrib.textContent.replace(/\s+/g, ' ').trim();

  const classCreator = document.querySelector('[class*="creator"]');
  if (classCreator?.textContent?.trim()) return classCreator.textContent.replace(/\s+/g, ' ').trim();

  const itempropAuthor = document.querySelector('[itemprop="author"]');
  if (itempropAuthor?.textContent?.trim()) return itempropAuthor.textContent.replace(/\s+/g, ' ').trim();

  const itempropName = document.querySelector('[itemprop="name"]');
  if (itempropName?.textContent?.trim()) return itempropName.textContent.replace(/\s+/g, ' ').trim();

  const linkPublications = document.querySelector('a[href*="publications-de-"]');
  if (linkPublications?.textContent?.trim()) return linkPublications.textContent.replace(/\s+/g, ' ').trim();

  return '';
}

function extractSource() {
  const ogSiteName = document.querySelector('meta[property="og:site_name"]');
  if (ogSiteName?.content?.trim()) return ogSiteName.content.trim();

  return '';
}

function extractWithReadability() {
  if (typeof Readability === 'undefined') return null;
  try {
    const docClone = document.cloneNode(true);
    const parsed = new Readability(docClone).parse();
    if (!parsed || !parsed.textContent) return null;

    const text = parsed.textContent
      .replace(/\s{3,}/g, '\n\n')
      .trim()
      .substring(0, 15000);

    if (text.length < 200) return null;

    return { text, title: parsed.title || document.title || '' };
  } catch (e) {
    return null;
  }
}

function extractBasic() {
  // Clone le document pour ne pas modifier la page
  const docClone = document.cloneNode(true);

  // Supprime les éléments non-contenus (nav, footer, aside, ads, scripts)
  const toRemove = docClone.querySelectorAll(
    'nav, footer, aside, header, .ad, .ads, .advertisement, .cookie, .popup, .modal, script, style, noscript'
  );
  toRemove.forEach(el => el.remove());

  // Cherche le contenu principal de l'article
  const selectors = [
    'article',
    '[role="main"]',
    '.article-body',
    '.article-content',
    '.post-content',
    '.entry-content',
    '.story-body',
    'main'
  ];

  let content = null;
  for (const selector of selectors) {
    content = docClone.querySelector(selector);
    if (content && content.textContent.trim().length > 200) break;
  }

  // Fallback : body complet nettoyé
  if (!content || content.textContent.trim().length < 200) {
    content = docClone.body;
  }

  // textContent (et non innerText) car le clone n'est pas attaché au document :
  // innerText dépend du rendu et renverrait une chaîne vide sur un nœud détaché.
  const text = content.textContent
    .replace(/\s{3,}/g, '\n\n')
    .trim()
    .substring(0, 15000); // Limite à 15000 caractères pour l'API

  const title = document.title || '';

  return { text, title };
}
