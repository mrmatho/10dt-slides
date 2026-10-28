---
layout: center
hideInToc: false
---

# Create, Read, Update, Delete Web Apps

## Python web apps: Lesson 6

<div class="attribution">

Adapted from *Create, read, update, delete web applications* © State of Victoria (Department of Education) 2026, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The original resource was partially generated with the support of AI. Changes were made.

</div>

---
layout: center
---

# Retrieval practice

1. Which Python class is used to read rows from a CSV file as dictionaries?
2. What file mode adds a new row to the end of a file without deleting existing data?

<v-click>

**Answers:**

1. `csv.DictReader`
2. `'a'` (append mode)

</v-click>

---
layout: center
---

# Retrieval practice

Put these steps in the order they happen when a user submits a contact form.

- A. Save contact to CSV.
- B. Read submitted form data with `request.form.get()`.
- C. Server-side validation (Python).
- D. Client-side validation (HTML attributes).

<v-click>

**Answer:** D → B → C → A

Client-side validation happens in the **browser**, before the request reaches Flask. The other three steps happen in the Flask route.

</v-click>

---
layout: center
---

# Learning objective

We are learning about the create, read, update and delete (CRUD) web application framework.

---
layout: center
---

# Success criteria

- I can identify the four CRUD operations and explain how they are used in web applications.
- I can define functional and non-functional requirements for a web application project.

---
layout: center
---

# Vocabulary: Functional requirement

A statement describing **what** a system must do, or what functionality it must provide to its users.

**Example:** A functional requirement of this system is the ability to add a new contact by submitting a form with a name, email and phone number.

---
layout: center
---

# Vocabulary: Non-functional requirement

A statement describing **how well** a system must perform, covering qualities like speed, security and accessibility.

**Example:** A non-functional requirement of this system is the contact list loading in under three seconds on a standard school network.

---
layout: center
---

# Check for understanding

1. Complete each sentence using *functional* or *non-functional*.
   - A ______ requirement describes how well the system performs. <span v-click>**non-functional**</span>
   - A ______ requirement describes what the system must do. <span v-click>**functional**</span>
2. Is this functional or non-functional? *'The app must load in under two seconds.'*

<v-click>

**Non-functional** – it names a measurable performance standard, not a specific user action.

</v-click>

---
layout: center
---

# CRUD

**CRUD** is an acronym for the four operations that data-driven applications use to manage records.

- **Create** – add a new record
- **Read** – retrieve and display records
- **Update** – change an existing record
- **Delete** – remove a record

---
layout: center
---

# The CRUD framework

| Operation  | What it does              | Address book example          |
| ---------- | ------------------------- | ----------------------------- |
| **Create** | Add a new record          | Submit the contact form       |
| **Read**   | Retrieve and display      | Show all contacts on the page |
| **Update** | Change an existing record | Edit a contact's details      |
| **Delete** | Remove a record           | Remove a contact              |

---
layout: center
---

# CRUD examples

| App         | Create       | Read             | Update             | Delete          |
| ----------- | ------------ | ---------------- | ------------------ | --------------- |
| To-do list  | Add a task   | View tasks       | Mark complete      | Delete a task   |
| Blog        | Write a post | Read posts       | Edit a post        | Delete a post   |
| Recipe app  | Add a recipe | Browse recipes   | Modify ingredients | Remove a recipe |
| Game scores | Submit score | View leaderboard | Update username    | Remove user     |

---
layout: center
---

# CRUD and HTTP methods

HTML forms can only send **GET** or **POST** requests, so in our Flask apps each CRUD operation uses one of these.

| CRUD   | HTTP method | Flask route example                          |
| ------ | ----------- | -------------------------------------------- |
| Create | POST        | `@app.route('/', methods=['POST'])`          |
| Read   | GET         | `@app.route('/', methods=['GET'])`           |
| Update | POST        | `@app.route('/edit/<id>', methods=['POST'])` |
| Delete | POST        | `@app.route('/delete/<id>', methods=['POST'])` |

<span class="text-sm opacity-75">HTTP also has PUT, PATCH and DELETE methods for updating and deleting, but HTML forms can't send them.</span>

---
layout: center
---

# CRUD routes – address book

The complete address book uses five routes. Update uses two: one to show the edit form and one to save it.

| Route          | HTTP method | CRUD   | Description                           |
| -------------- | ----------- | ------ | ------------------------------------- |
| `/`            | GET         | Read   | Load all contacts from CSV and display |
| `/`            | POST        | Create | Validate and save a new contact       |
| `/edit/<id>`   | GET         | Update | Load the edit form for one contact    |
| `/edit/<id>`   | POST        | Update | Save the updated contact to CSV       |
| `/delete/<id>` | POST        | Delete | Remove the contact from CSV           |

