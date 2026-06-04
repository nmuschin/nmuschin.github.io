/* =========================================================================
   FIELD NOTES — BLOG POSTS
   -------------------------------------------------------------------------
   This is the ONLY file you edit to manage your blog.

   To add a post: copy one block below, paste it at the TOP of the list,
   and edit the fields. Newest posts go first.

   Fields:
     slug    -> the URL piece (lowercase, hyphens, no spaces). Must be unique.
                The post lives at  nathanmuschinske.com/#/post/your-slug
     title   -> shown on the card and at the top of the post
     date    -> any readable date string, e.g. "March 4, 2026"
     summary -> 1-2 sentences shown on the card
     content -> the post body, written in Markdown (see the cheatsheet at
                the bottom of this file)

   Markdown tips:
     # Heading        ## Subheading        ### Smaller heading
     **bold**   *italic*   `inline code`
     - bullet item
     1. numbered item
     > blockquote
     [link text](https://example.com)
     ```
     code block
     ```
     ---  (horizontal divider)

   IMPORTANT: write the content between backticks (` `). If you need a literal
   backtick inside a post, that's the one character to avoid or escape.
   ========================================================================= */

window.POSTS = [

  {
    slug: "welcome",
    title: "Why I'm Writing in Public",
    date: "March 1, 2026",
    summary: "A short note on starting Field Notes — a place to think out loud about health, data, and the classroom.",
    content: `
Most of my work happens in places that don't leave much of a paper trail: a lesson that finally clicks for a struggling student, a CRM workflow that quietly saves a team two hours a week, a dataset that changes a decision. **Field Notes** is my attempt to write some of that down.

I trained as a physician and public health practitioner, and these days I teach math and science. The thread connecting all of it is the same: *take a complicated system, find the leverage point, and make it work better for the people inside it.*

## What to expect here

- Short, practical pieces on **automation and tooling** — the kind of thing I wish someone had handed me.
- Notes on **teaching with AI**, written from inside a real classroom rather than a keynote stage.
- The occasional dive into **data and public health**, because old habits die hard.

I'm not aiming for polish. I'm aiming for useful. If something here saves you an afternoon, that's the whole point.

> Write things down. Future-you is a stranger who will thank you.

More soon.
`
  },

  {
    slug: "teaching-with-ai",
    title: "Teaching With AI Without Losing the Plot",
    date: "March 18, 2026",
    summary: "AI tools can multiply a teacher's reach — but only if the learning, not the tool, stays at the center.",
    content: `
I use AI tools every week — MagicSchool, Diffit, ChatGPT, Gemini — to design lessons, build assessments, and differentiate for very different learners in the same room. The tools are genuinely useful. They're also easy to misuse, and the failure mode is subtle.

## The trap

The trap is letting the tool set the goal. It's fast and fluent, so it's tempting to generate a worksheet and call it a lesson. But a worksheet isn't a learning objective, and fluency isn't understanding.

## What actually works for me

1. **Start with the objective, not the prompt.** I decide what a student should be able to *do* by the end. Only then do I open a tool.
2. **Use AI for the boring 80%.** First drafts, reading-level variants, distractor options for multiple choice — the volume work where speed compounds.
3. **Keep the judgment human.** Every generated item gets read, cut, or rewritten. The model proposes; I dispose.
4. **Check it against the data.** If an AI-built assessment doesn't move the formative numbers, it didn't work, however nice it looked.

The honest summary: AI lets one teacher do the prep of two or three. That's a real multiplier — *as long as the teacher is still the one deciding what good looks like.*

---

I'll write a follow-up with a couple of concrete lesson-design workflows. If there's a specific subject you'd want to see worked through, [email me](mailto:nathan.muschinske@gmail.com).
`
  }

];

/* =========================================================================
   MARKDOWN CHEATSHEET (reference only — delete if you like)
   -------------------------------------------------------------------------
   Headings:     ## My Section
   Bold:         **important**
   Italic:       *subtle*
   Inline code:  `value`
   Link:         [Google](https://google.com)
   Bullet list:  - item   (one per line)
   Number list:  1. item  (one per line)
   Quote:        > a quoted line
   Divider:      ---
   Code block:   wrap lines in triple backticks
   ========================================================================= */
