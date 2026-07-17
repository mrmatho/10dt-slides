---
theme: default
title: Navigating and Managing Files
hideInToc: false
---

# Introduction to the Command Line
## Lesson 1: Navigating and Managing Files

---

# Why use a command line?

- **Faster** for repetitive tasks — no clicking through menus
- Works on **servers with no screen or GUI**
- Many tools (search, automation, networking) only exist on the command line
- Similar core skills across operating systems, even if the words differ

---

# Two versions Powershell (Windows) and bash (Unix-style) 

```powershell
# Windows (PowerShell)
pwd
```

```bash
# Unix-style (bash)
pwd
```

Same command here — but not always. We'll flag the differences as we go.

---

# Command syntax

```
command  argument
```

```powershell
cd Documents
```

`cd` is the command, `Documents` is the argument — it tells `cd` **where** to go.

---
layout: center
---

# Check
Which of these lists folder contents?

`dir`   `del`   `cd`   `mkdir`

---

# Navigating: where am I, what's here?

```powershell
pwd
# shows current path (displayed as a Path table)

dir
# lists Documents, Photos, old_file.txt (as a formatted table with size/date columns)
```

```bash
pwd
# /home/student

ls
# Documents  Photos  old_file.txt
```

---

# Navigating: moving around

```powershell
cd Documents
cd ..
```

```bash
cd Documents
cd ..
```

`cd ..` always means "go up one level" — same in both.

---

# Jumping multiple levels

You're not limited to one step at a time.

```powershell
cd ..\..
cd Documents\Assignments
```

```bash
cd ../..
cd Documents/Assignments
```

Go up two levels, or straight into a nested folder, in one command.

---

# Commands can take flags/options

Extra switches change how a command behaves.

```powershell
dir -Force
dir -Recurse
```

```bash
ls -a
ls -R
```

`-Force` and `-a` show hidden files. `-Recurse` and `-R` include everything inside subfolders too. Both shells use a dash before the flag name — just different flag names.

---
layout: center
---

# Check
`ls` shows 3 files. `ls -a` shows 5.
What are those extra 2 files likely to be?

---

# Creating folders and files

```powershell
mkdir Photos
New-Item notes.txt -ItemType File
```

```bash
mkdir Photos
touch notes.txt
```

---

# Copying, moving, renaming

```powershell
copy report.txt backup.txt
move report.txt Documents
ren report.txt final_report.txt
```

```bash
cp report.txt backup.txt
mv report.txt Documents
mv report.txt final_report.txt
```

Unix-style uses `mv` for both moving **and** renaming.

---

# Copying an entire folder

A plain `copy`/`cp` only handles one file. For a whole folder:

```powershell
Copy-Item Photos Photos_backup -Recurse
```

```bash
cp -r Photos Photos_backup
```

`-Recurse` and `-r` mean "include everything inside, including subfolders."

---

# Deleting and viewing contents

```powershell
del old_file.txt
rmdir Photos -Recurse -Force
type notes.txt
```

```bash
rm old_file.txt
rm -r Photos
cat notes.txt
```

---
layout: center
---

# We Do
Open your terminal in `L1_Practice`

---
zoom: 0.9
layout: two-cols-header
---

# Do Together

::left::

### Existing structure:

- L1_Practice/
  - Photos/
    - multiple photo files
    - archive/
      - img_old.txt
  - Documents/
    - notes.txt


::right::

### Target structure:

- L1_Practice/
  - Photos/
    - multiple photo files
    - archive/
      - img_old.txt
  - Photos_backup/
    - multiple photo files
    - archive/
      - img_old.txt
  - Documents/
    - notes.txt

(`old_file.txt` deleted, `photos_unsorted` renamed to `Photos`, `Photos_backup` created as a full copy)

---
layout: center
---

# Check
You're in `L1_Practice/Photos/archive`.
What single command gets you back to `L1_Practice`?


---
zoom: 0.9
layout: two-cols-header
---

# Your Turn

::left::

### Existing structure:

- L1_YourTurn/
  - stray_notes.txt
  - drafts/
    - essay.txt
  - media_raw/
    - clip1.txt
    - clip2.txt
    - old_clips/
      - clip0.txt

::right::

### Target structure:

- L1_YourTurn/
  - Media/
    - clip1.txt
    - clip2.txt
    - old_clips/
      - clip0.txt
  - Media_backup/
    - clip1.txt
    - clip2.txt
    - old_clips/
      - clip0.txt
  - Assignments/
    - assignment1.txt

(`stray_notes.txt` deleted, `media_raw` renamed to `Media`, `Media_backup` created as a full copy, `Assignments` created with a new file inside)

---
layout: center
---

# Exit Check — Question 1

You're in `C:\Users\Student\Documents\Reports`.
What single command takes you directly back to `C:\Users\Student`?

<v-click>

**Answer:** `cd ..\..` (Windows) / `cd ../..` (Unix) — up two levels in one command.

</v-click>

---
layout: center
---

# Exit Check — Question 2

A folder contains `report.txt`, `report_old.txt`, and a hidden file called `.config`.
Running `dir` (or `ls`) shows 2 files. What would `dir -Force` (or `ls -a`) show, and why?

<v-click>

**Answer:** 3 files — the flag reveals hidden files like `.config` that are normally left out of the listing.

</v-click>

---
layout: center
---

# Exit Check — Question 3

You run `mkdir Backup` then `Copy-Item Photos Backup -Recurse` (or `cp -r Photos Backup`).
What does the `Backup` folder contain afterwards?

<v-click>

**Answer:** A full copy of everything inside `Photos`, including any subfolders.

</v-click>
