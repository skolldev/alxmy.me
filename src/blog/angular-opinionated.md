---
title: "Angular, Opinionated"
date: 2026-02-17
description: "Because setting up the same project twice is one too many times"
---

TL;DR - [Angular Starter](https://github.com/skolldev/angular-starter) with

- Tailwind
- Vitest + testing-library + MSW
- ESLint + Prettier + knip
- GitHub Actions CI

Every new Angular project starts the same way: 45 minutes of config before you write a single line of feature code.

> "How did the eslint setup work again?"

> "Wait why are the types not working for the tests?"

The fun I get from configuring this setup every. single. time. is very limited. I literally just went through this yesterday.

So I decided to finally put all these steps into a template, that both I, and maybe you, can use to skip this busy work. This setup is opinionated, and it might not fit you, but I've tried to keep it very barebones.

## Styling

I'm a big fan of Tailwind. Now, somehow this is still a controversial take, but I'm not here to argue about it. Here are the reasons I tend to use it in every project:

- Easy to setup the exact sizings, spacings and colors that your design system uses
- Easy to scan html templates and understand styling, especially when onboarding new devs
- No more naming debates. No BEM, no bikeshedding over `.card-container` vs `.card-wrapper`
- No orphaned classes after refactorings
- No more `padding: 13px` - or at least more nudging to use the included spacings
- Unused classes get removed automatically, so you only ship what you need. Additional plus point: Your shipped css will not grow significantly as you add more features to your app.

## Testing

Thankfully, the days of Karma and Jasmine are behind us, and Angular now ships with vitest by default. However, I love [testing-library](https://testing-library.com/), so I pretty much include it in any testing strategy.

If you're not familiar, it's a lightweight library that helps you query and interact with DOM nodes similar to how actual users would.

```
it('should render title', async () => {
	await render(App);
	expect(screen.getByText('Hello World')).toBeInTheDocument();
});
```

It steers you away from testing implementation details like internal state or method calls, and you get some a11y testing for free - its preferred selectors query the DOM similarly to assistive technologies, so if your tests can find it, a screen reader probably can too.

The starter also includes the addons `user-event` and `jest-dom`, these handle improved simulated user interactions (like typing and clicking with all included DOM events) and extended `expect`s, respectively.

In addition, I've included [msw](https://mswjs.io/), which is probably one of my favorite libraries of all time! In short, it mocks APIs by intercepting requests at the network level, so your code makes real HTTP calls that get caught before they leave the browser. No more mocking HttpClient or injecting fake services.

This works both in tests, allowing you to test different API responses and even error cases, and in development, so you can talk to your backend friends about an API contract, and then start developing the feature right away by just mocking the response.

Here's an example of how simple it is to mock an API response:

```
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]);
  }),
];
```

## Linting & Formatting

Well this is probably (hopefully) the least controversial topic, but this starter includes `eslint` for linting, and `prettier` for formatting. The configs here are sensible defaults that include linting for TypeScript & Angular, as well as removing rules that interfere with prettier.

The lesser known package here is probably [knip](https://knip.dev/), which is a nifty little package that helps you find and remove unused code and dependencies. This is one of those utilities you don't know you need until you're 2 years deep into the project and chaos ensues.

## CI / CD

I've included a barebones setup to run build, test, linting and formatting steps in github actions, as well as dependabot updates. If you use github, this works out of the box for you, otherwise you can use this as a starting point for your own pipelines.

## What's not included

- e2e testing - Probably cypress or playwright, definitely not Selenium - Can't really go wrong here, `testing-library` also has great helpers for either.
- Component library - This is up to you - Roll your own, use an existing one like [PrimeNG](https://primeng.org/) or Material
- State Management - Don't include this until you know you need it. `NgRx` adds a lot of complexity that should earn its keep, [Signal store](https://ngrx.io/guide/signals/signal-store) from the same team is probably your next step if you need more state management.
- i18n - If you need internationalization, I would recommend [transloco](https://github.com/jsverse/transloco), but this is out of scope for this starter!
- Auth - Again, out of scope and highly dependent on your auth provider.

## Final words

My goal with this starter was not to create an all-encompassing boilerplate. I'd rather you add on to it, instead of having to rip out half of it.

If you have suggestions or want to contribute, PRs are welcome.

[Link to repo](https://github.com/skolldev/angular-starter)

I'll keep this updated as Angular and the ecosystem move forward.
