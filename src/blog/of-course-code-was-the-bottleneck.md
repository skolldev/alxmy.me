---
title: "Of Course Code Was the Bottleneck"
date: 2026-11-09
description: "Something is always the bottleneck. That's how bottlenecks work."
draft: true
---

> "Code was never the bottleneck."

> "Writing code is the easy part. The hard part is figuring out what to build."

> "AI won't make teams faster. Typing was never the problem."

You've probably heard one of these in your company memo, read them on LinkedIn, in Hacker News comments, maybe in a meeting or two. Usually delivered with the calm confidence of someone sharing a deep truth that only true seniors understand.

What are you on about?

## We needed observability. Yesterday.

A while ago we needed observability, and we needed it _now_. Logs, traces, errors, the whole thing. The constraints were simple: it had to be free, and it had to be self-hostable.

The obvious answer is Sentry. Have you ever looked at what it takes to self-host Sentry? It's 53 (yes, actually) containers. For a team that just wants to know why production is on fire, that's a second job.

So I built my own. [Outpost](https://getoutpost.dev/) went from nothing to an MVP in roughly a week: logs, distributed tracing, stack traces, issue grouping and an uptime monitor.

And without LLMs? Outpost wouldn't exist. Nobody, me included, was going to spend a few months building a monitoring tool. It's no Datadog, but it tells us why production is on fire.

You never see the stuff that didn't get built. There's no Jira ticket for _"tool we never even considered because it would've taken a quarter"_.

Most productivity debates assume we'll build the same software, just faster. Make building cheap enough and the list of things worth building gets longer.

_"Sure, but who's going to maintain it?"_ The same way it got built. Bumping dependencies, patching a CVE, migrating a schema: that's mostly code, and it got cheaper too. Someone still has to own it and get paged when it breaks, but that was just as true for the 53 containers.

## Then why did you hire all those devs?

Let's say code really was never the bottleneck. Then please explain the last fifteen years to me.

Explain the backlogs that only ever grew. Explain the features that took two weeks of actually writing, wiring and testing code. And explain _"great idea, let's put it on the roadmap"_, which everyone knows means never.

Granted, some of the hiring sprees were cheap money and headcount as a flex. But even the teams that hired carefully had the same problem: more ideas than people to build them. Nobody adds twenty engineers because the standup needs more attendees.

> "Well, they were hired for maintenance, debugging and keeping things running, not for writing new code."

Sure. And what do you think maintenance is? Debugging is reading and writing code. Upgrading a framework across forty services is code. Fixing the flaky test that's been haunting CI for three months is, believe it or not, also code.

All of it starts with understanding the system, obviously. It still ends with someone doing the implementation work, and that's the part that got cheaper.

<figure>
  <img src="/images/this_is_fine.jpg" alt="'This is fine' dog sitting in a room full of Jira tickets labelled 'not the bottleneck'" />
  <figcaption>Backlog: 340 tickets. Bottleneck: apparently not the code.</figcaption>
</figure>

## Something is always the bottleneck

If you've ever built a gaming PC, you already understand this.

You've got a mid-range CPU and an old GPU. Your games run badly, and the GPU is maxed out. So you upgrade the GPU. Frame rates go up - until you notice the CPU is now sitting at 100%. Congratulations, you're CPU-bound.

Did the old GPU never matter? Of course it did. It was the bottleneck. You removed it, and the next one showed up. _Something_ always has to be the slowest part of the system.

That's exactly what's happening with code right now. LLMs made producing code dramatically cheaper. And suddenly the next constraints are a lot more visible: unclear requirements, slow reviews, endless alignment meetings, deciding _what_ to build in the first place.

The skeptics look at that and conclude code was never the problem. That's like looking at your maxed-out CPU and concluding the old GPU was fine all along.

And then there's the other camp, posting _"the bottleneck is now taste"_, or specs, or judgment, like it's a big revelation. You upgraded the GPU and discovered the CPU. Welcome.

## So where are we actually?

Yes, there was always a ton of requirements engineering, meetings, refinement sessions, stakeholder alignment and all the rest of it. All of those were constraints, and they slowed teams down.

But code was _of course_ one of them, and often the biggest. Was it the bottleneck for every team, every project? Obviously not. Some teams can spend six months arguing about a button. For everyone else, every idea had to squeeze past _"do we have the people to build this?"_ and most of them didn't make it.

For a lot of teams, that just got a lot easier. Easy enough that tools like Outpost go from _"never going to happen"_ to _"done by next week"_.

To be fair, some people mean something narrower: faster code won't fix a broken organization. True. It's just not what "never" means.

## Bottlenecks move

Code was the bottleneck. Now it's a lot less of one.

That's how bottlenecks work.

Alex
