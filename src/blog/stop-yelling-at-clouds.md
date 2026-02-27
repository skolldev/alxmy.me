---
title: "Stop Yelling at Clouds"
date: 2026-02-27
description: "On the strange compulsion developers have to hate every new thing, and why the best engineers don't bother"
---

<figure>
  <img src="/images/old_man_yells_at_tailwind.jpg" alt="Simpsons 'Old Man Yells at Cloud' newspaper meme, edited to read 'Old Man Yells at Tailwind'" />
</figure>

A new CSS framework appears, making a developer on Twitter write a 47-tweet thread about why it's an insult to everything the web was built on. Someone adds emoji to their commit messages, and a staff engineer publishes a blog post mourning the death of professionalism. An AI tool helps someone write a function and half of Hacker News declares the end of real engineering.

Every single time, like clockwork.

If there's one thing more predictable than Javascript fatigue, it's the outrage cycle. Something new shows up. People who haven't tried it explain, at length, why it's terrible. The people actually using it shrug and ship their projects.

I'm not here to tell you that every new tool is great. Some of them aren't. But I think the _pattern_ is the problem, not any individual tool.

## The Holy War Template

If you've been around for a bit, you'll start to notice that the arguments are always the same. Only the nouns change. Let me save everyone some time:

> "[New thing] is just [old thing] but worse. We already solved this problem in [year]. People who use [new thing] simply don't understand [fundamental concept]. This is what happens when [junior devs / bootcamp grads / AI] enter the industry."

And just like that, you got yourself a hit tweet. Or a blog post. Or maybe even a conference talk! You can substitute Tailwind, TypeScript, React, GraphQL, microservices, serverless, LLMs, or literally anything else that's been popular in the last ten years.

I've been in that exact same situation by the way, encountering something new, thinking of why this might be terrible, only to quietly adopt it eight months later when I actually tried it. If you've been in the industry long enough and claim you haven't done this, you're either lying or you're not paying attention.

## Secondhand Opinions

What's incredibly funny to me, or actually frustrating, is that a lot of the loudest critics aren't even reacting based on their own experience. They're rehashing someone else's take and presenting it as their own independent thought.

Let me walk you through the greatest hits:

> "Tailwind is just inline styles!"

> "Have you _seen_ how many classes end up on a single element? Disgusting."

> "LLMs are just predicting the next token, they don't actually _understand_ anything."

Those aren't actually arguments, they're really just memes. They get copy-pasted across Twitter threads and Reddit comments and conference hallway conversations by people who have never run `npm install tailwindcss` or spent a serious afternoon building something with an LLM. Someone saw a screenshot of a gnarly Tailwind class list, felt a visceral "that looks disgusting" reaction, and now they have an Opinion&trade;. Someone read that LLMs somehow work with stochastic probabilities or something, and now they can dismiss the entire field in a single sentence at dinner parties.

"LLMs just predict the next token" is technically true in the same way that "brains just fire neurons" is technically true, and equally useful as an explanation.

<figure>
  <img src="/images/ironic.jpg" alt="Alanis Morissette and Isn't It Ironic? Don't You Think?" />
  <figcaption>It's like raaaaain, on your wedding day</figcaption>
</figure>

Yes it is, Alanis. The whole posture of the cloud-yeller is _"I'm the one who actually thinks for myself, unlike these hype-following sheep."_ But repeating _"Tailwind is inline styles"_ for the thousandth time without ever building a real project with it isn't exactly thinking, is it?

I don't blame anybody for not being able to try every new tool that comes out - ain't nobody got time for that. But there's a difference between _"I haven't tried this, so I don't have a strong opinion"_ and _"I haven't tried this, but here's my essay on why it sucks."_ The first is something we should all say more often, and the second is just lazy.

## It's never really about the tool

Let's get out our armchair psychology hats and look behind the curtain: the _intensity_ of the reaction is almost never proportional to the actual technical stakes.

Gitmojis are a perfect example. We're talking about putting a small icon in front of a commit message. That's it. No, really, there's nothing more to it. And yet people react to it like someone proposed rewriting the Linux kernel in Scratch. The technical impact is precisely zero. Your git log still works. Your CI pipeline doesn't care. Nothing breaks.

So why the fury?

Because it's never really about the tool. It's about identity.

When you've spent years mastering a particular way of working, whether that's writing meticulous conventional commits, hand-crafting every CSS rule with BEM naming, building everything from scratch because you _understand the fundamentals_, a new tool that makes that investment feel less important threatens more than just your workflow. It threatens the story you tell yourself about what makes you a good engineer.

Tailwind doesn't just challenge your CSS methodology. It challenges the idea that your CSS methodology is what makes you valuable. LLMs don't just write code. They raise uncomfortable questions about which parts of your job are actually creative problem-solving and which parts are pattern matching you've been doing on autopilot.

That's a scary thing to sit with. Rather not think about it too much, a lot easier to just write a blog post about why utility classes are an abomination.

## Back to the Gospel

There's a specific flavor of this that I think deserves its own section: the senior engineer who mistakes familiarity for superiority.

You learn something deeply, develop strong opinions, reinforce them over years of experience. And at some point, _"I prefer X"_ quietly becomes _"X is objectively correct and anyone who disagrees lacks understanding."_

a.k.a "Didn't you just write a blog post about this?"

[Yes, I did.](https://alxmy.me/blog/the-book-of-clean-code/) And I'll do it again.

I catch myself doing this with Angular. I know Angular deeply. When someone tells me they chose React or Vue for a project, there's a small, irrational part of my brain that wants to explain why they're wrong. Not because there's any rational reason their project would be better in Angular - but because my expertise _wants_ to be relevant.

The best engineers do something deceptively simple: they evaluate tools based on the problem in front of them, not based on what they already love or hate. They try things before dismissing them - not everything, obviously, life is finite - but when something gains genuine traction, they get curious instead of defensive. And they understand the difference between _"I don't prefer this"_ and _"this is bad"_, because they know their preferences are shaped by their specific experience.

I want to be that engineer. Almost there.

## Ok yes we do have a hype problem

Every new tool gets positioned as a paradigm shift that you don't want to miss. Every startup claims to be reinventing something. The marketing is relentless and often detached from reality.

So yes, some skepticism is warranted, if not healthy. It gets problematic when it evolves into constant cynicism. When you stop evaluating things on their merits and start rejecting purely based on the notion that _"it's hyped, therefore it must be bad"_.

The funny thing is there's always two extreme sides to every discussion, and a huge silent middle. (No I'm not talking about politics! I promise!)

The LLM discourse is the best example of this. One side says nobody will write their own code in two years. The other side says they're useless autocomplete. Meanwhile, a huge silent middle is just using them in their daily work and getting a genuine, boring, undramatic productivity boost from it.

## A more honest conversation

I'd love to see the developer discourse shift from "this new thing is bad and here's why" to something more like: "I tried this, here's what worked, here's what didn't, here's who I think it's for."

That's all I'm asking for.

You don't have to like Tailwind. You don't have to use gitmojis. You don't have to integrate LLMs into your workflow. But maybe we could all spend less energy performing outrage and more energy building things that matter.

Alex
