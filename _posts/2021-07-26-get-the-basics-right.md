---
layout: post
title: Get The Basics Right
date: 2021-07-26 09:06 +0200
tags:
  - Software
  - Development
---

When developing software, it is important to get the basics right.

The Dutch CoronaCheck application is used to determine if you're allowed into social events, like cafés, restaurants and cinemas. Like most applications, the CoronaCheck contained some growing pains and bugs, but one of the bugs caught my attention.

If your name contained special characters (like an é or an ô) or hyphens, the application wasn't able to provide you with the QR-code that is necessary to get access to events. Without knowing the exact details, to me it looks like there was an encoding difference, leading to problems when comparing two texts with a different encoding.

This example shows that when you're developing software, it's important to get the basics right. It's important to build a proper foundation for your application which you can continue to build upon for years to come. It's like building a house: when the foundation is broken, it's extremely hard to build upon it - if it's possible at all.

A few pointers on how to avoid these foundational problems:

1. **Create and use a list of foundational elements for your application.**
Tick items off this list once you've implemented them and keep checking them when building new features.
2. **Respect the basics.**
Be humble. Even if you're a senior developer (maybe especially then), know that good code starts with the basics.
3. **Keep learning.**
Foundations change, so make sure you change as well. Keep learning about new foundational problems and how to avoid them.