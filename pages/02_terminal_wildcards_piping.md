---
theme: default
title: Lesson 2 - Wildcards, Redirection and Piping
---

# Introduction to the Command Line

## Lesson 2: Wildcards, Redirection and Piping

---

# Recap: fix the broken command

```powershell
cd Documents
di
```

What's wrong here?

---

# Wildcards: matching many files at once

`*` matches any number of characters.

```powershell
dir *.txt
```

```bash
ls *.txt
```

Lists every file ending in `.txt`, whatever comes before it.

---

# Wildcards: matching one character

`?` matches exactly one character.

```powershell
dir report_?.txt
```

```bash
ls report_?.txt
```

Matches `report_1.txt`, not `report_10.txt`.

---
layout: center
---

# Check

Folder contains: img1.txt, img2.txt, img10.txt, notes.doc
What does `ls img?.txt` match?

---

# Redirection: sending output to a file

`>` creates the file, or overwrites it completely if it exists.

```powershell
dir > list.txt
```

```bash
ls > list.txt
```

---

# Redirection: adding without erasing

`>>` adds to the end of a file, keeping what's already there.

```powershell
echo Done >> log.txt
```

```bash
echo Done >> log.txt
```

Run it twice — `>` gives you one line, `>>` gives you two.

---
layout: center
---

# Check
You run `echo one > log.txt` then `echo two >> log.txt`.
What's inside `log.txt` now?

---

# Piping: connecting commands

A pipe (`|`) sends the output of one command straight into the next.

- command A → pipe → command B
- B receives A's output as its input

```powershell
dir /b | findstr .txt
```

```bash
ls | grep .txt
```

---

# Piping: chaining more than two

Pipes can be chained as many times as needed.

```powershell
dir /b | findstr .txt | find /c /v ""
```

```bash
ls | grep .txt | wc -l
```

Lists files, filters to `.txt`, then counts them.

---
layout: center
---

# Check
What does adding a second pipe do to a command chain?

---
layout: center
---

# We Do
Open your terminal in `L2_Practice`

---

# Task

- List all `.jpg` files using a wildcard
- Redirect a full folder listing into `manifest.txt`
- Pipe that listing to find just the `.jpg` entries
- Chain a third command to count them

---
layout: center
---

# Check
Before you run it — how many `.jpg` files do you expect the chain to report?

---
layout: center
---

# You Do
Open `L2_YourTurn` — different folder, different file type, same three-step chain

---

# Exit check
Predict the output of a 3-stage pipe chain