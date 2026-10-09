---
layout: cover
hideInToc: false
---

# Designing an Emerging Solution

## Design tools and techniques - Functional Design

---
layout: center
---

# Consolidating our idea: Functional Requirements

Now that we have:

- Identified a problem in a context
- Proposed a solution to the problem
- Conducted a feasibility analysis of the solution

we need to make sure we have a documented and clear understanding of exactly what our solution is going to do. This is called the **functional requirements** of the solution.

---
layout: center
---

# Functional Requirements

A functional requirement is a specific behaviour or function that a solution must have in order to meet the needs of the user and solve the problem.

Functional requirements should be clear, measurable, and testable.

They describe what the solution should do, rather than how it should do it.

| Example | Non-Example |
| --- | --- |
| The solution will analyse student data to identify strengths and weaknesses. | The solution will be easy to use. |
| The solution will construct a "digital twin" of the student to provide detailed data to the AI model. | The solution will give students ideas for their future career. |
| The AI model will predict a number of suitable career pathways for the student based on their data. | The solution will be innovative and unique. |
| 

---
layout: center
---

# Design

Designing digital solutions focuses on answering two core questions:

- How will the solution work? **Functional design**
- How will the solution look? **Visual design**

The design tools used to convey this information depends on the solution being developed. You will need to choose at least one design tools for each of the two questions.

**Today we will focus on functional design tools.**

---
layout: center
---

# Functional Design Tools - Flowcharts

Flowcharts show the flow of information, decision points and sequence of steps in a process. It is a simple and effective way to communicate how a solution will work.

```mermaid

flowchart LR
    A([Start]) --> B{Is it working?}
    B -- Yes --> C[Continue]
    B -- No --> D[Fix it]
    D --> B
    C --> E([End])

```

>[!NOTE]
> **Key conventions for flowcharts** - *Rectangles* for processes, *diamonds* for decisions, *rounded rectangles* for start/end points

---
layout: two-cols-header
zoom: 0.9
---

# Functional Design Tools - Use Case Diagrams

::left::

A Use Case Diagram (UCD) is a visual representation of the interactions between users (actors) and a system. It helps to identify the functional requirements of a solution by illustrating how users will interact with it.

They provide a high level overview of the system's functionality, with thought about who will use it.

>[!NOTE]
> **Key conventions for Use Case Diagrams**
>
> - *Actors* are represented by stick figures
> - *Use cases* are represented by ovals
> - *Relationships* are represented by lines connecting actors to use cases.

::right::

```mermaid

usecase-beta
direction LR
actor Customer("Customer")
actor Delivery("Delivery Worker")

systemBoundary "Order system"
  Checkout("Place order")
  Payment("Make payment")
  ConfirmDelivery("Confirm delivery")

end
Customer --- Checkout
Customer --- Payment
ConfirmDelivery --- Delivery

```

---
layout: two-cols-header
zoom: 1.4
---

# Functional Design Tools - Pseudocode

::left::

Pseudocode is a way to describe the steps of an algorithm or process using a structured, human-readable format. It is like code, but without the strict rules of a programming language. 

::right::

```
If user is logged in then
    Display welcome message
Else
    Prompt user to log in
End If
```

---
layout: center
---

# Applying a Functional Design Tool to your Solution

1. Identify the **functional requirements** of your solution. What does it need to do? What are the key processes and decision points? 
2. Check your existing information sources. Identify whether you need more information before deciding on your design. 
2. Choose the **functional design tool** that best suits your solution and the information you want to convey
  
  - flowchart
  - use case diagram
  - pseudocode

4. Use your tool to create a functional design for your solution. Make sure to include all relevant processes, decision points, and/or interactions with users or other systems.

---
layout: center
hideInToc: false
---

# Visual Design Tools

The second core question in designing a solution is: How will the solution look? 

Visual design tools help to communicate the look and feel of a solution, including its layout, colour scheme, typography, and other visual elements.

Two common visual design tools are:

- Wireframes
- Mockups

---
layout: center
---

# Visual Design Tools - Wireframes

A wireframe is a low-detail visual representation of a user interface. It is used to communicate the **layout and structure** of a solution, without focusing on the specific visual design elements.

Wireframes are often used in the early stages of design to quickly explore different layout options and gather feedback from stakeholders.

Common tools for creating wireframes include:

- Figma
- Google Drawings
- Microsoft PowerPoint
- Paint

---
layout: center
---

# Visual Design Tools - Wireframe Example

<img src="/wireframe.png" alt="Wireframe Example" style="max-width: 70%; height: auto; float:right; margin-left: 20px;">

- Clear labels
- Shows the layout and structure of the solution
- No specific visual design elements (e.g. colours, fonts, images)

---
layout: center
---

# Visual Design Tools - Mockups

A mockup is a more detailed visual representation of the proposed user interface. It adds colours, fonts, images, branding and other visual design elements to the wireframe, providing a more realistic preview of the final solution.

<img src="/mockup.png" alt="Mockup Example" style="max-width: 70%; height: auto;  margin-left: 20px;">

---
layout: center
---

# Visual Design Tools - Annotated Diagrams

For representing physical solutions, annotated diagrams are a useful visual design tool. They provide a clear and detailed representation of the physical solution, including its key features and how they will look visually.


---
layout: two-cols-header
zoom: 0.9
---

# Applying a Visual Design Tool to your Solution

You can choose to either create the visual design of a user interface, or of a physical solution. You do not need to do both.

::left:: 

## Wireframes and mockups 

- **Identify** a part of your solution that will have some kind of user interface (e.g. a website, app, or dashboard)
- **Create two simple wireframes** for the user interface, showing different layout options
- Choose one wireframe (that you think works best) and **create a mockup** of the user interface, adding colours, fonts, images, branding and other visual design elements.

> Your wireframes can be hand-drawn (then photographed) or created using a digital tool.
>
> Your mockup can be created using a digital tool, such as PowerPoint, Google Drawings or Canva.

::right::

# Annotated Diagrams

- **Identify** a part of your solution where the physical design is important (e.g. a physical device, a piece of equipment, or a product)
- **Create** two or more sketches to represent ideas for the visual look of your physical solution. 
- **Draw** a detailed, annotated diagram of your chosen design, showing key features and how they will look visually. 