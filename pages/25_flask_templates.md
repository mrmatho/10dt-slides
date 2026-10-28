---
layout: center
hideInToc: false
---

# Flask Templates

## Python web apps: Lesson 3

<div class="attribution">

Adapted from *Flask templates* © State of Victoria (Department of Education) 2026, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The original resource was partially generated with the assistance of AI. Changes were made.

</div>

---
layout: two-cols-header
---

# Retrieval practice

A user visits `/greet/Alex` in the browser. Put steps a) – d) in the correct order on your mini-whiteboards.

::left::

```python
@app.route('/greet/<name>')
def greet(name):
    return f"Hello, {name}!"
```

::right::

a) Flask runs `greet("Alex")` and returns `"Hello, Alex!"`

b) The browser sends an HTTP request for `/greet/Alex`

c) The browser displays **Hello, Alex!**

d) Flask matches the URL to `@app.route('/greet/<name>')`

<v-click>

**Answer:** b → d → a → c

</v-click>

---
layout: center
---

# Learning objective

We are learning about using templates in Flask web applications.

---
layout: center
---

# Success criteria

- I can describe the purpose of templates in web applications.
- I can use HTML templates with conditional logic to display dynamic content in Flask.
- I can incorporate images and stylesheets into Flask templates.

---
layout: center
---

# Vocabulary: Static

Something that stays the same and does not change.

**Example:** The company logo is static because it never changes, no matter who visits the site.

**Synonyms:** fixed, permanent

---
layout: center
---

# Check for understanding

A website displays the same logo on every page, regardless of which user is logged in.

Is the logo a **static** element?

<v-click>

**Answer:** Yes – it is the same for every user and every page.

</v-click>

---
layout: center
---

# Vocabulary: Render

Rendering is the process of turning code and data into something visible on the screen.

**Example:** The game engine renders the 3D scene so players can see it on the screen.

**Synonyms:** generate, create

---
layout: center
---

# Check for understanding

Which sentence uses the word **render** correctly? Write your answer on your mini-whiteboard.

- A. The game engine renders the scene so players can see it. <span v-click>✅</span>
- B. She rendered the file into a new folder on the desktop.
- C. He rendered his password to log in to the website.

---
layout: center
---

# Vocabulary: Conditional

Something that only happens if a certain condition is true.

**Example:** Our sports game will go ahead, but it's conditional on the weather being good.

**Synonyms:** dependent on, subject to

---
layout: center
---

# Check for understanding

**Pair-Share:** complete the following sentence using the word *conditional*.

> Logging in to a website is conditional because ___.

<v-click>

**Example answer:** ...you only get in **if** your username and password are correct.

</v-click>

---
layout: center
---

# Moving beyond plain text

So far, our Flask routes have returned plain text. To build real websites, we use **HTML templates** because they let us:

- Keep our Python code separate from the webpage layout.
- Make our project more organised and easier to update.
- Create pages that can change based on information (dynamic content).
- Reuse the same page structure for multiple pages.

---
layout: two-cols-header
---

# Separating logic from design

::left::

## Python

- Handles data and decisions.

## HTML

- Controls layout, colours and images.

::right::

## Why separate them?

- Code stays clean.
- Design is easy to change.
- Teams can work together – a designer can edit the HTML while a programmer works on the Python.

---
layout: two-cols-header
---

# Flask folder structure

Flask needs a specific folder structure and naming conventions to work correctly. Each new project gets its own folder.

::left::

```text
my_project/
├── app.py
├── templates/
│   └── index.html
└── static/
    ├── style.css
    └── welcome.png
```

::right::

- **`app.py`** – your main Python code lives here.
- **`templates/`** – holds all your `.html` files.
- **`static/`** – files that don't change: images (`.png`, `.jpg`), CSS (`.css`) and sounds (`.mp3`).

In Thonny, use the **New folder** button in the **Save** dialog to create the `templates` and `static` folders.

---
layout: center
---

# The three-step folder audit

1. **The lowercase rule:** Are your folder names all lowercase?
2. **The plural rule:** Does your `templates` folder have an **s** at the end?
3. **The outside rule:** Is your `app.py` sitting **outside** the other folders?

---
layout: center
---

# Check for understanding

Write **correct** or **incorrect** for each file path on your mini-whiteboard:

1. `template/index.html` <span v-click>❌ **incorrect** – should be `templates/index.html`</span>
2. `static/hero.jpg` <span v-click>✅ **correct**</span>
3. `Static/style.css` <span v-click>❌ **incorrect** – should be `static/style.css`</span>

<v-click>

<span class="text-sm opacity-75">Note: `Static` may still work on Windows because Windows ignores capital letters in file names, but it will break on most web servers. Always use lowercase.</span>

</v-click>

---
layout: center
---

# Introduction to Jinja2

**Jinja2** is the templating language Flask uses to display Python data inside HTML.

Two special tag types:

| Tag     | Purpose                   |
| ------- | ------------------------- |
| `{{ }}` | Output a variable         |
| `{% %}` | Logic (`if`, loops)       |

Flask replaces these tags with real data **before** sending the page to the browser. The browser only ever sees plain HTML.

