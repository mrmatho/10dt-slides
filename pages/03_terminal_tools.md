---
theme: default
title: Lesson 3 - Tools Worth Knowing
---

# Introduction to the Command Line
## Lesson 3: Tools Worth Knowing — Search, Sort and Networking

---

# Today: tools that beat the GUI

- Searching inside files
- Counting and sorting
- Checking a network connection
- All possible in File Explorer or a browser — just much slower

---

# Searching inside files for text

```powershell
findstr "error" *.txt
```

```bash
grep "error" *.txt
```

File Explorer can't easily search *inside* many files at once — this does it instantly.

---

# Counting lines or matches

```powershell
Get-Content file.txt | Measure-Object -Line
```

```bash
wc -l file.txt
```

Counts lines in a file — useful combined with a search, using a pipe.

---

# Search + count together

```powershell
findstr "error" *.txt | Measure-Object -Line
```

```bash
grep "error" *.txt | wc -l
```

Finds matching lines, then counts them — same pipe idea from Lesson 2.

---

# Sorting output

```powershell
dir | sort LastWriteTime -Descending
```

```bash
ls -lt
```

Shows newest files first, without changing any view settings.

---

# Viewing the whole folder structure

```powershell
tree
```

```bash
tree
```

(or `find .` if `tree` isn't installed)

One command instead of expanding every folder by hand.

---
layout: center
---

# Check
Match each tool to its job: search inside files, count matches, sort by date, show folder structure

---

# Basic networking: checking your own connection

```powershell
ipconfig
```

```bash
ifconfig
```

Shows your device's IP address and network details.

---

# Testing if a host is reachable

```powershell
ping google.com
```

```bash
ping -c 4 google.com
```

`-c 4` limits Unix-style ping to 4 attempts — Windows stops on its own.

---

# Tracing the path to a host

```powershell
tracert google.com
```

```bash
traceroute google.com
```

Shows every network hop along the way — not visible in any browser.

---

# Looking up a domain's IP address

```powershell
nslookup google.com
```

```bash
nslookup google.com
```

---

# Fetching a page directly

```powershell
curl.exe https://example.com
```

```bash
curl https://example.com
```

No browser needed — useful for automation and testing. (On Windows, `curl.exe` — not just `curl` — since PowerShell has its own built-in `curl` shortcut that behaves differently.)

---
layout: center
---

# Check
Which tool would you use to see every hop between you and a website?

---

# Bringing it together: piping a network tool

```powershell
ping google.com | find "time"
```

```bash
ping -c 4 google.com | grep time
```

Filters ping's output down to the useful line — same piping skill, new context.

---
zoom: 0.9
layout: two-cols-header
---

# Do Together

::left::

### Starting files (L3_Practice):

- 24 short text files (memo_1.txt to memo_24.txt)
- 6 of them contain the word "URGENT"

::right::

### Steps:

1. Find every file containing "URGENT" — by opening each file manually
2. Now find them again using `findstr` / `grep`
3. Compare: how long did each approach take?

---
layout: center
---

# Check
Which was faster — and would that gap get bigger with 200 files instead of 20?

---
zoom: 0.9
layout: two-cols-header
---

# Your Turn

::left::

### Starting files (L3_YourTurn):

- 18 short text files (log_1.txt to log_18.txt)
- 5 of them contain the word "ERROR"

::right::

### Steps:

1. Search for files containing "ERROR" using `findstr` / `grep`
2. Count how many matches you found
3. Run a networking check on the address your teacher gives you
4. Report what you find

---
layout: center
---

# Exit Check

Match each tool to the problem it solves:

| Tool | Problem |
|---|---|
| 1. `grep` / `findstr` | A. Shows every hop between you and a website |
| 2. `wc -l` / `Measure-Object -Line` | B. Searches inside files for a specific word |
| 3. `ping` | C. Tells you whether a host is reachable right now |
| 4. `tracert` / `traceroute` | D. Counts how many lines or matches there are |
| 5. `nslookup` | E. Looks up the IP address behind a domain name |

<v-click>

**Answer:** 1-B, 2-D, 3-C, 4-A, 5-E

</v-click>
