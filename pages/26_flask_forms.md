---
layout: center
hideInToc: false
---

# Using Forms in Flask

## Python web apps: Lesson 4

<div class="attribution">

Adapted from *Using forms in Flask* © State of Victoria (Department of Education) 2026, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The original resource was partially generated with the support of AI. Changes were made.

</div>

---
layout: center
---

# Retrieval practice

Which line of code correctly passes a variable called `username` into a Flask template?

- A. `return render_template('page.html')`
- B. `return render_template('page.html', username=username)` <span v-click>✅</span>
- C. `return render_template('page.html', 'username')`
- D. `return render_template(username, 'page.html')`

---
layout: center
---

# Learning objective

We are learning to use HTML forms as input for web applications.

---
layout: center
---

# Success criteria

- I can describe the differences between GET and POST methods for form submission.
- I can create a form that submits data using the POST method in Flask.
- I can use looping logic in templates to display multiple form entries from a Python list in a table.

---
layout: center
---

# HTML forms

Interactive websites rely on HTML forms to collect information from users.

Basic forms typically include:

- Input fields
- Labels
- A submit button

When the user submits a form, the data is sent to the server for processing.

---
layout: two-cols-header
---

# GET vs POST methods

::left::

## GET

- The form data is added to the URL, e.g. `/search?q=cats`
- Anyone who sees the address can see the data, and it is saved in browser history and bookmarks.
- **Examples:** search bars, product pages.

::right::

## POST

- The form data is sent inside the body of the request.
- The data does not appear in the URL.
- **Examples:** login forms, forms with personal data, anything that saves or changes data.

<v-click>

<div class="note">

POST keeps data out of the URL, but it does **not** encrypt it. Websites need **HTTPS** to keep form data private as it travels.

</div>

</v-click>

---
layout: center
---

# Check for understanding

Decide which method should be used: **GET** or **POST**.

1. Searching for a video on a website. <span v-click>**GET**</span>
2. Logging in with a username and password. <span v-click>**POST**</span>
3. Submitting a contact form with your email and message. <span v-click>**POST**</span>

---
layout: two-cols-header
---

# Building a POST form

If you are saving data (like adding a contact to an address book), use the **POST** method.

::left::

```html
<h1>Address Book</h1>
<form action="/" method="POST">
  <label for="first_name">First Name</label>
  <input type="text" name="first_name" id="first_name">

  <label for="last_name">Last Name</label>
  <input type="text" name="last_name" id="last_name">

  <label for="email">Email</label>
  <input type="email" name="email" id="email">

  <button type="submit">Add Contact</button>
</form>
```

::right::

<div class="border rounded px-4 py-2 ml-4 text-sm">
<div class="font-semibold mb-1">Address Book</div>
<label class="block">First Name</label>
<input class="border rounded w-full mb-1 px-1" disabled>
<label class="block">Last Name</label>
<input class="border rounded w-full mb-1 px-1" disabled>
<label class="block">Email</label>
<input class="border rounded w-full mb-2 px-1" disabled>
<button class="border rounded px-2" disabled>Add Contact</button>
</div>

<p class="ml-4 text-sm">Each label's <code>for</code> matches its input's <code>id</code>, so clicking a label selects its box.</p>

---
layout: center
---

# Displaying multiple entries with a loop

```html {7,13}
<table border="1">
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
  </tr>
  {% for contact in contacts %}
  <tr>
    <td>{{ contact.first_name }}</td>
    <td>{{ contact.last_name }}</td>
    <td>{{ contact.email }}</td>
  </tr>
  {% endfor %}
</table>
```

- A Jinja loop automatically creates one table row for each item in the list.
- The loop runs inside the HTML template – Flask passes the data in, Jinja renders it out.

---
layout: center
zoom: 0.98
---

# Guided practice step 1: Building the HTML form

Save this in `templates/index.html`.

