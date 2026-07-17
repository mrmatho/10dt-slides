---
theme: default
title: Terminal Wildcards, Redirection and Piping
hideInToc: false
---

# Introduction to the Command Line
## Lesson 2: Wildcards, Redirection and Piping

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
dir -Name > list.txt
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
dir -Name | findstr .txt
```

```bash
ls | grep .txt
```

---

# Piping: chaining more than two

Pipes can be chained as many times as needed.

```powershell
dir -Name | findstr .txt | find /c /v ""
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
zoom: 0.9
layout: two-cols-header
---

# Do Together

::left::

### Starting files (L2_Practice):

- photo1.jpg, photo2.jpg, photo10.jpg
- notes.txt
- report_1.txt, report_2.txt, report_10.txt
- data.csv

::right::

### Steps — same question, three ways:

1. Use a wildcard to list the `.jpg` files
2. Redirect a full folder listing into `manifest.txt`
3. Pipe that listing to filter for `.jpg` entries — same answer as Step 1, different technique
4. Chain a count command onto that pipe

We're answering "which files are `.jpg`?" three different ways — notice which method you'd actually reach for in each situation.

---
zoom: 0.9
layout: two-cols-header
---

# Your Turn

::left::

### Starting files (L2_YourTurn):

- track1.mp3, track2.mp3, track10.mp3
- lyrics.txt
- review_1.txt, review_2.txt, review_10.txt
- playlist.csv

::right::

### Steps:

1. List all `.mp3` files using a wildcard
2. Redirect a full folder listing into `manifest.txt`
3. Pipe that listing to find just the `.mp3` entries
4. Chain a third command to count them

### Extend:

- Move into a folder in your Documents and find out how many `.docx` files you have, using the different methods you just learned.

---
layout: center
---

# Exit Check

A folder contains: `img1.png`, `img2.png`, `img10.png`, `draft.txt`, `final.txt`, `data.csv`

What does this print, and what does each stage do?

```powershell
dir -Name | findstr .txt | find /c /v ""
```

```bash
ls | grep .txt | wc -l
```

<v-click>

**Answer:** 2 — the chain lists all files, filters down to the ones containing ".txt", then counts how many are left.

</v-click>
