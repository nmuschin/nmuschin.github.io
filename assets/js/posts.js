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
    slug: "translating-the-science",
    title: "Translating the Science: Talking to Three Audiences at Once",
    date: "June 22, 2026",
    summary: "The same finding has to land for a specialist, a busy generalist, and a patient — without losing what makes it true.",
    content: `
The hardest part of scientific communication isn't understanding the science. It's saying the same true thing three different ways without lying to anyone.

A single result — say, a hazard ratio from a trial — has to reach a specialist who wants the methods, a busy clinician who wants the bottom line, and sometimes a patient who wants to know what it means for *them*. The temptation is to pick one register and let the others fend for themselves. That's how you end up either talking over people or talking down to them.

## What I actually adjust

- **The unit of meaning.** For a specialist, the unit is the effect size and its confidence interval. For a generalist, it's "what changes on Monday." For a patient, it's "more good days, fewer bad ones."
- **The amount of uncertainty I lead with.** Experts want the caveats up front. Everyone else wants the headline first and the caveats attached — not buried, not dropped.
- **The metaphor budget.** One good analogy clarifies. Three competing ones turn a briefing into a fog.

## The line I won't cross

Simplifying is not the same as distorting. If a number only holds under specific conditions, those conditions travel with it — in every version. The skill isn't deciding *what to leave out*; it's deciding *what cannot be left out* and protecting that, no matter who's listening.

> Clarity is a form of respect. It says: your time matters, and so does the truth.

I think this is the core competency behind a lot of medical-affairs work, and it's the one I most enjoy practicing. Get it right and a roomful of very different people walk out understanding the same thing — and trusting that you didn't shave the corners to get them there.
`
  },

  {
    slug: "how-i-read-a-clinical-trial",
    title: "How I Read a Clinical Trial",
    date: "June 15, 2026",
    summary: "A working checklist for getting past the abstract — what I look at, in what order, before I believe a result.",
    content: `
Abstracts are written to be believed. The methods are written to be checked. When I read a trial, I spend most of my time in the second place.

Here's the order I actually go in — not the order the paper presents.

## 1. The question before the answer

What did they *pre-specify*? A primary endpoint chosen before the data exists means something. An endpoint that appears for the first time in the results section means something else. I check the registration entry against the published primary outcome before I read another word.

## 2. Who was actually in the room

Inclusion and exclusion criteria quietly decide how far a result can travel. A drug that shines in 55-year-olds with no comorbidities is making a narrower promise than the title implies. The denominator is where generalizability lives or dies.

## 3. The effect, in honest units

- **Relative risk reduction** sounds dramatic and is easy to oversell.
- **Absolute risk reduction** tells you what a real patient can expect.
- **Number needed to treat** turns it into something you can picture: treat *this many* to help *one*.

If a press release leads with the relative number and hides the absolute one, that's not a statistics choice. That's a marketing choice.

## 4. What it cost

Benefits and harms belong on the same page. I look for whether harms were collected as carefully as benefits, or whether adverse events got a single tidy sentence while efficacy got three figures.

---

None of this requires advanced statistics — it requires refusing to stop at the abstract. The discipline is mostly about sequence: question, population, effect size, trade-off. Read in that order and a surprising number of "breakthroughs" turn back into "promising, with caveats."

Got a paper you want a second set of eyes on? [Email me](mailto:nathan@nathanmuschinske.com).
`
  },

  {
    slug: "reactors-to-rounds",
    title: "From Reactors to Rounds: What Chemical Engineering Taught Me About Medicine",
    date: "May 19, 2026",
    summary: "Engineering and medicine look like different worlds. The mental model underneath them is almost identical.",
    content: `
I started in chemical engineering and ended up in medicine, and people tend to treat that as a swerve. It never felt like one. The subject matter changed; the way of thinking didn't.

## Systems, not parts

Engineering trains you to see a system before you see its components — inputs, outputs, feedback loops, the place where a small change cascades. A human body is a system like that. So is a clinic. So is a classroom. Once you've spent a year staring at a process flow diagram, you can't *un-see* the loops everywhere else.

## Rate-limiting steps

In a reaction, one slow step sets the pace of the whole thing. Fix anything else and you've wasted your time. Medicine and operations are full of rate-limiting steps hiding in plain sight: the one lab that gates a discharge, the one form that stalls an entire workflow. The engineering instinct is to find *that* step first and ignore the noise around it.

## Tolerances and failure modes

- Engineers assume things will fail and design for it.
- Good clinicians do the same — they plan around the error, not around the ideal.
- The shared question is always: *what happens at the edges, not the average?*

> A model is only as useful as its honesty about where it breaks.

## The thread

What connects all of it is a single move: take a complicated system, find the leverage point, make it work better for the people inside it. I've applied that to a separations column, a patient's differential, a CRM rollout, and a struggling student's understanding of fractions. Different domains, identical verb.

I don't think the path was a detour. I think it was the same skill, picking up range.
`
  },

  {
    slug: "what-is-an-msl",
    title: "The Medical Science Liaison Role, in Plain Terms",
    date: "June 5, 2026",
    summary: "Why a role built around scientific dialogue — not selling — is the one I'm aiming at, and what it actually involves.",
    content: `
When I tell people I'm pursuing a Medical Science Liaison role, the usual follow-up is: "a what?" It's one of those jobs that's well understood inside an industry and nearly invisible outside it. Here's the plain version.

## What an MSL is

A Medical Science Liaison is a scientific bridge between a pharmaceutical or biotech company and the clinicians and researchers who treat patients. The job is **peer-to-peer scientific exchange** — not sales. An MSL discusses the evidence behind a therapy, listens to what experts are seeing in practice, and carries that signal back inside the company so the science stays honest and current on both sides.

## What the day actually looks like

- Sitting down with key opinion leaders to talk through trial data, mechanisms, and unanswered questions.
- Translating dense clinical evidence for different specialties without flattening it.
- Bringing field insight back to medical and research teams — the questions clinicians keep asking, the gaps the data hasn't closed.
- Staying genuinely current in a therapeutic area, because the people across the table are experts and will know if you aren't.

## Why it fits me

The role sits exactly on the seam I keep coming back to: deep science on one side, clear communication on the other, and a relationship of trust holding the two together. I've spent years translating hard ideas for very different audiences — patients, students, operators — and reading evidence critically enough to know what it does and doesn't say.

> The best scientific relationships run on credibility, not persuasion.

That's the work I want to do: be the person a clinician trusts to give them the straight version of the science, and the person a company trusts to bring the field's real questions home.
`
  },

  {
    slug: "ai-for-literature",
    title: "Using AI to Keep Up With the Literature (Without Trusting It Blindly)",
    date: "June 1, 2026",
    summary: "Language models are a genuinely good reading assistant for dense research — as long as you treat them as a first pass, never a final word.",
    content: `
The volume of published research in any active field is past the point where a human can read it all. I use AI tools to keep up. I also never let them have the last word. Both of those are load-bearing.

## Where it genuinely helps

- **Triage.** Point a model at a stack of abstracts and ask which ones bear on a specific question. It's fast and surprisingly good at *narrowing*, which is most of the battle.
- **Orientation.** Before I read a paper outside my comfort zone, a plain-language summary of the methods gives me a map. I read the actual paper better for having one.
- **Drafting scaffolds.** Turning my own notes into a clean summary for someone else — the model handles the boring structure so I can focus on whether it's *right*.

## Where it quietly lies

The failure mode isn't dramatic. It's confident, fluent, and slightly wrong. A model will invent a citation that looks perfect, soften a caveat that mattered, or collapse "associated with" into "causes." None of these announce themselves.

So I treat anything a model tells me about a study as a **claim to verify**, not a fact to repeat. The numbers come from the paper. The conclusions come from me. The model is the intern who did the first read — useful, fast, and never the signature on the work.

---

The honest framing: AI lets me cover three times the literature and trust my own judgment exactly as much as before. The leverage is real. The accountability doesn't transfer.

> Automate the search. Never automate the believing.
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

I'll write a follow-up with a couple of concrete lesson-design workflows. If there's a specific subject you'd want to see worked through, [email me](mailto:nathan@nathanmuschinske.com).
`
  },

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
