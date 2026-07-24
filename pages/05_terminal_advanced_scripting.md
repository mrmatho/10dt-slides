---
theme: default
title: Leveling Up Scripts
hideInToc: false
---

# Introduction to the Command Line
## Lesson 5: Leveling Up Scripts

---

# Where we left off

Lesson 4 scripts did one thing per line — one move per file type, no repeats, no shortcuts.

Today: variables, user input, loops, and a conditional make that same script shorter, safer, and reusable.

---

# Variables: naming a value once

A variable stores a value so you can reuse it without retyping it.

```bat
set "FOLDER=Images"
move photo.jpg "%FOLDER%"
```

```bash
FOLDER="Images"
mv photo.jpg "$FOLDER"
```

Change the folder name once, at the top — every line below still works.

*Note: We don't have to use quotes around the variable name when we use it, but we are doing so to avoid any problems if the folder name had spaces in it.*

---
layout: center
zoom: 1.1
---

# Check
Why quote `"%FOLDER%"` / `"$FOLDER"` instead of leaving it bare?

---

# Getting a value from the user

Instead of hardcoding a value, a script can ask for one.

```bat
set /p "FOLDER=Enter a folder name: "
```

```bash
read -p "Enter a folder name: " FOLDER
```

Whatever the user types is stored in `FOLDER` — the rest of the script doesn't change at all.

---

# Loops: repeat an action for each match

Instead of one line per file, a loop handles every match with one line.

```bat
for %%f in (*.jpg) do move "%%f" "%FOLDER%"
```

```bash
for f in *.jpg; do mv "$f" "$FOLDER"; done
```

`%%f` / `$f` stands in for each matching file, one at a time.

---
layout: center
---

# Check
If a folder has 12 `.jpg` files, how many lines of script do you need to move them all with a loop?

---

# Conditionals: only act if needed

A conditional checks something before running a command.

```bat
if not exist "%FOLDER%" mkdir "%FOLDER%"
```

```bash
[ -d "$FOLDER" ] || mkdir "$FOLDER"
```

Only creates the folder if it isn't already there — safe to run the script twice.

---

# One more useful line: compressing a folder

```bat
tar -a -cf "%FOLDER%.zip" "%FOLDER%"
```

```bash
zip -r "$FOLDER.zip" "$FOLDER"
```

Turns a whole folder into a single `.zip` file — handy for handing off or backing up sorted files.

---
layout: center
---

# Check
Why use a variable for the folder name instead of typing "Images" on every line?

---
zoom: 0.9
layout: two-cols-header
---

# Do Together

::left::

### Starting files (L5_Practice):

- img1.jpg, img2.jpg, img3.jpg
- note1.txt, note2.txt

When prompted, type: **Images**

::right::

### Target result:

- Images/ containing all 3 .jpg files
- Documents/ containing both .txt files
- Images.zip — a compressed copy of Images/
- log.txt recording the count moved into Images
- Script is safe to run twice without errors

---
layout: center
---

# Check
Predict what happens if you run the script a second time — compare to Lesson 4's script, which had no conditional.

---
zoom: 0.9
layout: two-cols-header
---

# Your Turn

::left::

### Starting files (L5_YourTurn):

- pic1.png, pic2.png, pic3.png, pic4.png
- entry1.log, entry2.log, entry3.log

When prompted, type: **Pics**

::right::

### Target result:

- Pics/ containing all 4 .png files
- Logs/ containing all 3 .log files
- Pics.zip — a compressed copy of Pics/
- log.txt recording the count moved into Pics
- Script is safe to run twice without errors

---
layout: center
---

# Exit Check

What does this script do, in order?

```bat
set /p "F=Enter a folder name: "
if not exist "%F%" mkdir "%F%"
for %%x in (*.csv) do move "%%x" "%F%"
tar -a -cf "%F%.zip" "%F%"
```

<v-click>

**Answer:** Asks the user to type a folder name, creates that folder if it doesn't already exist, moves every `.csv` file into it, then compresses that folder into a `.zip` file named after it.

</v-click>
