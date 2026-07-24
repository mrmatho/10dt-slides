---
theme: default
title: Process Management
hideInToc: false
---

# Introduction to the Command Line
## Lesson 6: Process Management

---

# What's actually running?

Every open program is a **process** — Task Manager / Activity Monitor shows you this as windows and icons.

The command line shows the same information as **text** — which means you can filter it, search it, and script it.

---

# Listing every running process

```powershell
tasklist
```

```bash
ps aux
```

A long list — every process on your machine, running right now.

---

# Filtering the list

Same piping skill from Lesson 2 — just pointed at a new target.

```powershell
tasklist | findstr notepad
```

```bash
ps aux | grep notepad
```

Cuts the long list down to just the process you're looking for.

---
layout: center
---

# Check
You have 3 Chrome windows open. Roughly how many lines would `tasklist | findstr chrome` show?

---

# Ending a process

```powershell
taskkill /IM notepad.exe /F
```

```bash
pkill notepad
```

Ends the process by **name** — no need to find and close a window.

---
layout: center
---

# Important
Only ever end a process **you started yourself**. Never target something you don't recognise.

---
zoom: 0.9
layout: two-cols-header
---

# Do Together

::left::

### Steps:

1. Open Notepad (or TextEdit)
2. List all running processes
3. Filter that list for "notepad"

::right::

### Then:

4. Predict what the filtered list will show
5. End the process by name
6. List again to confirm it's gone

---
layout: center
---

# Check
Before ending it — predict exactly what the filtered list from Step 3 will show.

---
zoom: 0.9
layout: two-cols-header
---

# Your Turn

::left::

### Steps:

1. Open a different application (teacher will suggest one)
2. List all running processes
3. Filter that list for its name

::right::

### Then:

4. End the process by name
5. List again to confirm it's gone
6. Be ready to show your teacher each step

---
layout: center
---

# Exit Check

You run `tasklist | findstr chrome` and get no results, even though Chrome is open.
What's the most likely explanation?

<v-click>

**Answer:** The process name doesn't match exactly what you typed — filtering only matches the text you give it, and the real process name might be spelled or cased differently.

</v-click>
