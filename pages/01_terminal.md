---
theme: default
title: Lesson 1 - Navigating and Managing Files
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

# Two versions today

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
# C:\Users\Student

dir
# Documents  Photos  old_file.txt
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
dir /a
dir /s
```

```bash
ls -a
ls -R
```

`/a` and `-a` show hidden files. `/s` and `-R` include everything inside subfolders too.

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
type nul > notes.txt
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
xcopy Photos Photos_backup /e /i
```

```bash
cp -r Photos Photos_backup
```

`/e` and `-r` mean "include everything inside, including subfolders."

---

# Deleting and viewing contents

```powershell
del old_file.txt
rmdir /s Photos
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

## Target structure

- L1_Practice/
  - Photos/
    - archive/
      - img_old.txt
  - Photos_backup/
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
layout: center
zoom: 0.9
---

# You Do
L1_YourTurn - reach the target structure below.
*This one needs a multi-level `cd`, a flag, and a recursive copy.*

## Target Structure (L1_YourTurn)

- Photos/ folder, containing an archive/ folder with img_old.txt inside
- Photos_backup/ folder — a full copy of Photos, including the archive/ folder
- Documents/ folder, containing notes.txt
- old_file.txt deleted; photos_unsorted renamed to Photos

## Extend: Use absolute paths

Repeat the L1_YourTurn task, but this time cd is banned — every command must use the full path from the drive root (e.g. `mkdir C:\Users\Student\L1_YourTurn\Assignments` instead of navigating in first)

---

# Exit check

1. You're in C:\Users\Student\Documents\Reports. What single command takes you directly back to C:\Users\Student?
2. A folder contains report.txt, report_old.txt, and a hidden file called .config. Running dir (or ls) shows 2 files. What would dir /a (or ls -a) show, and why?
3. You run mkdir Backup then xcopy Photos Backup /e /i (or cp -r Photos Backup). What does the Backup folder contain afterwards?

<v-clicks>

**Answers:**

1. cd ..\.. (Windows) / cd ../.. (Unix) — up two levels in one command.
2. 3 files — the flag reveals hidden files like .config that are normally left out of the listing.
3. A full copy of everything inside Photos, including any subfolders.

</v-clicks>
