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
    slug: "pocket-money-without-arguments",
    title: "Pocket Money Without Daily Arguments",
    description: "A simple family rhythm for pocket money, requests and calmer financial conversations at home.",
    category: "Pocket money",
    readingTime: "6 min read",
    publishedAt,
    updatedAt: publishedAt,
    originalLtUrl: "https://seimosbankas.lt/metodika/pirmadienio-algoritmas",
    intro:
      "Pocket money often turns into daily arguments because every request starts from zero. A weekly rhythm changes the question from negotiation to planning.",
    sections: [
      {
        heading: "Why daily requests become tiring",
        body: [
          "A child asks for money because a need appears now. A parent answers from a different context: budget, mood, timing, and memory of previous requests. That gap creates friction.",
          "The problem is rarely the amount itself. The problem is that the family has no shared place where expectations are visible before the request happens."
        ]
      },
      {
        heading: "Create one weekly check-in",
        body: [
          "Choose one weekly time for money decisions. Ten minutes is enough. Look at pocket money, saving rules, planned spending and any pending requests.",
          "When children know that money has a regular place in the family week, they do not need to test the boundary every day."
        ]
      },
      {
        heading: "Keep the rules small",
        body: [
          "Start with three rules: how much pocket money arrives, what needs approval, and what part should stay untouched for later.",
          "Avoid turning the system into a lecture. The aim is not to control every choice. The aim is to make choices visible enough for conversation."
        ]
      },
      {
        heading: "Use the same screen",
        body: [
          "A shared family money dashboard helps because parent and child can point to the same facts. Balance, request and rule are all visible.",
          "That shared view lowers the emotional temperature. The parent is not making up an answer. The child is not guessing the rule."
        ]
      }
    ]
  },
  {
    slug: "teaching-children-to-save",
    title: "Teaching Children To Save Without Lectures",
    description: "How to make saving visible and practical without tracking every child wish.",
    category: "Saving",
    readingTime: "7 min read",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Children learn saving when they can see the effect of waiting. Abstract advice is weak. Visible balances and stable rules are stronger.",
    sections: [
      {
        heading: "Saving needs a visible balance",
        body: [
          "For adults, saving can be an idea. For children, saving works better when the available balance is easy to read.",
          "The product does not need to know what the child might buy. The number itself becomes meaningful when it changes after spending, waiting or requesting."
        ]
      },
      {
        heading: "Separate saving from punishment",
        body: [
          "Saving should not feel like losing money. If every saved euro feels like something taken away, the child learns resistance, not patience.",
          "Frame saving as choosing future freedom. The family bank can show the balance and the rule so the child sees both sides."
        ]
      },
      {
        heading: "Reward consistency, not perfection",
        body: [
          "A small saving habit repeated weekly matters more than one perfect decision. Children need the experience of returning to the same rule after normal spending.",
          "If you use a bonus or interest rule, keep it simple. The child should understand why the balance grows."
        ]
      },
      {
        heading: "Talk after the choice",
        body: [
          "The best teaching moment often comes after a child spends. Did the purchase feel worth it? What changed about the balance?",
          "Those reflections build judgement. The family system should support the conversation, not replace it."
        ]
      }
    ]
  },
  {
    slug: "family-money-agreements",
    title: "Family Money Agreements That Children Understand",
    description: "A practical guide to turning pocket money rules into a clear parent-child agreement.",
    category: "Agreements",
    readingTime: "8 min read",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "A family money agreement is not a legal document. It is a shared promise about how money decisions happen at home.",
    sections: [
      {
        heading: "Write rules in child language",
        body: [
          "If a child cannot repeat the rule, the rule is too complicated. Use everyday language: what arrives, when it arrives, what needs approval, and what happens after a request.",
          "Short rules are easier to remember and easier to keep. They also make it less likely that the parent will change the rule in the heat of the moment."
        ]
      },
      {
        heading: "Include both rights and responsibilities",
        body: [
          "A good agreement gives the child real room to decide. It also names the responsibility that comes with that room.",
          "For example: the child can choose small spending from available money, but larger withdrawals require a request and a reason."
        ]
      },
      {
        heading: "Review instead of rewriting constantly",
        body: [
          "Rules should be stable enough to create trust. If everything changes every week, the system becomes another negotiation.",
          "Set a review rhythm. Once a month is often enough. The child can suggest changes, but the family avoids daily rule changes."
        ]
      },
      {
        heading: "Let the agreement live in the product",
        body: [
          "When the agreement is visible next to balances and requests, it becomes part of normal use.",
          "That is much stronger than a forgotten conversation. The rule appears at the moment it matters."
        ]
      }
    ]
  },
  {
    slug: "financial-literacy-for-kids-at-home",
    title: "Financial Literacy For Kids Starts At Home",
    description: "Why everyday family money decisions teach more than abstract financial education.",
    category: "Financial literacy",
    readingTime: "7 min read",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Financial literacy is not only knowledge about banks, cards or interest. For children, it starts with repeated experiences at home.",
    sections: [
      {
        heading: "Children copy money behaviour",
        body: [
          "Children notice how adults speak about bills, shopping, debt, saving and stress. They build a money model long before they understand financial terms.",
          "This is why a calm family money routine matters. It gives the child a different pattern to copy."
        ]
      },
      {
        heading: "Use real decisions, small amounts",
        body: [
          "Small amounts are enough for learning. A child does not need access to real financial risk to understand trade-offs.",
          "Pocket money, saving rules and requests create a safe practice field where mistakes stay small."
        ]
      },
      {
        heading: "Teach cause and effect",
        body: [
          "If I spend this now, I have less later. If I wait, my balance stays stronger. If I request money, I need to explain why.",
          "Those simple cause-and-effect loops are the foundation of financial judgement."
        ]
      },
      {
        heading: "Make money easier to talk about",
        body: [
          "Many families avoid money conversations because they feel tense. A shared system makes the topic more ordinary.",
          "When money becomes easier to talk about, children can ask better questions and parents can answer before problems grow."
        ]
      }
    ]
  },
  {
    slug: "child-saving-habits",
    title: "How To Build Child Saving Habits That Actually Last",
    description: "A practical framework for teaching children to leave money for later without tracking every wish.",
    category: "Saving",
    readingTime: "6 min read",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Saving works best when it becomes a repeatable habit, not a catalogue of things a child might want next month.",
    sections: [
      {
        heading: "Do not track every wish",
        body: [
          "Children change their minds quickly. Prices change too. A family money system does not need to know every toy, trip or gadget a child is thinking about.",
          "It is enough to make the available balance visible and keep a simple rule for what stays for later."
        ]
      },
      {
        heading: "Make later visible",
        body: [
          "For a child, saving is hard because later feels abstract. A visible balance helps them see that not spending is still an active choice.",
          "The product can support this without asking the family to maintain a list of future purchases."
        ]
      },
      {
        heading: "Use simple saving rules",
        body: [
          "A family might agree that part of pocket money stays untouched until the weekly check-in, or that larger withdrawals need parent approval.",
          "The exact rule matters less than the rhythm. Children learn when the rule is stable and easy to remember."
        ]
      },
      {
        heading: "Talk about trade-offs",
        body: [
          "When a child wants to spend, the useful question is not always what they are saving for. It is what changes after this choice.",
          "That keeps the conversation practical without turning the family bank into a wishlist tracker."
        ]
      }
    ]
  },
  {
    slug: "allowance-vs-pocket-money",
    title: "Allowance Or Pocket Money: What Should Parents Use?",
    description: "A clear comparison of allowance and pocket money for families teaching children money habits.",
    category: "Pocket money",
    readingTime: "6 min read",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Allowance and pocket money are often used as the same idea. The useful question is not the name, but the rule behind it.",
    sections: [
      {
        heading: "Fixed money teaches planning",
        body: [
          "A regular amount helps children plan. They know what arrives and when. That predictability creates responsibility.",
          "If money appears only after asking, children learn persuasion more than planning."
        ]
      },
      {
        heading: "Task-based money teaches exchange",
        body: [
          "Paying for extra tasks can be useful, but it should be separate from basic family contribution.",
          "If every helpful action becomes a paid transaction, the family can lose the sense of shared responsibility."
        ]
      },
      {
        heading: "Use both carefully",
        body: [
          "A simple model is regular pocket money for planning, plus occasional extra earning opportunities for special effort.",
          "The key is clarity. Children should know which money is predictable and which money is earned."
        ]
      },
      {
        heading: "Put the rule where everyone can see it",
        body: [
          "A visible rule prevents repeated arguments. The parent does not need to remember every exception.",
          "The child can learn from the structure instead of negotiating around it."
        ]
      }
    ]
  },
  {
    slug: "parental-control-vs-financial-independence",
    title: "Parental Control Vs Financial Independence",
    description: "How parents can guide children's money choices without controlling every decision.",
    category: "Parenting",
    readingTime: "8 min read",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Children need boundaries and freedom at the same time. Money is one of the best places to build that balance.",
    sections: [
      {
        heading: "Control feels safe but teaches less",
        body: [
          "When parents approve every small decision, mistakes are prevented. But learning is also delayed.",
          "A child who never manages small choices may meet bigger choices later without practice."
        ]
      },
      {
        heading: "Freedom needs visible boundaries",
        body: [
          "Independence does not mean unlimited access. It means the child can make real decisions inside a clear frame.",
          "The frame can include spending limits, approval thresholds and simple saving rules."
        ]
      },
      {
        heading: "Use approvals for conversation",
        body: [
          "A request is not only a yes-or-no moment. It is a chance to ask: what is this for, what changes after this, and is there another option?",
          "That conversation is where financial judgement grows."
        ]
      },
      {
        heading: "Increase freedom gradually",
        body: [
          "As the child shows reliability, widen the frame. More responsibility should come with more visibility, not less.",
          "This turns independence into a path, not a sudden handover."
        ]
      }
    ]
  },
  {
    slug: "safe-money-app-for-children",
    title: "What Makes A Money App Safe For Children?",
    description: "A parent-focused checklist for safe educational money tools and family finance apps.",
    category: "Safety",
    readingTime: "7 min read",
    publishedAt,
    updatedAt: publishedAt,
    intro:
          "A money app for children should teach financial habits without exposing children to unnecessary risk, advertising or pressure.",
    sections: [
      {
        heading: "Educational purpose comes first",
        body: [
          "A safe family money tool should make the family conversation easier. It should not push children toward spending, subscriptions or financial products.",
          "The product should be clear about what it is: an educational system, not a real bank account."
        ]
      },
      {
        heading: "Parents stay in the loop",
        body: [
          "Children can have their own view, but parents need visibility into rules, requests and balances.",
          "Safety comes from shared context, not from hiding the child's choices until something goes wrong."
        ]
      },
      {
        heading: "No unnecessary data collection",
        body: [
          "Ask what data the product truly needs. A practice money system does not need the same data as a real financial institution.",
          "The less sensitive data collected, the lower the risk for the family."
        ]
      },
      {
        heading: "A sandbox matters",
        body: [
          "A sandbox lets parents explore the flow without committing family data.",
          "That is especially useful for trust. Parents can understand the product before inviting children into it."
        ]
      }
    ]
  },
  {
    slug: "family-finance-dashboard",
    title: "Why A Family Finance Dashboard Helps Children Learn",
    description: "How a shared parent-child dashboard turns money into a visible learning system.",
    category: "Product",
    readingTime: "6 min read",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "A family finance dashboard is not about complexity. It is about putting the important facts in one calm place.",
    sections: [
      {
        heading: "Visibility reduces emotion",
        body: [
          "Arguments grow when people remember different facts. A dashboard gives the family one shared source of truth.",
          "Balance, request and rule can be seen together."
        ]
      },
      {
        heading: "Children learn from feedback",
        body: [
          "When a child sees the result of a choice immediately, learning becomes concrete.",
          "Spending changes the balance. Saving keeps options open. A request creates a conversation."
        ]
      },
      {
        heading: "Parents can guide without hovering",
        body: [
          "A dashboard lets parents see what matters without asking constant questions.",
          "That creates more trust. The child has space, and the parent still has context."
        ]
      },
      {
        heading: "Keep it simple",
        body: [
          "A family dashboard should not look like corporate finance software.",
          "The best version is simple enough for a child and useful enough for a parent."
        ]
      }
    ]
  },
  {
    slug: "kids-and-interest",
    title: "How To Explain Interest To Children",
    description: "A simple way to teach children interest, saving bonuses and time-based money growth.",
    category: "Financial literacy",
    readingTime: "7 min read",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Interest is easier for children to understand when it is shown as a reward for waiting and planning.",
    sections: [
      {
        heading: "Start with the idea of time",
        body: [
          "Children understand waiting before they understand finance. Use that. Money kept for longer can grow because the child chose not to spend it immediately.",
          "This turns interest into a story about patience, not a formula."
        ]
      },
      {
        heading: "Use small visible bonuses",
        body: [
          "A small saving bonus can make the idea concrete. The child sees that a balance can grow through behaviour, not only through new pocket money.",
          "Keep the number simple and explain it repeatedly in the same words."
        ]
      },
      {
        heading: "Avoid unrealistic promises",
        body: [
          "Educational interest is a teaching tool. It should not create false expectations about real-world returns.",
          "Parents should explain the difference between a family learning rule and a real financial product."
        ]
      },
      {
        heading: "Connect interest to patience",
        body: [
          "Interest makes more sense when it is connected to waiting and keeping money for later.",
          "Show the child how patience changes the balance, without needing to track what they might buy."
        ]
      }
    ]
  },
  {
    slug: "money-conversations-with-children",
    title: "How To Talk To Children About Money Calmly",
    description: "Practical language parents can use to make money conversations less tense and more useful.",
    category: "Parenting",
    readingTime: "8 min read",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "Money conversations become easier when parents use clear language, repeatable rules and fewer emotional surprises.",
    sections: [
      {
        heading: "Name the decision",
        body: [
          "Instead of starting with yes or no, name what is being decided: spending, saving, borrowing, waiting or requesting.",
          "That helps the child understand that money is not one big emotional topic. It is a set of choices."
        ]
      },
      {
        heading: "Use questions that build judgement",
        body: [
          "Helpful questions include: what is this for, what will be left, what changes if you wait, and how will you feel tomorrow?",
          "These questions slow the moment down without shaming the child."
        ]
      },
      {
        heading: "Do not make money equal love",
        body: [
          "Children can interpret money decisions emotionally. A refusal may feel like rejection.",
          "Stable rules help separate the money answer from the relationship. The parent can stay warm while the boundary stays clear."
        ]
      },
      {
        heading: "Return to the plan",
        body: [
          "The most useful phrase is often: let's look at the plan.",
          "A shared plan gives both parent and child somewhere neutral to stand."
        ]
      }
    ]
  },
  {
    slug: "weekly-family-money-routine",
    title: "The Weekly Family Money Routine",
    description: "A 10-minute routine for pocket money, savings, requests and better money habits.",
    category: "Routine",
    readingTime: "6 min read",
    publishedAt,
    updatedAt: publishedAt,
    intro:
      "A weekly family money routine works because it is short, predictable and focused on decisions that actually matter.",
    sections: [
      {
        heading: "Start with balances",
        body: [
          "Look at each child's balance and pending requests. Keep this factual. No long speech is needed.",
          "The child should learn to read their own balance and understand the family rules."
        ]
      },
      {
        heading: "Review requests",
        body: [
          "Pending requests are discussed calmly because the meeting already has a place for them.",
          "Ask for the reason, check the balance and decide together where possible."
        ]
      },
      {
        heading: "Set one intention",
        body: [
          "Each child can choose one money intention for the week: save more, avoid impulse spending, or plan for a specific event.",
          "One intention is enough. Too many targets make the routine heavy."
        ]
      },
      {
        heading: "End quickly",
        body: [
          "The routine should feel light enough to repeat. If it becomes a lecture, the child will avoid it.",
          "Consistency is more valuable than intensity."
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
