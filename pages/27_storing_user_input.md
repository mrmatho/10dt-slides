---
layout: center
hideInToc: false
---

# Storing User Input

## Python web apps: Lesson 5

<div class="attribution">

Adapted from *Storing user input* © State of Victoria (Department of Education) 2026, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes were made.

</div>

---
layout: center
---

# Retrieval practice

1. Which HTTP method is used to submit a form containing private data?
2. In a Flask route function, how do you access the value of a form field called `email` that was submitted via POST?

<v-click>

**Answers:**

1. **POST** – it sends data in the request body, keeping it out of the URL. GET adds data to the URL.
2. `request.form.get('email')` – `request.form` works like a dictionary, using the field's `name` as the key. `.get()` gives `None` instead of an error if the field is missing.

</v-click>

---
layout: center
---

# Learning objective

We are learning to validate and store user input in files.

---
layout: center
---

# Success criteria

- I can read and write data in a CSV file.
- I can apply simple client-side and server-side validation to form inputs.
- I can explain why validation is necessary on both client and server sides.

---
layout: two-cols-header
---

# Data persistence using CSV

::left::

- Data in Python variables (like last lesson's `address_book` list) is stored in the server's memory.
- That data does **not** persist after a server restart.
- **Comma-separated values (CSV)** files store data as plain text on disk, so the data persists after a server restart.

::right::

**`contacts.csv`**

```text
name,email,phone
Lena Walsh,lena@example.com,0411222333
Alex Nguyen,alex@example.com,0422333444
```

The first line is the **header** – it names each column.

---
layout: center
---

# Check for understanding

**True or false?**

If I close and restart my Flask server, data written to a CSV file will be lost.

<v-click>

**False** – the CSV file is saved on disk, so the data is still there after a restart. Only data in Python variables is lost.

</v-click>

---
layout: two-cols-header
---

# Benefits and constraints of using CSV files

::left::

## Benefits

- No database needed
- Human-readable plain text
- Easy to inspect and edit
- Survives server restarts

::right::

## Constraints

- Must rewrite the whole file to update or delete a record
- Not suitable for large datasets
- No built-in locking (two users saving at once can clash)
- No relationships between tables of data

---
layout: center
---

# Reading CSV files in Python

Use Python's built-in `csv` module. `csv.DictReader()` reads each row as a dictionary, using the header for the keys.

```python
import csv

contacts = []

# Open contacts.csv in read mode – 'r'
with open('contacts.csv', 'r', newline='') as f:
    reader = csv.DictReader(f)
    # Loop through each row and add it to the list
    for row in reader:
        contacts.append(row)
```

Save `contacts.csv` in the same folder as `app.py`.

---
layout: center
---

# Writing to CSV files in Python

`csv.DictWriter()` writes a dictionary into the file as one row.

```python
FIELDS = ['name', 'email', 'phone']
data = {'name': 'Sam Lee', 'email': 'sam@example.com', 'phone': '0433444555'}

# Open contacts.csv in append mode – 'a' adds to the end of the file
with open('contacts.csv', 'a', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=FIELDS)
    # Write one row to the file from the dictionary
    writer.writerow(data)
```

<v-click>

- `fieldnames` sets the column order. The dictionary's keys must match them exactly.
- Opening with `'w'` instead of `'a'` would **wipe the file** and start again.

</v-click>

---
layout: center
---

# Client-side validation

Client-side validation happens **in the browser**, before data is sent to the server. Use HTML attributes.

| Attribute                 | What it does                          | Example                                          |
| ------------------------- | ------------------------------------- | ------------------------------------------------ |
| `required`                | Field cannot be left empty            | `<input type="text" name="name" required>`       |
| `type="email"`            | Browser checks for valid email format | `<input type="email" name="email">`              |
| `minlength` / `maxlength` | Sets min/max character count          | `<input type="text" minlength="2" maxlength="50">` |
| `pattern`                 | Input must match a pattern            | `<input type="tel" pattern="[0-9]{10}">` (10 digits) |

---
layout: center
---

# Check for understanding

Which attribute ensures a field only accepts a valid email format?

- A. `required`
- B. `type="email"` <span v-click>✅</span>
- C. `minlength="10"`

---
layout: two-cols-header
---

# Server-side validation

Runs in Python **after** the form data is received. It is essential because client-side validation can be bypassed, e.g. by editing the HTML in the browser's developer tools.

::left::

```python {all|2-3|4|6}
if request.method == 'POST':
    name = request.form.get('name', '').strip()
    email = request.form.get('email', '').strip()
    if len(name) < 2:
        error = 'Name must be at least 2 characters.'
    elif '@' not in email:
        error = 'Please enter a valid email address.'
    else:
        save_contact({'name': name, 'email': email})
        return redirect('/')
```

::right::

<div v-click="1">

**Lines 2-3:** `.strip()` removes spaces from the start and end. The `''` means "use an empty string if the field is missing".

</div>

<div v-click="2">

**Line 4:** check the name is at least 2 characters (an empty name has length 0).

</div>

<div v-click="3">

**Line 6:** check the email contains an `@`.

</div>

---
layout: center
---

# Guided practice: Adding CSV to the address book

Modify last lesson's address book project to save to a CSV file.

Your app will:

1. Add a phone number field and validation checks to the form.
2. Save details to a CSV file.
3. Show saved contacts on the page.

---
layout: center
---

# Guided practice: Setup

**`app.py`**

```python
import csv
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

CSV_FILE = 'contacts.csv'
FIELDS = ['first_name', 'last_name', 'email', 'phone']
```

**`contacts.csv`** (in the same folder as `app.py`)

```text
first_name,last_name,email,phone
Maurice,Mittlethorpe,maurice@example.com,0411222333
```

<v-click>

The header in `contacts.csv` must list the **same fields** as `FIELDS`. Create the file before you run the app – reading a file that doesn't exist causes a `FileNotFoundError`.

</v-click>

---
layout: center
---

# Guided practice: Reading and saving

Add these functions to `app.py`, below `FIELDS`.

```python
def read_contacts():
    with open(CSV_FILE, 'r', newline='') as f:
        reader = csv.DictReader(f)
        return list(reader)

def save_contact(data):
    with open(CSV_FILE, 'a', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writerow(data)
```

- `read_contacts()` returns every row in the file as a list of dictionaries.
- `save_contact()` adds one dictionary to the end of the file.

---
layout: center
zoom: 0.85
---

# Guided practice: Validation

```python {all|3|5-9|10-15|16-19|20-22}
@app.route('/', methods=['GET', 'POST'])
def index():
    error = None
    if request.method == 'POST':
        # Read and tidy each field
        first_name = request.form.get('first_name', '').strip()
        last_name = request.form.get('last_name', '').strip()
        email = request.form.get('email', '').strip()
        phone = request.form.get('phone', '').strip()
        if not first_name or not last_name:
            error = 'First and last name are required.'
        elif '@' not in email:
            error = 'Please enter a valid email address.'
        elif not (phone.isdigit() and len(phone) == 10):
            error = 'Phone number must be 10 digits.'
        else:
            save_contact({'first_name': first_name, 'last_name': last_name,
                          'email': email, 'phone': phone})
            return redirect('/')
    # Runs on a normal visit, or when the form had an error
    contacts = read_contacts()
    return render_template('index.html', contacts=contacts, error=error)
```

---
layout: center
zoom: 0.9
---

# Guided practice: Updating the template

```html {all|2-4|8-9|11}
<h1>Address Book</h1>
{% if error %}
  <p>Error: {{ error }}</p>
{% endif %}
<form action="/" method="POST">
  <label for="first_name">First Name</label>
  <input type="text" name="first_name" id="first_name" required>
  <label for="email">Email</label>
  <input type="email" name="email" id="email" required>
  <label for="phone">Phone</label>
  <input type="tel" name="phone" id="phone" required pattern="[0-9]{10}">
  ...
```

Keep the last name field and the button from last lesson. Add `<th>Phone</th>` and `<td>{{ contact.phone }}</td>` to the table.

---
layout: center
---

# Independent practice

Complete the **Lesson 5** section of the *Python web apps workbook*.

Copy and paste screenshots of your code into your workbook.

---
layout: center
---

# Summary

- Data stored in Python variables is lost when the server restarts. CSV files provide **persistence**.
- The `csv` module (`DictReader` / `DictWriter`) reads and writes structured data using modes `'r'` and `'a'`.
- **Client-side validation** (HTML attributes) gives immediate feedback but can be bypassed by a user.
- **Server-side validation** (Python code) is essential to protect the application from invalid data.
- A robust web application validates data on **both** client and server sides.

---
layout: center
---

# Review: Success criteria

- I can read and write data in a CSV file.
- I can apply simple client-side and server-side validation to form inputs.
- I can explain why validation is necessary on both client and server sides.

---
layout: center
---

# Exit ticket

1. Name one **benefit** and one **constraint** of using a CSV file for data storage in a Flask application.
2. A user submits a form with the `name` field empty. Write the Python code that checks for this.

<v-click>

**Possible answers:**

1. **Benefit:** survives server restarts / human-readable / no database needed. **Constraint:** must rewrite the whole file to update a record / not suitable for large datasets.
2. Strip the spaces first, then check whether anything is left:

   ```python
   name = request.form.get('name', '').strip()
   if not name:
       error = 'Name is required.'
   ```

</v-click>
