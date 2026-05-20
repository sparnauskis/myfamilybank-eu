export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  originalLtUrl?: string;
  intro: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};

const publishedAt = "2026-05-20";

export const articles: Article[] = [
  {
    slug: "argent-de-poche-sans-disputes",
    title: "L'argent de poche sans disputes quotidiennes",
    description: "Un rythme familial simple pour l'argent de poche, les demandes et des conversations plus calmes.",
    category: "Argent de poche",
    readingTime: "6 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    originalLtUrl: "https://seimosbankas.lt/metodika/pirmadienio-algoritmas",
    intro:
      "L'argent de poche devient souvent une dispute quotidienne parce que chaque demande repart de zero. Un rythme hebdomadaire transforme la negotiation en plan.",
    sections: [
      {
        heading: "Pourquoi les demandes quotidiennes fatiguent",
        body: [
          "Un enfant demande de l'argent parce qu'un besoin apparait maintenant. Le parent repond depuis un autre contexte : budget, humeur, timing et souvenir des demandes precedentes.",
          "Le probleme est rarement le montant lui-meme. Le probleme vient du fait que la famille n'a pas de lieu commun ou les attentes sont visibles avant la demande."
        ]
      },
      {
        heading: "Creez un rendez-vous hebdomadaire",
        body: [
          "Choisissez un moment fixe chaque semaine pour les decisions d'argent. Dix minutes suffisent pour regarder l'argent de poche, les regles d'epargne, les depenses prevues et les demandes en attente.",
          "Quand les enfants savent que l'argent a une place reguliere dans la semaine familiale, ils ont moins besoin de tester la limite tous les jours."
        ]
      },
      {
        heading: "Gardez de petites regles",
        body: [
          "Commencez par trois regles : combien arrive, ce qui demande une validation, et quelle part reste de cote pour plus tard.",
          "Le but n'est pas de controler chaque choix. Le but est de rendre les choix assez visibles pour pouvoir en parler calmement."
        ]
      },
      {
        heading: "Utilisez le meme ecran",
        body: [
          "Un tableau familial aide parce que parent et enfant peuvent regarder les memes faits : solde, demande et regle.",
          "Cette vue partagee baisse la temperature emotionnelle. Le parent n'invente pas une reponse, et l'enfant ne devine pas la regle."
        ]
      }
    ]
  },
  {
    slug: "apprendre-aux-enfants-a-epargner",
    title: "Apprendre aux enfants a epargner sans faire la morale",
    description: "Comment rendre l'epargne visible et pratique sans suivre chaque envie de l'enfant.",
    category: "Epargne",
    readingTime: "7 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Les enfants apprennent a epargner lorsqu'ils voient l'effet de l'attente. Les conseils abstraits sont faibles ; les soldes visibles et les regles stables sont plus forts.",
    sections: [
      {
        heading: "L'epargne a besoin d'un solde visible",
        body: [
          "Pour un adulte, epargner peut rester une idee. Pour un enfant, cela fonctionne mieux quand le solde disponible est facile a lire.",
          "Le produit n'a pas besoin de connaitre tout ce que l'enfant veut acheter. Le nombre devient parlant lorsqu'il change apres une depense, une attente ou une demande."
        ]
      },
      {
        heading: "Separez epargne et punition",
        body: [
          "Epargner ne doit pas ressembler a perdre de l'argent. Si chaque euro garde de cote semble confisque, l'enfant apprend la resistance, pas la patience.",
          "Presentez l'epargne comme un choix de liberte future. La banque familiale peut montrer le solde et la regle pour rendre les deux cotes visibles."
        ]
      },
      {
        heading: "Recompensez la regularite",
        body: [
          "Une petite habitude repetee chaque semaine compte plus qu'une decision parfaite. Les enfants ont besoin de revenir a la meme regle apres des depenses normales.",
          "Si vous utilisez un bonus ou une regle d'interet, gardez-la simple. L'enfant doit comprendre pourquoi le solde augmente."
        ]
      },
      {
        heading: "Parlez apres le choix",
        body: [
          "Le meilleur moment d'apprentissage arrive souvent apres une depense. L'achat valait-il le coup ? Qu'est-ce qui a change dans le solde ?",
          "Ces reflexions construisent le jugement. Le systeme familial doit soutenir la conversation, pas la remplacer."
        ]
      }
    ]
  },
  {
    slug: "accords-dargent-en-famille",
    title: "Des accords d'argent que les enfants comprennent",
    description: "Un guide pratique pour transformer les regles d'argent de poche en accord parent-enfant clair.",
    category: "Accords",
    readingTime: "8 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Un accord d'argent familial n'est pas un document juridique. C'est une promesse partagee sur la facon dont les decisions d'argent se prennent a la maison.",
    sections: [
      {
        heading: "Ecrivez les regles dans la langue de l'enfant",
        body: [
          "Si un enfant ne peut pas repeter la regle, elle est trop compliquee. Utilisez des mots du quotidien : ce qui arrive, quand cela arrive, ce qui demande une validation et ce qui se passe apres une demande.",
          "Les regles courtes sont plus faciles a retenir et a respecter. Elles reduisent aussi le risque que le parent change la regle sous le coup de l'emotion."
        ]
      },
      {
        heading: "Incluez droits et responsabilites",
        body: [
          "Un bon accord donne a l'enfant un vrai espace de decision. Il nomme aussi la responsabilite qui vient avec cet espace.",
          "Par exemple : l'enfant peut choisir de petites depenses avec l'argent disponible, mais les retraits plus importants demandent une raison et une validation."
        ]
      },
      {
        heading: "Revisez sans tout reecrire",
        body: [
          "Les regles doivent etre assez stables pour creer la confiance. Si tout change chaque semaine, le systeme devient une nouvelle negotiation.",
          "Fixez un rythme de revue. Une fois par mois suffit souvent. L'enfant peut proposer des changements, mais la famille evite les modifications quotidiennes."
        ]
      },
      {
        heading: "Laissez l'accord vivre dans le produit",
        body: [
          "Quand l'accord est visible a cote des soldes et des demandes, il devient une partie normale de l'utilisation.",
          "C'est beaucoup plus fort qu'une conversation oubliee. La regle apparait au moment ou elle compte."
        ]
      }
    ]
  },
  {
    slug: "education-financiere-enfants-maison",
    title: "L'education financiere des enfants commence a la maison",
    description: "Pourquoi les decisions d'argent du quotidien enseignent plus que les cours abstraits.",
    category: "Education financiere",
    readingTime: "7 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "L'education financiere n'est pas seulement une connaissance des banques, cartes ou interets. Pour les enfants, elle commence par des experiences repetees a la maison.",
    sections: [
      {
        heading: "Les enfants copient les comportements d'argent",
        body: [
          "Les enfants observent comment les adultes parlent des factures, des courses, des dettes, de l'epargne et du stress. Ils construisent un modele bien avant de comprendre les termes financiers.",
          "C'est pourquoi une routine familiale calme compte. Elle donne a l'enfant un autre modele a copier."
        ]
      },
      {
        heading: "Utilisez de vraies decisions, avec de petits montants",
        body: [
          "De petits montants suffisent pour apprendre. Un enfant n'a pas besoin d'un vrai risque financier pour comprendre les arbitrages.",
          "L'argent de poche, les regles d'epargne et les demandes creent un terrain d'entrainement ou les erreurs restent petites."
        ]
      },
      {
        heading: "Enseignez la cause et l'effet",
        body: [
          "Si je depense maintenant, j'ai moins plus tard. Si j'attends, mon solde reste plus fort. Si je demande de l'argent, j'explique pourquoi.",
          "Ces boucles simples de cause a effet sont la base du jugement financier."
        ]
      },
      {
        heading: "Rendez l'argent plus facile a aborder",
        body: [
          "Beaucoup de familles evitent les conversations d'argent parce qu'elles semblent tendues. Un systeme partage rend le sujet plus ordinaire.",
          "Quand il devient plus facile de parler d'argent, les enfants posent de meilleures questions et les parents repondent avant que les problemes grossissent."
        ]
      }
    ]
  },
  {
    slug: "habitudes-epargne-enfant",
    title: "Construire des habitudes d'epargne qui durent vraiment",
    description: "Un cadre pratique pour apprendre aux enfants a garder de l'argent pour plus tard.",
    category: "Epargne",
    readingTime: "6 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "L'epargne fonctionne mieux lorsqu'elle devient une habitude repetable, pas un catalogue de choses que l'enfant pourrait vouloir le mois prochain.",
    sections: [
      {
        heading: "Ne suivez pas chaque envie",
        body: [
          "Les enfants changent vite d'avis. Les prix changent aussi. Un systeme familial n'a pas besoin de connaitre chaque jouet, sortie ou gadget auquel l'enfant pense.",
          "Il suffit de rendre le solde disponible visible et de garder une regle simple pour ce qui reste de cote."
        ]
      },
      {
        heading: "Rendez le plus tard visible",
        body: [
          "Pour un enfant, epargner est difficile parce que plus tard reste abstrait. Un solde visible aide a voir que ne pas depenser est aussi un choix actif.",
          "Le produit peut soutenir cela sans demander a la famille de maintenir une liste d'achats futurs."
        ]
      },
      {
        heading: "Utilisez des regles simples",
        body: [
          "Une famille peut decider qu'une part de l'argent de poche reste intacte jusqu'au rendez-vous hebdomadaire, ou que les retraits plus grands demandent une validation parentale.",
          "La regle exacte compte moins que le rythme. Les enfants apprennent lorsque la regle est stable et facile a retenir."
        ]
      },
      {
        heading: "Parlez des arbitrages",
        body: [
          "Quand l'enfant veut depenser, la question utile n'est pas toujours ce qu'il veut acheter plus tard. C'est ce qui change apres ce choix.",
          "Cela garde la conversation pratique sans transformer la banque familiale en liste de souhaits."
        ]
      }
    ]
  },
  {
    slug: "allocation-ou-argent-de-poche",
    title: "Allocation ou argent de poche : que choisir ?",
    description: "Une comparaison claire pour les familles qui enseignent les habitudes d'argent aux enfants.",
    category: "Argent de poche",
    readingTime: "6 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Allocation et argent de poche designent souvent la meme idee. La question utile n'est pas le nom, mais la regle derriere.",
    sections: [
      {
        heading: "Un montant fixe enseigne la planification",
        body: [
          "Un montant regulier aide les enfants a planifier. Ils savent ce qui arrive et quand. Cette previsibilite cree de la responsabilite.",
          "Si l'argent apparait seulement apres une demande, les enfants apprennent davantage la persuasion que la planification."
        ]
      },
      {
        heading: "L'argent lie aux taches enseigne l'echange",
        body: [
          "Payer certaines taches supplementaires peut etre utile, mais cela devrait rester separe de la contribution familiale de base.",
          "Si chaque geste utile devient une transaction payee, la famille peut perdre le sens de la responsabilite partagee."
        ]
      },
      {
        heading: "Utilisez les deux avec prudence",
        body: [
          "Un modele simple : argent de poche regulier pour planifier, plus occasions ponctuelles de gagner davantage pour un effort particulier.",
          "La cle est la clarte. Les enfants doivent savoir quel argent est previsible et quel argent est gagne."
        ]
      },
      {
        heading: "Placez la regle la ou chacun la voit",
        body: [
          "Une regle visible evite les disputes repetees. Le parent n'a pas besoin de se souvenir de chaque exception.",
          "L'enfant peut apprendre de la structure au lieu de negocier autour d'elle."
        ]
      }
    ]
  },
  {
    slug: "controle-parental-et-autonomie-financiere",
    title: "Controle parental et autonomie financiere",
    description: "Comment guider les choix d'argent des enfants sans controler chaque decision.",
    category: "Parentalite",
    readingTime: "8 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Les enfants ont besoin de limites et de liberte en meme temps. L'argent est l'un des meilleurs terrains pour construire cet equilibre.",
    sections: [
      {
        heading: "Le controle rassure mais enseigne moins",
        body: [
          "Quand les parents valident chaque petite decision, les erreurs sont evitees. Mais l'apprentissage est aussi repousse.",
          "Un enfant qui ne gere jamais de petits choix peut rencontrer de plus grands choix plus tard sans entrainement."
        ]
      },
      {
        heading: "La liberte a besoin de limites visibles",
        body: [
          "L'autonomie ne signifie pas acces illimite. Elle signifie que l'enfant peut prendre de vraies decisions dans un cadre clair.",
          "Ce cadre peut inclure des limites de depense, des seuils de validation et des regles d'epargne simples."
        ]
      },
      {
        heading: "Utilisez les validations pour parler",
        body: [
          "Une demande n'est pas seulement un oui ou un non. C'est l'occasion de demander : a quoi cela sert, qu'est-ce qui change apres, et existe-t-il une autre option ?",
          "C'est dans cette conversation que le jugement financier grandit."
        ]
      },
      {
        heading: "Augmentez la liberte progressivement",
        body: [
          "Quand l'enfant montre de la fiabilite, elargissez le cadre. Plus de responsabilite doit venir avec plus de visibilite, pas moins.",
          "L'autonomie devient alors un chemin, pas un passage brutal."
        ]
      }
    ]
  },
  {
    slug: "application-argent-sure-enfants",
    title: "Qu'est-ce qui rend une application d'argent sure pour les enfants ?",
    description: "Une checklist parentale pour evaluer les outils educatifs d'argent et les apps familiales.",
    category: "Securite",
    readingTime: "7 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Une application d'argent pour enfants doit enseigner les habitudes financieres sans exposer les enfants a des risques, publicites ou pressions inutiles.",
    sections: [
      {
        heading: "La finalite educative passe d'abord",
        body: [
          "Un outil familial sur l'argent doit rendre la conversation plus simple. Il ne doit pas pousser les enfants vers la depense, les abonnements ou les produits financiers.",
          "Le produit doit etre clair sur ce qu'il est : un systeme educatif, pas un vrai compte bancaire."
        ]
      },
      {
        heading: "Les parents restent dans la boucle",
        body: [
          "Les enfants peuvent avoir leur propre vue, mais les parents ont besoin de voir les regles, demandes et soldes.",
          "La securite vient du contexte partage, pas du fait de cacher les choix de l'enfant jusqu'a ce qu'un probleme arrive."
        ]
      },
      {
        heading: "Pas de collecte de donnees inutile",
        body: [
          "Demandez quelles donnees le produit a vraiment besoin. Un systeme d'argent d'entrainement n'a pas besoin des memes donnees qu'une institution financiere reelle.",
          "Moins les donnees sensibles sont collectees, plus le risque familial diminue."
        ]
      },
      {
        heading: "Un sandbox compte",
        body: [
          "Un sandbox permet aux parents d'explorer le parcours sans engager de donnees familiales.",
          "C'est particulierement utile pour la confiance. Les parents comprennent le produit avant d'y inviter les enfants."
        ]
      }
    ]
  },
  {
    slug: "tableau-financier-familial",
    title: "Pourquoi un tableau financier familial aide les enfants a apprendre",
    description: "Comment un tableau parent-enfant transforme l'argent en systeme d'apprentissage visible.",
    category: "Produit",
    readingTime: "6 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Un tableau financier familial n'est pas une question de complexite. Il s'agit de placer les faits importants dans un endroit calme.",
    sections: [
      {
        heading: "La visibilite reduit l'emotion",
        body: [
          "Les disputes grandissent quand chacun se souvient de faits differents. Un tableau donne a la famille une source commune de verite.",
          "Solde, demande et regle peuvent etre vus ensemble."
        ]
      },
      {
        heading: "Les enfants apprennent par retour immediat",
        body: [
          "Quand un enfant voit tout de suite le resultat d'un choix, l'apprentissage devient concret.",
          "Depenser change le solde. Epargner garde des options ouvertes. Une demande cree une conversation."
        ]
      },
      {
        heading: "Les parents guident sans surveiller sans cesse",
        body: [
          "Un tableau permet aux parents de voir ce qui compte sans poser constamment des questions.",
          "Cela cree plus de confiance. L'enfant a de l'espace, et le parent garde le contexte."
        ]
      },
      {
        heading: "Gardez la simplicite",
        body: [
          "Un tableau familial ne doit pas ressembler a un logiciel de finance d'entreprise.",
          "La meilleure version est assez simple pour un enfant et assez utile pour un parent."
        ]
      }
    ]
  },
  {
    slug: "expliquer-les-interets-aux-enfants",
    title: "Comment expliquer les interets aux enfants",
    description: "Une facon simple d'enseigner les interets, les bonus d'epargne et la croissance dans le temps.",
    category: "Education financiere",
    readingTime: "7 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Les interets sont plus faciles a comprendre lorsqu'ils sont presentes comme une recompense de l'attente et de la planification.",
    sections: [
      {
        heading: "Commencez par l'idee du temps",
        body: [
          "Les enfants comprennent l'attente avant de comprendre la finance. Utilisez cela. L'argent garde plus longtemps peut grandir parce que l'enfant a choisi de ne pas le depenser tout de suite.",
          "Les interets deviennent alors une histoire de patience, pas une formule."
        ]
      },
      {
        heading: "Utilisez de petits bonus visibles",
        body: [
          "Un petit bonus d'epargne rend l'idee concrete. L'enfant voit qu'un solde peut grandir grace a un comportement, pas seulement grace a un nouvel argent de poche.",
          "Gardez le nombre simple et expliquez-le plusieurs fois avec les memes mots."
        ]
      },
      {
        heading: "Evitez les promesses irreelles",
        body: [
          "L'interet educatif est un outil d'apprentissage. Il ne doit pas creer de fausses attentes sur les rendements du monde reel.",
          "Les parents doivent expliquer la difference entre une regle familiale d'apprentissage et un vrai produit financier."
        ]
      },
      {
        heading: "Reliez les interets a la patience",
        body: [
          "Les interets ont plus de sens lorsqu'ils sont lies a l'attente et a l'argent garde pour plus tard.",
          "Montrez a l'enfant comment la patience change le solde, sans devoir suivre ce qu'il pourrait acheter."
        ]
      }
    ]
  },
  {
    slug: "parler-dargent-avec-les-enfants",
    title: "Comment parler d'argent calmement avec les enfants",
    description: "Des formulations pratiques pour rendre les conversations d'argent moins tendues et plus utiles.",
    category: "Parentalite",
    readingTime: "8 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Les conversations d'argent deviennent plus faciles lorsque les parents utilisent un langage clair, des regles repetables et moins de surprises emotionnelles.",
    sections: [
      {
        heading: "Nommez la decision",
        body: [
          "Au lieu de commencer par oui ou non, nommez ce qui se decide : depenser, epargner, emprunter, attendre ou demander.",
          "Cela aide l'enfant a comprendre que l'argent n'est pas un grand sujet emotionnel unique. C'est un ensemble de choix."
        ]
      },
      {
        heading: "Posez des questions qui construisent le jugement",
        body: [
          "Les questions utiles : a quoi cela sert, que restera-t-il, qu'est-ce qui change si tu attends, et comment te sentiras-tu demain ?",
          "Ces questions ralentissent le moment sans faire honte a l'enfant."
        ]
      },
      {
        heading: "Ne rendez pas l'argent egal a l'amour",
        body: [
          "Les enfants peuvent interpreter les decisions d'argent de maniere emotionnelle. Un refus peut ressembler a un rejet.",
          "Des regles stables aident a separer la reponse d'argent de la relation. Le parent peut rester chaleureux pendant que la limite reste claire."
        ]
      },
      {
        heading: "Revenez au plan",
        body: [
          "La phrase la plus utile est souvent : regardons le plan.",
          "Un plan partage donne au parent et a l'enfant un terrain neutre."
        ]
      }
    ]
  },
  {
    slug: "routine-hebdomadaire-argent-famille",
    title: "La routine hebdomadaire d'argent en famille",
    description: "Une routine de 10 minutes pour l'argent de poche, l'epargne, les demandes et de meilleures habitudes.",
    category: "Routine",
    readingTime: "6 min de lecture",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Une routine hebdomadaire d'argent fonctionne parce qu'elle est courte, previsible et concentree sur les decisions qui comptent vraiment.",
    sections: [
      {
        heading: "Commencez par les soldes",
        body: [
          "Regardez le solde de chaque enfant et les demandes en attente. Restez factuel. Un long discours n'est pas necessaire.",
          "L'enfant doit apprendre a lire son propre solde et a comprendre les regles familiales."
        ]
      },
      {
        heading: "Revoyez les demandes",
        body: [
          "Les demandes en attente se discutent calmement parce que la reunion leur donne deja une place.",
          "Demandez la raison, verifiez le solde et decidez ensemble lorsque c'est possible."
        ]
      },
      {
        heading: "Fixez une intention",
        body: [
          "Chaque enfant peut choisir une intention d'argent pour la semaine : epargner davantage, eviter les depenses impulsives ou planifier un evenement precis.",
          "Une intention suffit. Trop d'objectifs rendent la routine lourde."
        ]
      },
      {
        heading: "Terminez vite",
        body: [
          "La routine doit rester assez legere pour etre repetee. Si elle devient une lecon, l'enfant l'evitera.",
          "La regularite vaut plus que l'intensite."
        ]
      }
    ]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string) {
  const current = getArticle(currentSlug);
  return articles
    .filter((article) => article.slug !== currentSlug)
    .filter((article) => !current || article.category === current.category)
    .slice(0, 3);
}