```html {all|2|2|4|4}
<h1>Address Book</h1>
<form action="/" method="POST">
  <label for="first_name">First Name</label>
  <input type="text" name="first_name" id="first_name" required>
  <label for="last_name">Last Name</label>
  <input type="text" name="last_name" id="last_name" required>
  <label for="email">Email</label>
  <input type="email" name="email" id="email" required>
  <button type="submit">Add Contact</button>
</form>
```

<div class="grid grid-cols-2 gap-x-6 text-sm">

<div v-click="1">

`action="/"` – where the form data goes (the Flask route).

</div>

<div v-click="2">

`method="POST"` – send the data in the request body.

</div>

<div v-click="3">

`name="first_name"` – the key Python uses to read this field.

</div>

<div v-click="4">

`required` – the form will not submit if this field is empty.

</div>

</div>

---
layout: center
zoom: 0.9
---

# Guided practice step 2: Receiving form data in Flask

```python
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

address_book = []  # Empty list to store form submissions

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":  # Only runs when the form is submitted
        # Read each field by its HTML name attribute
        first_name = request.form.get("first_name")
        last_name = request.form.get("last_name")
        email = request.form.get("email")
        # Store the three fields together as a dictionary - one key per field
        new_entry = {"first_name": first_name,
                     "last_name": last_name,
                     "email": email}
        address_book.append(new_entry)
        return redirect("/")
    return render_template("index.html", contacts=address_book)

...
```

Run it in Thonny and open `http://127.0.0.1:5000`.

---
layout: center
---

# Why `methods` and `redirect`?

<v-clicks>

- **`methods=["GET", "POST"]`** – Flask routes only accept GET requests unless you say otherwise. Without this, submitting the form gives a **405 Method Not Allowed** error.
- **`return redirect("/")`** – after saving the contact, Flask tells the browser to load the page again with a normal GET request. Without it, refreshing the page sends the form again and adds a duplicate contact.
- **`address_book = []`** – the list is stored in the server's memory, so it is emptied every time you stop and restart the app.

</v-clicks>

---
layout: two-cols-header
---

# Guided practice step 3: Displaying entries with a Jinja loop

Add this below the form in `templates/index.html`.

::left::

```html {all|7|9|13}
<table border="1">
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
  </tr>
  {% for contact in contacts %}
  <tr>
    <td>{{ contact.first_name }}</td>
    <td>{{ contact.last_name }}</td>
    <td>{{ contact.email }}</td>
  </tr>
  {% endfor %}
</table>
```

::right::

<div v-click="1">

`{% for contact in contacts %}` – `contacts` must match the variable name in `render_template()`.

</div>

<div v-click="2">

`{{ contact.first_name }}` – dot notation reads each dictionary key.

</div>

<div v-click="3">

`{% endfor %}` – every for loop must end with `endfor`, or you get a template error.

</div>

---
layout: center
---

# Independent application: Build a book log app

Apply the three steps independently in **Thonny** to build a different app that logs books a user has read.

Your app must:

1. Show a form that collects **title**, **author** and **genre**.
2. Use the **POST** method to submit the form.
3. Store each submission as a dictionary in a Python list called `book_log`.
4. Display all books in a table using a Jinja `{% for %}` loop.

---
layout: center
---

# Review: Success criteria

- I can describe the differences between GET and POST methods for form submission.
- I can create a form that submits data using the POST method in Flask.
- I can use looping logic in templates to display multiple form entries from a Python list in a table.

---
layout: center
---

# Exit ticket

Answer on your mini-whiteboard – one word or short phrase each.

1. A login form should send the username and password using which method – GET or POST? <span v-click>**POST**</span>
2. Fill the blank so this form submits with POST in Flask: `<form action="/" ______="POST">` <span v-click>**method**</span>
3. Fill the blanks to loop through each contact in Jinja: `{_____ _____ in contacts}` <span v-click>`{% for contact in contacts%}`</span>
