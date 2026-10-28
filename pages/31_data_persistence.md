---
layout: center
hideInToc: false
---

# Data Persistence in Web Apps

## Python web apps: Lesson 9

<div class="attribution">

Adapted from *Data Persistence in Web Apps* © State of Victoria (Department of Education) 2026, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes were made.

</div>

---
layout: two-cols-header
---

# Retrieval practice

Read the pseudocode and select the correct Python syntax for opening a file in read mode. Write your answer on mini-whiteboards.

::left::

```text
BEGIN ReadFile
   OPEN "data.csv" in read mode
END
```

::right::

- A. `with open('data.csv', mode='w', newline='') as file:`
- B. `with open('data.csv', mode='a', newline='') as file:`
- C. `with open('data.csv', mode='r', newline='') as file:` <span v-click>✅</span>

---
layout: center
---

# Learning objective

We are learning to persist data in a file in our web app.

---
layout: center
---

# Success criteria

- I can explain why persistent data storage is necessary.
- I can create a CSV file that meets my application's requirements.
- I can build pages that read from a CSV file to display summary and detailed views.

---
layout: center
---

# Persistent vs volatile data

|                                      | Persistent data                                       | Volatile data                                                   |
| ------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------- |
| **What is it?**                      | Data saved to a file or database that survives after the app closes | Data held in memory (e.g. a Python list) that is lost when the app stops |
| **Example**                          | Student records saved to a CSV file                   | A list of names stored in a variable                            |
| **What happens when the server stops?** | Data is still there when you restart                | Data is gone and must be re-entered                             |

---
layout: two-cols-header
---

# Master-detail views

A **master** page displays a list of all records. Each item links to a **detail** page showing the complete information for one record, found by its unique ID.

::left::

**Master view** – `/`

<div class="border rounded p-3 mr-4">
<div class="font-semibold mb-2">All Students</div>
<div class="underline">Emma Chen</div>
<div class="underline">Liam Nguyen</div>
<div class="underline">Olivia Patel</div>
</div>

::right::

**Detail view** – `/read/2`

<div class="border rounded p-3 text-sm">
<div class="font-semibold text-base mb-2">Student Detail</div>
<div>Name: Liam Nguyen</div>
<div>Student ID: 2</div>
<div>Year Level: 10</div>
<div>Email: liam.nguyen@school.edu.au</div>
</div>

---
layout: two-cols-header
---

# Master-detail: Python/Flask and HTML/Jinja

::left::

**Master view Python** – Flask route `/`

1. Read all the records from the file.
2. Sort (if needed).
3. Pass all records to the Jinja template.

**Master view Jinja** – `master.html`

1. Loop through each record.
2. Create links to `/read/<id>`.
3. Display records in a table or list.

::right::

**Detail view Python** – Flask route `/read/<id>`

1. Find the record that matches the ID.
2. Pass one record to the Jinja template.

**Detail view Jinja** – `detail.html`

1. Display the record's details.

---
layout: center
---

# The CSV file

Each record needs a **unique ID** so the detail route can find it.

**`data.csv`**

```text
id,name,year_level,email
1,Emma Chen,10,emma.chen@school.edu.au
2,Liam Nguyen,10,liam.nguyen@school.edu.au
3,Olivia Patel,10,olivia.patel@school.edu.au
```

Use underscores, not spaces, in the header row – the headers become the dictionary keys (`record['year_level']`).

---
layout: center
---

# Rendering the master view

Records are passed to the Jinja template with `render_template()`.

```python
import csv
from flask import Flask, render_template, abort

app = Flask(__name__)

@app.route("/")
def master_view():
    records_list = []
    with open("data.csv", mode="r", newline="") as file:
        reader = csv.DictReader(file)
        for row in reader:
            records_list.append(row)
    # Pass the list to the Jinja template
    return render_template("master.html", records=records_list)
```

---
layout: center
---

# Rendering the detail view

The detail route finds a single record by its ID and renders it.

```python {all|6-8|10-11}
@app.route("/read/<record_id>")
def detail_view(record_id):
    selected_record = None
    with open("data.csv", mode="r", newline="") as file:
        reader = csv.DictReader(file)
        for row in reader:
            if row["id"] == record_id:
                selected_record = row
    # No matching ID: send a 404 Not Found
    if selected_record is None:
        abort(404)
    # Pass the single matching record to the Jinja template
    return render_template("detail.html", record=selected_record)
```

---
layout: two-cols-header
---

# The Jinja templates

::left::

**`templates/master.html`** – loops through the records to make clickable links.

```html
<h1>All Students</h1>
{% for record in records %}
  <a href="/read/{{ record['id'] }}">
    {{ record['name'] }}
  </a>
  <br>
{% endfor %}
```

::right::

**`templates/detail.html`** – shows one student, with a link back to the master list.

```html
<h1>Student Detail</h1>
<p>Name: {{ record['name'] }}</p>
<p>ID: {{ record['id'] }}</p>
<p>Year Level: {{ record['year_level'] }}</p>
<a href="/">Back to all students</a>
```

---
layout: center
---

# Check for understanding

In the detail route, how does the Flask application know which record to display?

- A. It displays the first record in the CSV file.
- B. It matches the record ID from the URL to a row in the CSV. <span v-click>✅</span>
- C. The user types the student name into a search box.

---
layout: center
---

# Guided practice

We will:

1. Open the sample project and examine the pre-populated CSV data file.
2. Complete the `master_view()` route in `app.py` to read all records from the CSV.
3. Write the Jinja for loop in `master.html` to display clickable student names.
4. Complete the `detail_view()` route to find and display a single record by ID.
5. Fill in `detail.html` to show individual student fields.
6. Test the master-detail navigation in the browser – including an ID that doesn't exist, like `/read/3000`.

---
layout: center
---

# Independent tasks

1. Create a CSV file for your project using the field names you planned in Lesson 6. Use underscores rather than spaces in the header row, include an `id` field, and add sample data.
2. Write a master view route that reads the CSV file and passes all records to a Jinja template as a list.
3. Write the matching Jinja template to display each record as a clickable link to its detail page.
4. Write a detail view route that matches the URL parameter to the right row by its `id` field, and passes that record to a Jinja template.
5. Write the matching Jinja template to display all fields for the selected record.
6. Modify your Jinja templates to apply the layouts you designed in your mock-ups.

---
layout: center
---

# Project documentation

1. Open *Project Documentation*.
2. Capture screenshots of working master and detail pages displaying persistent data.
3. Paste the Python code (with comments) and supporting data files for the **Read** operations into the log.

---
layout: center
---

# Review: Success criteria

- I can explain why persistent data storage is necessary.
- I can create a CSV file that meets my application's requirements.
- I can build pages that read from a CSV file to display summary and detailed views.

---
layout: center
---

# Exit ticket

1. Describe two features your CSV file must include to work correctly in your web app.
2. What is the main difference between a master view and a detail view?

<v-click>

**Example answers:**

1. Each record must include a unique ID field. It must have a header row with field names.
2. The master view shows a list of all records, while the detail view shows one specific record selected by ID.

</v-click>
