---
name: create-slide-page
description: Create a new Slidev slide page, add the correct frontmatter, and link it from the main deck.
---

# Create a Slidev slide page

Use this skill when you need to add a new lesson or topic slide to the presentation.

## Goal
Create a new markdown file in the pages folder and add it to the main slides deck.

## Workflow
1. Ask for a title if the user has not provided one.
2. Choose a filename that matches the title and uses the next available numeric prefix, such as 08_authentication.md.
3. Create the slide file with frontmatter that includes only the title and hideInToc setting.
4. Do not include a theme field in the frontmatter.
5. Keep the first slide minimal: use the title as the only content unless the user asks for more.
6. Add a reference to the new file in slides.md using the same pattern as the existing slide entries.
7. Verify that the new slide file exists and that the deck references it.

## Required structure
```md
---
title: Authentication - Passwords, Passphrases and MFA
hideInToc: false
---

# Authentication - Passwords, Passphrases and MFA
```

## Quality bar
- The filename matches the title closely.
- The frontmatter is simple and does not include theme.
- The slide content is concise and easy to read.
- The main deck has a working reference to the new page.
