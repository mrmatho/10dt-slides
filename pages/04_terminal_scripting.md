---
theme: default
title: Lesson 4 - Simple Scripting
---

# Introduction to the Command Line
## Lesson 4: Simple Scripting

---

# What is a script?

A saved list of commands that runs in order — type once, run any time.

- Windows: `.bat` file
- Unix-style: `.sh` file

---

# Your first script (Windows)

A `.bat` file always runs via the classic command interpreter, even if you're using PowerShell — so it uses that older style of syntax. Save these lines into a file rather than typing them directly into your terminal (some lines, like `@echo off`, only work inside a saved script).

```bat
@echo off
mkdir NewFolder
echo Folder created >> log.txt
```

Save as `setup.bat`, run it by typing `setup.bat`

---

# Your first script (Unix-style)

```bash
#!/bin/bash
mkdir NewFolder
echo "Folder created" >> log.txt
```

Save as `setup.sh`, then:

```bash
chmod +x setup.sh
./setup.sh
```

---
layout: center
---

# Check
What's the advantage of saving these three lines as a script instead of typing them directly?

---

# Building a real script: the plan

1. Create two folders
2. Move files into them by type
3. Count how many were moved
4. Write a confirmation to a log file

---

# Building a real script (Windows)

```bat
@echo off
mkdir Images
mkdir Documents
move *.jpg Images
move *.txt Documents
dir /b Images | find /c /v "" >> log.txt
echo Sorting complete >> log.txt
```

---

# Building a real script (Unix-style)

```bash
#!/bin/bash
mkdir Images
mkdir Documents
mv *.jpg Images
mv *.txt Documents
ls Images | wc -l >> log.txt
echo "Sorting complete" >> log.txt
```

---
layout: center
---

# Check
Before running — how many lines will end up in `log.txt`?

---
zoom: 0.9
layout: two-cols-header
---

# Do Together

::left::

### Starting files (L4_Practice):

- pic1.jpg, pic2.jpg, pic3.jpg, pic4.jpg
- note1.txt, note2.txt, note3.txt, note4.txt

::right::

### Target result:

- Images/ folder containing all 4 .jpg files
- Documents/ folder containing all 4 .txt files
- log.txt recording the count of files moved into Images

---
zoom: 0.9
layout: two-cols-header
---

# Your Turn — Assessed Task

::left::

### Starting files (L4_Assessment):

- holiday1.jpg, holiday2.jpg, holiday3.jpg
- memo1.txt, memo2.txt, memo3.txt
- sales.csv, budget.csv
- report.docx, summary.docx
- rules.txt (your sorting rule)

::right::

### Target result:

- Images/ containing 3 files
- Documents/ containing 5 files
- Data/ containing 2 files
- log.txt recording the count moved into Images

---

# Assessed task requirements

- Creates at least 2 folders
- Moves/copies files based on the given rule
- Uses at least one pipe or search/count tool
- Writes a result to a log file
- Runs without error