---
layout: two-cols-header
---

# Jinja2 tags in action: the template

::left::

**HTML/Jinja** – `templates/index.html`

```html {all|2|5-7}
<!-- Printing tag -->
<h1>Hello, {{ name }}</h1>

<!-- Logic tag -->
{% if name == "Alex" %}
  <p>Welcome back!</p>
{% endif %}
```

::right::

<div v-click="1">

**Printing tags `{{ }}`:** output a variable's value on the page.

</div>

<div v-click="2">

**Logic tags `{% %}`:** run decisions like `if`. Always close with `{% endif %}`.

</div>

---
layout: two-cols-header
---

# Jinja2 tags in action: the Flask app

::left::

**Python/Flask** – `app.py`

```python {all|1|7}
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/greet/<name>')
def greet(name):
    return render_template('index.html', name=name)

if __name__ == '__main__':
    app.run(debug=True)
```

::right::

<div v-click="1">

**Line 1:** `render_template` must be imported from `flask` along with `Flask`.

</div>

<div v-click="2">

**Line 7:** `render_template()` finds `index.html` in the `templates` folder and uses Jinja to substitute the variable (`name`) into it.

</div>

---
layout: two-cols-header
---

# Linking static files with `url_for`

::left::

```html
<!-- templates/index.html -->
<head>
  <link rel="stylesheet"
    href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
  <h1>Hello, {{ name }}</h1>
  <p>Welcome back!</p>
  <img src="{{ url_for('static', filename='welcome.png') }}"
    alt="A waving hand">
</body>
```

::right::

Visiting `/greet/Alex` shows:

<div class="border rounded px-4 py-2 my-2">

# Hello, Alex

Welcome back! 👋

</div>

`url_for` generates the correct path to anything stored in the `static` folder, so links don't break if the app is moved.

---
layout: center
---

# Check for understanding

A student wrote this code:

```html
<img src="url_for('static', filename='dog.jpg')">
```

What is incorrect? What should it be? Write your answer on your mini-whiteboard.

<v-click>

**Answer:** The `url_for(...)` call is missing the `{{ }}` printing tags, so the browser treats it as plain text and looks for a file literally called `url_for('static', filename='dog.jpg')`.

```html
<img src="{{ url_for('static', filename='dog.jpg') }}" alt="A dog">
```

</v-click>

---
layout: two-cols-header
---

# Guided practice: Pizza order tracker

::left::

1. **Output `{{ order }}`** – display the order status on the page.
2. **Conditional logic** – show a different message when the status is `Ready` or `Preparing`.
3. **Add images** – show a different image for each status.
4. **Link stylesheet** – style the page with `style.css`.

::right::

Example pages:

<div class="border rounded p-3 my-2">

**Status: Ready** 🍕

</div>

<div class="border rounded p-3 my-2">

**Status: Preparing** 👨‍🍳

</div>

Test both by visiting `/order/Ready` and `/order/Preparing`.

---
layout: two-cols-header
---

# Pizza order tracker: model solution (Python)

::left::

**`app.py`**

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/order/<status>')
def order(status):
    return render_template('order.html',
                           order=status)

if __name__ == '__main__':
    app.run(debug=True)
```

::right::

- The `status` path parameter is passed to the template as `order`.
- Test it by visiting `/order/Ready` and `/order/Preparing`.
- The comparison is case-sensitive: `/order/ready` won't match `"Ready"`.

---
layout: center
---

# Pizza order tracker: model solution (template)

**`templates/order.html`**

```html
<head>
  <link rel="stylesheet"
    href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
  <h1>Status: {{ order }}</h1>
  {% if order == "Ready" %}
    <p>Your pizza is ready to collect!</p>
    <img src="{{ url_for('static', filename='ready.png') }}"
      alt="A pizza in a box">
  {% elif order == "Preparing" %}
    <p>Your pizza is in the oven.</p>
    <img src="{{ url_for('static', filename='preparing.png') }}"
      alt="A pizza in the oven">
  {% endif %}
</body>
```

---
layout: center
---

# Independent application: Flight status app

Build a flight status app independently using the same four steps from the guided practice. Open the flight status project files in **Thonny**.

1. Display the status value on the page using `{{ }}`.
2. Add at least two conditions with `{% if %}`, each showing a different message and image.
3. Use `url_for` for all images and to link `style.css`.

Remember the folder audit: `templates/` and `static/` (lowercase, plural templates), with `app.py` outside them.

---
layout: center
---

# Review: Success criteria

- I can describe the purpose of templates in web applications.
- I can use HTML templates with conditional logic to display dynamic content in Flask.
- I can incorporate images and stylesheets into Flask templates.

**Pair-Share:** What do `{{ }}` tags do? What do `{% %}` tags do? Share one example of each from your work today.

---
layout: center
---

# Exit ticket

Write **one** reason why Flask uses HTML templates instead of returning HTML text directly from Python.

<v-click>

**Possible answers:**

- It keeps the Python code separate from the page layout, so both are easier to read and change.
- The same template can be reused for many pages with different data.
- Designers can work on the HTML without touching the Python.

</v-click>
