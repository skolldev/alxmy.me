---
title: "The Book of Clean Code, Chapter and Verse"
date: 2026-02-08
description: "When Guidance Becomes Gospel"
---

You've just finished working on your feature, open the PR.

Someone starts the review:

> you have used this code twice, refactor for DRY

> please remove your comments, all code should be self-documenting

> this violates SRP, refactor it

I have written these comments myself. Every one of these rules comes from a good place, and still, the review doesn't _feel_ good.

The problem isn't that the rules aren't valid, it's that the justification is familiar: "Clean Code says so"

## The book was good, actually

To be clear, this is not a jab at Uncle Bob's book. It's a valuable read, an opinionated piece that changed how a lot of us write software.

But it's easy to forget that he wrote the book from experience, not from listening to a burning bush on Mount Horeb. He looked back at codebases he worked on, messes he caused (and cleaned up) and patterns that hurt him. Then he drew conclusions, took a stance, and wrote it down.

It's a conversation starter, not something you use to shut one down.

## What we did with it

The problem started when we turned those opinions into commandments. And I’ve been there.

You’re a junior. A senior tells you to read _Clean Code_. You memorize the rules. You apply the rules. Eventually, with enough time and confidence, you start enforcing the rules.

Somewhere along, the reasons get lost. You become more senior, and one day you’re enforcing rules you can’t actually justify.
And it makes sense - code reviews are hard. Thinking through someone else’s design decisions takes time and attention. Checking code against a book is easier, and feels objective, but it’s also a way out of having to engage with the code in front of you.

<figure>
  <img src="/images/monke.png" alt="Cartoon of the '5 Monkeys and a Ladder' experiment" />
  <figcaption>There's always an opportunity to reference this</figcaption>
</figure>

## The real cost

Working code gets rewritten to satisfy abstract purity metrics. If that seems like a stretch, I found a master's thesis titled "Functional Purity as a Code Quality Metric in Multi-Paradigm Languages".

Teams stop asking "is this clear?" and start asking "is this clean?" And those sound like the same question, but they're not.

You've seen that PR comment from the intro: "Please remove your comments. Code should be self-documenting." And then six months later someone's staring at a regex/business rule/edge case nobody understands, because the comment that would have explained _why_ it exists was never written.

Now you may say "Uhm Alex, Uncle Bob never said to not write comments, and he mentions writing comments for _why_". And you'd be right. And that's the point: The nuance got lost, and all we ingrain in our brain is "code should be self-documenting."

## The deeper problem

Having an opinion is something I deeply value. It's not easy, because it opens you up to criticism, takes time to explain and you might be wrong.

But following a book of rules to a T isn't having an opinion. It's not something you've formed, you just borrowed it from the book.
Uncle Bob was opinionated. He thought about trade-offs, picked a side, and defended it. Agreeing with everything he wrote without questioning any of it is kind of the opposite of what he did.

## So what now?

If Uncle Bob wrote the book today, he’d likely disagree with half of it himself.

Read the book, appreciate it and talk about it with others. Discuss with your friends and colleagues, think about what you like or dislike about the principles.

When you found some principles you like, and your colleagues dislike those very same ones, defend your opinion, with your own reason, without a page reference.

And if nothing in it made you uncomfortable, you should probably read it again.

And the next time you review a Junior's code, tell them WHY you think this code should look the way you think.

Alex