---
layout: center
---

# Check for understanding

Which option would be used for the **Read** operation?

- A. `@app.route("/", methods=["POST"])`
- B. `@app.route("/", methods=["GET"])` <span v-click>✅</span>
- C. `@app.route("/read")`

---
layout: center
---

# Functional requirements

A **functional requirement (FR)** describes one specific action a user must be able to perform.

Rules for a good FR:

- ✅ Written from the user's perspective: *'A user must be able to…'*
- ✅ **Testable:** you can demonstrate whether it works or not.
- ✅ **One action per requirement:** no double-ups.
- ❌ *'The app should be easy to use.'* This cannot be tested.

---
layout: center
---

# Valid or invalid?

Which of these are valid functional requirements?

1. 'The app must be fast.' <span v-click>❌ Invalid – not testable, no measurable standard.</span>
2. 'A user must be able to delete a contact by clicking a Delete button.' <span v-click>✅ Valid</span>
3. 'A user must be able to add a contact with a name, email and phone number.' <span v-click>✅ Valid</span>
4. 'The system should store data nicely.' <span v-click>❌ Invalid – vague and untestable.</span>

---
layout: center
---

# Non-functional requirements

A **non-functional requirement (NFR)** describes how well the system performs, with a **measurable standard**.

| Category      | ❌ Untestable                 | ✅ Testable                                                   |
| ------------- | ---------------------------- | ------------------------------------------------------------ |
| Performance   | 'The app must be fast.'       | 'The contact list must load in under 3 seconds.'             |
| Security      | 'The app must be secure.'     | 'All form inputs must be validated server-side before saving.' |
| Accessibility | 'The app must be accessible.' | 'All form fields must have visible labels for screen readers.' |

---
layout: center
---

# Check for understanding

What specific, measurable standard would make this NFR testable?

> 'The app must be secure.'

<v-click>

**Example testable version:** 'All form inputs must be validated on the server before any data is saved to the CSV file.'

This names a specific action that can be demonstrated or tested.

</v-click>

---
layout: center
---

# Guided practice: Identify the CRUD operations

Kiara is creating a web app to store book reviews. Complete her route table with the CRUD operation and what it should do.

| Route          | Method | CRUD operation                                                     |
| -------------- | ------ | ------------------------------------------------------------------ |
| `/`            | GET    | <span v-click>**Read** – load all reviews and display them</span>   |
| `/`            | POST   | <span v-click>**Create** – validate and save a new review</span>    |
| `/edit/<id>`   | POST   | <span v-click>**Update** – validate and save the edited review to CSV</span> |
| `/delete/<id>` | POST   | <span v-click>**Delete** – remove the review from CSV</span>        |

---
layout: center
---

# Guided practice: Functional or non-functional?

| Requirement                                                       | F or NF?                        |
| ----------------------------------------------------------------- | ------------------------------- |
| 1. A user must be able to add a new book review.                   | <span v-click>**F**</span>       |
| 2. The review form must load in under two seconds.                 | <span v-click>**NF**</span>      |
| 3. A user must be able to delete their own review.                 | <span v-click>**F**</span>       |
| 4. All form inputs must be validated on the server before saving.  | <span v-click>**NF**</span>      |
| 5. A user must be able to edit a review they previously submitted. | <span v-click>**F**</span>       |

---
layout: center
---

# Summary

- **CRUD** – Create, Read, Update, Delete – describes the four operations data-driven web applications use.
- A **functional requirement** describes what the system must do, written as a testable user action.
- A **non-functional requirement** describes how well the system performs, with a measurable standard.
- Requirements that cannot be tested must be revised before they can guide development.

---
layout: center
---

# Review: Success criteria

- I can identify the four CRUD operations and explain how they are used in web applications.
- I can define functional and non-functional requirements for a web application project.

---
layout: center
---

# Exit ticket

1. Name all four CRUD operations. Give one example of each from a sports results app.
2. Write one functional requirement for your own project.
3. Write one non-functional requirement for your own project.
4. How would you test whether your NFR is met?

<v-click>

<div class="text-sm">

**Answers:**

1. Create (add a result), Read (view game results), Update (fix an incorrect score), Delete (remove old games).
2. Must begin *'A user must be able to…'* and describe one specific, demonstrable action.
3. Must name a measurable standard, e.g. a time limit, a validation rule or an accessibility criterion.
4. Run the app, perform the action, and measure the result against the standard.

</div>

</v-click>
