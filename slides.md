---
# try also 'default' to start simple
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: 10 Digital Technologies
info: |
  ## Year 10 Digital Technologies
  Slides for the semester
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
defaults:
  layout: center
  hideInToc: true
  transition: fade
  zoom: 1.3
  class: ns-c-tight
  selectable: true
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
layout: default
editable: true
---

# Welcome to Year 10 Digital Technologies

<Toc minDepth = '1' maxDepth='3' />

---
layout: default
zoom: 1.4
hideInToc: false
---

# Expectations for the subject

<v-clicks>

- Charged laptop that stays closed when not in use
- Bringing pen and book to every class
- On time ready to go
- Contribute to class in ways that work for you
- Get help once you have tried to solve the problem yourself
- Some work in every lesson, best work when you can

</v-clicks>

---
layout: two-cols
zoom: 0.9
---

::left::

## What will we cover this semester?

We have some flexibility, but here is the overview of what should be covered this semester (from the Victorian Curriculum): 

- Developing Cyber security threat models 
- Data Compression techniques and comparing their effectiveness
- Data manipulation, validation and visualisation
- Plan and execute collaborative projects
- Identifying functional and non-functional requirements for solutions
- Designing solutions
- Creating programs using object-oriented programming
- Evaluating solutions and their future impact

::right::

## Current Common Assessment Task Plan

- Organisational Cyber Security: Develop a threat model and create a report on the findings for a fictional organisation.
- Create a CRUD application using Python, HTML and Flask
- AI: develop a proof-of-concept AI solution to a problem and evaluate its effectiveness

## Other possible mini-topics

- File Management and Terminal interfaces (We're starting here)
- Physical computing and home automation (Arduino, Raspberry Pi)
- 3D Modelling and Game Dev (Godot)


---
layout: default
zoom: 1.2
hideInToc: false
---

# Files, File Management and the Terminal

Our first topic focuses on understanding files and file management as well as learning how to use a command-line interface (CLI) or terminal to navigate and manipulate files.

Today I just need a starting point from you - complete the Quiz on the lesson plan as a pre-test

---
src: ./pages/01_terminal.md
hide: false
---

---
src: ./pages/02_terminal_wildcards_piping.md
hide: false
---

---
src: ./pages/03_terminal_tools.md
hide: false
---

---