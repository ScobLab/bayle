'use strict';

const TRANSLATIONS = {
  fr: {
    headerSurtitre: "Guide · Open source",
    headerSoustitre: "Comment analyser un article de presse en 5 minutes",
    backLink: "← Retour à l'outil",

    methTitle1: "1. Qui parle ?",
    methBody1: `<p>Avant même de lire le contenu, posez-vous la question de la source : qui a écrit ce texte, et pour qui ?</p>
<ul>
  <li><strong>L'auteur</strong> : un article signé par un journaliste a généralement une expertise vérifiable. Une tribune ou un édito signé par une personnalité extérieure (dirigeant d'entreprise, responsable politique, association) défend souvent un point de vue qui lui est favorable.</li>
  <li><strong>Le média</strong> : chaque média a une ligne éditoriale, affichée ou implicite, qui influence le choix des sujets traités et l'angle retenu.</li>
  <li><strong>Les affiliations</strong> : propriétaire du média, financements, partenaires, annonceurs. Ces liens peuvent orienter, consciemment ou non, le traitement de certains sujets.</li>
</ul>
<p><strong>Exemples concrets :</strong></p>
<ul>
  <li>Une tribune « Pourquoi il faut simplifier le droit du travail », signée par le dirigeant d'une fédération patronale : l'angle correspond aux intérêts de l'auteur, ce qui ne le rend pas faux, mais doit être pris en compte.</li>
  <li>Un article non signé sur un site se présentant comme « média d'investigation indépendant » : la page « Qui sommes-nous » ou les mentions légales permettent souvent de mieux comprendre qui le détient et quelle ligne éditoriale il défend.</li>
  <li>Un « expert » cité dans un article sur la 5G, présenté uniquement comme « chercheur », alors qu'il est aussi consultant rémunéré par un opérateur télécom : ce lien d'intérêt change la portée de ses propos.</li>
</ul>`,

    methTitle2: "2. Faits ou opinions ?",
    methBody2: `<p>Un même article mélange souvent des affirmations vérifiables et des jugements de valeur. Apprendre à les distinguer est la base de la lecture critique.</p>
<ul>
  <li><strong>Un fait vérifiable</strong> s'appuie sur des données, des dates, des citations exactes, des événements qui peuvent être confirmés par d'autres sources.</li>
  <li><strong>Une opinion</strong> exprime un jugement de valeur, une interprétation ou une anticipation. Elle n'est ni vraie ni fausse en soi, mais doit être identifiée comme telle.</li>
  <li>Repérez les verbes et adjectifs qui signalent un jugement (« scandaleux », « courageux », « inquiétant ») par opposition aux chiffres, dates et citations directes.</li>
</ul>
<p><strong>Exemples concrets :</strong></p>
<ul>
  <li>« Le Parlement a adopté le texte par 312 voix contre 240 » : fait vérifiable (chiffre, date, événement précis).</li>
  <li>« Cette décision est une victoire historique pour les défenseurs de l'environnement » : opinion, jugement de valeur sur la portée de la décision.</li>
  <li>« Selon plusieurs experts, cette mesure serait inefficace » : sans préciser qui sont ces experts ni combien ils sont, la formulation mélange une apparence de fait (consensus d'experts) et une affirmation non sourcée.</li>
</ul>`,

    methTitle3: "3. Les biais de cadrage",
    methBody3: `<p>Le « cadrage » désigne la façon dont un sujet est présenté : les mots choisis, l'angle retenu et les procédés rhétoriques utilisés influencent la perception du lecteur, souvent avant même qu'il ait lu les arguments.</p>
<ul>
  <li><strong>Mots chargés</strong> : certains mots portent une connotation positive ou négative qui oriente le jugement.</li>
  <li><strong>Choix d'angle</strong> : un même événement peut être présenté très différemment selon ce qui est mis en avant ou en titre.</li>
  <li><strong>Procédés rhétoriques</strong> : généralisations, faux dilemmes, appels à l'émotion ou à la peur peuvent remplacer l'argumentation factuelle.</li>
</ul>
<p><strong>Exemples concrets :</strong></p>
<ul>
  <li>« Régime » (connotation autoritaire, négative) contre « gouvernement » (neutre) pour désigner la même autorité politique selon le pays dont on parle.</li>
  <li>Titre « Polémique autour de la réforme des retraites » contre « La réforme des retraites suscite des critiques de syndicats et de l'opposition » : le mot « polémique » donne une impression de confusion généralisée, alors que la seconde formulation précise qui critique et pourquoi.</li>
  <li>Faux dilemme : « Soit on accepte cette réforme, soit le système s'effondre dans dix ans » — présente deux issues extrêmes en ignorant les positions intermédiaires.</li>
</ul>`,

    methTitle4: "4. Ce qui est omis",
    methBody4: `<p>Ce qu'un article ne dit pas est parfois aussi important que ce qu'il dit. Une information factuellement exacte peut donner une impression trompeuse si elle est présentée hors contexte.</p>
<ul>
  <li><strong>Contexte manquant</strong> : un chiffre ou un événement isolé peut donner une impression différente une fois replacé dans son évolution sur plusieurs années ou comparé à d'autres pays.</li>
  <li><strong>Contre-arguments ignorés</strong> : un article qui ne donne la parole qu'à un seul camp offre une image partielle du débat.</li>
  <li><strong>Sources alternatives non citées</strong> : l'absence de référence à des études ou rapports qui nuanceraient le propos est un signal à surveiller.</li>
</ul>
<p><strong>Exemples concrets :</strong></p>
<ul>
  <li>Un titre « La criminalité explose dans cette ville » sans préciser que la hausse concerne une catégorie précise d'infractions, ou qu'elle est comparable à celle des villes voisines.</li>
  <li>Un compte-rendu d'une annonce gouvernementale qui ne cite aucune réaction de l'opposition, des syndicats ou de la société civile, alors que ces réactions existent et sont publiques.</li>
  <li>Un bilan économique mettant en avant la croissance du PIB sans mentionner l'évolution des inégalités ou du pouvoir d'achat sur la même période.</li>
</ul>`,

    methTitle5: "5. À qui ça profite ?",
    methBody5: `<p>Un discours sert toujours, directement ou indirectement, des intérêts. Identifier qui profiterait de ce que le lecteur croie ou fasse aide à évaluer la neutralité d'un texte.</p>
<ul>
  <li><strong>Intérêts économiques</strong> : qui gagnerait financièrement si le lecteur était convaincu par cet article ?</li>
  <li><strong>Intérêts politiques</strong> : l'article sert-il à renforcer une position, discréditer un adversaire, ou détourner l'attention d'un autre sujet ?</li>
  <li><strong>Sources citées</strong> : vérifiez qui sont les « experts », « études » ou « rapports » cités, et qui les finance.</li>
</ul>
<p><strong>Exemples concrets :</strong></p>
<ul>
  <li>Un article défendant une baisse d'impôts pour les entreprises qui cite exclusivement des économistes affiliés à un think tank financé par des fédérations patronales.</li>
  <li>Une étude présentée comme « indépendante » sur l'efficacité d'un médicament, dont le financement provient en réalité du laboratoire qui le commercialise.</li>
  <li>Un article reprenant quasi mot pour mot un communiqué de presse d'une entreprise ou d'un ministère, sans recul ni questionnement : un signe que l'article relaie un message plutôt qu'il ne l'analyse.</li>
</ul>`,

    methTitle6: "6. Comment vérifier ?",
    methBody6: `<p>La lecture critique ne s'arrête pas à l'identification des biais : elle se complète par une démarche active de vérification.</p>
<ul>
  <li><strong>Sources primaires</strong> : rapports officiels, données statistiques publiques, comptes rendus de séance, jugements — autant de documents accessibles directement, sans passer par un intermédiaire.</li>
  <li><strong>Croisement de sources</strong> : comparer le traitement d'un même sujet par plusieurs médias de lignes éditoriales différentes permet de repérer les angles et les omissions propres à chacun.</li>
  <li><strong>Outils de vérification</strong> : services de fact-checking, recherche d'image inversée, archives du web.</li>
  <li><strong>Articles scientifiques et médicaux</strong> : vérifiez systématiquement le financement de l'étude, les déclarations de conflits d'intérêts, et si l'article est peer-reviewed ou un simple preprint.</li>
</ul>
<p><strong>Exemples concrets :</strong></p>
<ul>
  <li>Pour un chiffre économique ou démographique, consulter directement les données de l'INSEE, de la Banque de France ou d'Eurostat plutôt que de se fier au chiffre repris dans l'article.</li>
  <li>Lire le traitement d'un même événement par deux ou trois médias reconnus pour avoir des lignes éditoriales différentes, afin de comparer les angles retenus.</li>
  <li>Utiliser des services de vérification comme AFP Factuel, CheckNews (Libération) ou Les Décodeurs (Le Monde), ainsi que la recherche d'image inversée (Google Images, TinEye) pour vérifier l'origine d'une photo ou d'une vidéo.</li>
</ul>`,

    footerCode: "Code source",
    footerPrompt: "Prompt d'analyse (public)",
    footerIssue: "Signaler un problème",
    footerKofi: "Soutenir le projet ☕",
    footerLicense: "Licence MIT · Aucun tracking, aucun cookie"
  },
  en: {
    headerSurtitre: "Guide · Open source",
    headerSoustitre: "How to analyze a news article in 5 minutes",
    backLink: "← Back to the tool",

    methTitle1: "1. Who is speaking?",
    methBody1: `<p>Before even reading the content, ask yourself about the source: who wrote this text, and for whom?</p>
<ul>
  <li><strong>The author</strong>: an article signed by a journalist generally has verifiable expertise. An opinion piece or editorial signed by an outside figure (business leader, politician, association) often defends a viewpoint that serves their interests.</li>
  <li><strong>The media outlet</strong>: every media outlet has an editorial line, stated or implied, that influences the choice of topics covered and the angle taken.</li>
  <li><strong>Affiliations</strong>: media owner, funding, partners, advertisers. These connections can steer, consciously or not, the coverage of certain topics.</li>
</ul>
<p><strong>Concrete examples:</strong></p>
<ul>
  <li>An opinion piece "Why we need to simplify labor law," signed by the head of an employers' federation: the angle aligns with the author's interests, which doesn't make it false, but must be taken into account.</li>
  <li>An unsigned article on a website presenting itself as an "independent investigative media": the "About us" page or legal notices often help understand who owns it and what editorial line it defends.</li>
  <li>An "expert" quoted in a 5G article, presented only as a "researcher," while also being a paid consultant for a telecom operator: this conflict of interest changes the weight of their statements.</li>
</ul>`,

    methTitle2: "2. Facts or opinions?",
    methBody2: `<p>A single article often mixes verifiable claims and value judgments. Learning to distinguish them is the foundation of critical reading.</p>
<ul>
  <li><strong>A verifiable fact</strong> relies on data, dates, exact quotes, events that can be confirmed by other sources.</li>
  <li><strong>An opinion</strong> expresses a value judgment, an interpretation, or a prediction. It is neither true nor false in itself, but must be identified as such.</li>
  <li>Look for verbs and adjectives that signal judgment ("outrageous," "courageous," "alarming") as opposed to figures, dates, and direct quotes.</li>
</ul>
<p><strong>Concrete examples:</strong></p>
<ul>
  <li>"Parliament passed the bill with 312 votes to 240": verifiable fact (figure, date, specific event).</li>
  <li>"This decision is a historic victory for environmental advocates": opinion, value judgment about the decision's significance.</li>
  <li>"According to several experts, this measure would be ineffective": without specifying who these experts are or how many, the phrasing mixes an appearance of fact (expert consensus) with an unsourced claim.</li>
</ul>`,

    methTitle3: "3. Framing bias",
    methBody3: `<p>"Framing" refers to the way a topic is presented: the words chosen, the angle taken, and the rhetorical devices used influence the reader's perception, often before they have even read the arguments.</p>
<ul>
  <li><strong>Loaded words</strong>: certain words carry positive or negative connotations that steer judgment.</li>
  <li><strong>Angle choice</strong>: the same event can be presented very differently depending on what is highlighted or headlined.</li>
  <li><strong>Rhetorical devices</strong>: generalizations, false dilemmas, appeals to emotion or fear can replace factual argumentation.</li>
</ul>
<p><strong>Concrete examples:</strong></p>
<ul>
  <li>"Regime" (authoritarian, negative connotation) versus "government" (neutral) to describe the same political authority depending on the country being discussed.</li>
  <li>Headline "Controversy over pension reform" versus "Pension reform draws criticism from unions and the opposition": the word "controversy" gives an impression of generalized confusion, while the second phrasing specifies who is criticizing and why.</li>
  <li>False dilemma: "Either we accept this reform, or the system collapses in ten years" — presents two extreme outcomes while ignoring intermediate positions.</li>
</ul>`,

    methTitle4: "4. What is omitted",
    methBody4: `<p>What an article doesn't say is sometimes as important as what it says. A factually accurate piece of information can give a misleading impression if presented out of context.</p>
<ul>
  <li><strong>Missing context</strong>: an isolated figure or event can give a different impression once placed in its multi-year evolution or compared to other countries.</li>
  <li><strong>Ignored counter-arguments</strong>: an article that gives voice to only one side offers a partial picture of the debate.</li>
  <li><strong>Uncited alternative sources</strong>: the absence of references to studies or reports that would nuance the argument is a signal to watch for.</li>
</ul>
<p><strong>Concrete examples:</strong></p>
<ul>
  <li>A headline "Crime explodes in this city" without specifying that the increase concerns a specific category of offenses, or that it is comparable to neighboring cities.</li>
  <li>A report on a government announcement that cites no reaction from the opposition, unions, or civil society, even though these reactions exist and are public.</li>
  <li>An economic report highlighting GDP growth without mentioning the evolution of inequality or purchasing power over the same period.</li>
</ul>`,

    methTitle5: "5. Who benefits?",
    methBody5: `<p>A discourse always serves, directly or indirectly, certain interests. Identifying who would benefit from the reader believing or acting on the information helps assess a text's neutrality.</p>
<ul>
  <li><strong>Economic interests</strong>: who would gain financially if the reader were convinced by this article?</li>
  <li><strong>Political interests</strong>: does the article serve to strengthen a position, discredit an opponent, or divert attention from another topic?</li>
  <li><strong>Cited sources</strong>: verify who the "experts," "studies," or "reports" cited are, and who funds them.</li>
</ul>
<p><strong>Concrete examples:</strong></p>
<ul>
  <li>An article defending corporate tax cuts that exclusively cites economists affiliated with a think tank funded by employers' federations.</li>
  <li>A study presented as "independent" on a drug's effectiveness, whose funding actually comes from the laboratory that markets it.</li>
  <li>An article that almost word-for-word reproduces a press release from a company or ministry, without perspective or questioning: a sign that the article relays a message rather than analyzing it.</li>
</ul>`,

    methTitle6: "6. How to verify?",
    methBody6: `<p>Critical reading doesn't stop at identifying bias: it is completed by an active verification process.</p>
<ul>
  <li><strong>Primary sources</strong>: official reports, public statistical data, session minutes, court rulings — all documents accessible directly, without going through an intermediary.</li>
  <li><strong>Cross-referencing sources</strong>: comparing how the same topic is covered by several media outlets with different editorial lines helps identify each one's angles and omissions.</li>
  <li><strong>Verification tools</strong>: fact-checking services, reverse image search, web archives.</li>
  <li><strong>Scientific and medical articles</strong>: always check the study's funding source, declared conflicts of interest, and whether the article is peer-reviewed or a preprint.</li>
</ul>
<p><strong>Concrete examples:</strong></p>
<ul>
  <li>For an economic or demographic figure, consult data directly from INSEE, the Banque de France, or Eurostat rather than relying on the figure cited in the article.</li>
  <li>Read coverage of the same event by two or three outlets known for having different editorial lines, to compare the angles taken.</li>
  <li>Use fact-checking services like AFP Factuel, CheckNews (Libération), or Les Décodeurs (Le Monde), as well as reverse image search (Google Images, TinEye) to verify the origin of a photo or video.</li>
</ul>`,

    footerCode: "Source code",
    footerPrompt: "Analysis prompt (public)",
    footerIssue: "Report an issue",
    footerKofi: "Support the project ☕",
    footerLicense: "MIT License · No tracking, no cookies"
  }
};

let currentLang = 'fr';

function t(key) {
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.fr[key] || key;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('bayle_lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang]?.[key]) el.textContent = TRANSLATIONS[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (TRANSLATIONS[lang]?.[key]) el.innerHTML = TRANSLATIONS[lang][key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn-active', btn.dataset.lang === lang);
  });
}

function initLanguage() {
  const saved = localStorage.getItem('bayle_lang');
  if (saved && TRANSLATIONS[saved]) {
    currentLang = saved;
  } else {
    const browserLang = (navigator.language || '').substring(0, 2);
    currentLang = (browserLang === 'en') ? 'en' : 'fr';
  }
  applyLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}

document.addEventListener('DOMContentLoaded', initLanguage);
