export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "the-art-of-literary-translation",
    title: "The Art of Literary Translation",
    date: "2025-01-15",
    category: "Translation",
    excerpt:
      "Literary translation is more than converting words between languages — it's about capturing the soul of a text and breathing new life into it for a different audience.",
    body: `Literary translation occupies a unique space between art and craft. Unlike technical or commercial translation, it demands not only linguistic fluency but also a deep sensitivity to tone, rhythm, and cultural nuance.

When translating poetry or prose, the translator must make countless decisions: Should a metaphor be preserved literally, or adapted to resonate with the target culture? How do you maintain the musicality of a sentence when the syntax of the two languages differs fundamentally?

These questions have no single correct answer. Each translation is an interpretation — a new creative work that stands alongside the original. The best literary translators are themselves skilled writers, capable of producing texts that feel natural and alive in the target language while remaining faithful to the spirit of the source.

In my own practice, I've found that the most rewarding translations are those where I can inhabit the author's voice, understanding not just what they said but why they said it that way. This empathetic approach transforms translation from a mechanical exercise into a deeply creative endeavor.`,
  },
  {
    slug: "critical-theory-in-modern-education",
    title: "Critical Theory in Modern Education",
    date: "2024-11-08",
    category: "Education",
    excerpt:
      "How can critical theory inform contemporary teaching practices? Exploring the intersection of philosophy and pedagogy in today's classrooms.",
    body: `Critical theory, rooted in the Frankfurt School tradition, offers powerful tools for examining the structures of power and knowledge that shape educational institutions. In modern classrooms, these ideas remain remarkably relevant.

At its core, critical pedagogy encourages students to question assumptions, analyze power dynamics, and develop their own voices. Rather than passively receiving information, learners become active participants in constructing knowledge.

Paulo Freire's concept of "conscientização" — critical consciousness — remains foundational. He argued that education should never be a one-way transmission from teacher to student, but rather a dialogical process where both parties learn and grow.

In practice, this means designing curricula that invite multiple perspectives, creating space for dissent and debate, and helping students connect academic concepts to their lived experiences. It also means acknowledging that education is never politically neutral — every pedagogical choice reflects certain values and priorities.

The challenge for educators today is to apply these principles in an era of standardized testing and measurable outcomes, finding ways to foster critical thinking within institutional constraints.`,
  },
  {
    slug: "bridging-cultures-through-language",
    title: "Bridging Cultures Through Language",
    date: "2024-09-22",
    category: "Culture",
    excerpt:
      "Language is the bridge between worlds. Reflecting on how multilingual engagement fosters deeper cultural understanding and empathy.",
    body: `Every language carries within it a unique way of seeing the world. The Sapir-Whorf hypothesis, while debated in its strong form, points to a fundamental truth: the language we speak shapes our perception of reality.

When we learn a new language, we don't simply acquire a new set of labels for familiar concepts. We gain access to entirely different frameworks for understanding time, relationships, emotions, and identity. Persian poetry, for instance, contains concepts of love and longing that have no direct equivalent in English — not because English speakers don't experience these feelings, but because the cultural and linguistic traditions have carved different paths through human experience.

This is why translation, teaching, and cross-cultural dialogue are so vital. They create bridges between these different worlds, allowing ideas and perspectives to flow in both directions.

In my experience working between Persian and English, I've seen how linguistic exchange enriches both cultures. English readers gain access to a literary tradition spanning millennia, while Persian speakers engage with contemporary global discourse in new ways. The result is not homogenization but a richer, more nuanced understanding of what it means to be human.`,
  },
];

export default blogPosts;
