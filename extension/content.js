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
  const viaReadability = extractWithReadability();
  if (viaReadability) return viaReadability;

  // Sinon fallback sur extraction basique
  return extractBasic();
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
