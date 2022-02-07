---
title: Stately Editor Public Beta
description: asdf
tags:
  - editor
  - announcement
author:
  - David Khourshid
originalURL: ""
excerpt: ""
publishedAt: 2022-2-6
---

We're excited to announce the public beta of the Stately Editor! The Stately Editor is a tool for creating and editing state diagrams. We've received a lot of great feedback from the private beta testers, and now we look forward to sharing it with everyone.

The software development lifecycle today is a bit fragmented. It's very difficult for user stories, designs, code, tests, and documentation to stay in sync, leading to things going out-of-date, or even missing completely. Bugs increase, and adding or modifying features becomes increasingly difficult. And even understanding all the features and use-cases of an app becomes a daunting task.

Our mission is to make app logic accessible with the entire team, including developers, designers, and stakeholders. By using state machines and statecharts as a common visual language, the software development cycle becomes more collaborative, which eliminates handoff and tightens the feedback loop.

The Stately Editor aims to be that collaborative visual app logic tool. Before, developers could create state machines and statecharts in code using [XState](https://github.com/statelyai/xstate). Now, those same state machines and statecharts can be created visually.

And yes, it goes both ways: edit the code, and see the updated statechart. Edit the statechart diagram, and see the updated code. All in real-time.

## Editor overview

To get started quickly, go to [stately.ai/editor](https://stately.ai/editor). From there, you can start creating your machines in the editor. See this video for more information:

> TODO: add video

You can also create new machines in any system, which will open them in the editor:

> TODO: add video

## Features and roadmap

Most statechart features are supported by the editor:

- Atomic, compound, parallel, history, and final states
- Normal, guarded, and delayed events/transitions
- Entry, exit, and transition actions
- Invocations
- Done and error transitions for states and invocations
- State and event descriptions

There's currently two modes:

- **Editor mode:** add, modify, and delete states, events, and transitions, as well as data like actions, descriptions, and invocations.
- **Simulation mode:** run the statechart, trigger events, and see the active state nodes.

We have a long list of features planned for the editor, including:

- Parameterized actions, guards, and invocations
- Built-in actions, such as `assign` and `raise`
- Schema editing for `context` and `events`
- More granular simulation control, such as specifying event payload and simulating delays
- Visualizing systems of actors, including spawned and invoked machines
- Warnings and errors for invalid machine definitions
- Customizable state node, event, and transition colors
- Rich text editing and content for state descriptions
- Markdown generation
- Event recording and playback
- Machine versioning and diffing
- Autolayout and smart layout controls

## Join the public beta

Excited to see what the Stately Editor can do? Join the public beta by registering for free at [stately.ai/registry](https://stately.ai/registry) and creating your first machine at [stately.ai/editor], or [discover other people's machines](https://stately.ai/registry/discover) and get inspired.

If you have any feedback, such as feature requests or bug reports, please [let us know](https://github.com/statelyai/editor-feedback/issues/new).

> TODO: CTA?

## Next steps

This is our first major step into making the ultimate collaborative tool for visually editing even the most complex app logic. We're excited to share the Stately Editor with the world, and we're looking forward to hearing your feedback.

Make sure to [join our Discord community](https://discord.gg/xstate) to get help, ask questions, and get feedback.