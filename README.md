<div align="center">

# Digital Persona Finder 

A modern interactive web application that combines a dynamic **digital personality assessment system** with a **professional Linktree-style profile interface**.

Developed using **HTML, CSS, and JavaScript** with responsive layout, smooth animations, and PDF export functionality.

</div>

---

## Overview

Digital Persona Finder PRO is a web-based interactive application that allows users to discover their digital persona based on three primary inputs:

- **Name**
- **Hobby**
- **Lucky Number (1–10)**

The system dynamically analyzes the combination of the selected hobby and numerical input to generate a unique persona description.

Additionally, the application includes:

- professional profile card
- custom hobby input
- animated result output
- Arcana card system
- PDF export report

---

## Core Features

### 1. Dynamic Persona Finder
Users can input personal data through an interactive form.

```html
<input id="name" type="text" placeholder="Name">
<select id="hobbySelect">
<input id="number" type="number" min="1" max="10">
```

The result is generated dynamically using JavaScript logic.

Example output:

```text
Name: MUHAMMAD NATHAN ALGIBRAN
Persona: The Tech Innovator
Description: A highly analytical individual with exceptional problem-solving abilities...
```

---

### 2. Conditional Persona Logic
The application uses nested conditional statements to determine persona categories.

```javascript
if(hobby.includes("coding")){
    if(num >= 7){
        persona = "The Tech Innovator";
    }else if(num >= 4){
        persona = "The Logical Thinker";
    }else{
        persona = "The Curious Coder";
    }
}
```

The logic is implemented for multiple hobby categories:

- Coding
- Design
- Music
- Gaming
- Reading
- Studying
- Drawing

---

### 3. Professional Profile Card
The interface also includes a modern Linktree-style profile section.

Features:

- profile image
- full-width link buttons
- GitHub
- Portfolio
- LinkedIn
- Contact

Example:

```html
<a href="https://github.com/" class="link-btn">
    <span>GitHub</span>
</a>
```

---

### 4. PDF Export System
The generated result can be exported as a professionally styled PDF report.

The report includes:

- user data
- persona analysis
- Arcana assignment
- tarot card image
- modern report layout

Implementation:

```javascript
html2pdf().set(opt).from(pdfContent).save();
```

---

### 5. Arcana Card Integration
The application includes random Arcana card generation inspired by tarot-based personality themes.

Example data structure:

```javascript
const arcanas = [
  {
    name: "The Fool",
    desc: "Represents new beginnings"
  }
];
```

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling & Layout |
| JavaScript | Logic & Interactivity |
| html2pdf.js | PDF Export |

---

## Project Structure

```text
Digital-Persona-Finder/
│
├── index.html
├── style.css
├── script.js
│
├── icons/
│   ├── github.png
│   ├── portfolio.png
│   ├── linkedin.png
│   └── whatsapp.png
│
├── tarot/
│   ├── fool.jpg
│   ├── magician.jpg
│   ├── emperor.jpg
│   ├── moon.jpg
│   └── justice.jpg
│
└── README.md
```

---

## Responsive Design
This project is fully responsive and optimized for desktop and mobile devices.

```css
@media(max-width:768px){
    .container{
        grid-template-columns:1fr;
    }
}
```

---

## Code Explanation

### HTML
Used to build the main structure of the application:

- form input
- result display
- profile section

---

### CSS
Used for:

- modern UI layout
- glassmorphism effect
- button design
- responsive behavior
- animations

---

### JavaScript
Handles:

- input validation
- persona generation logic
- typing animation
- custom hobby toggle
- PDF export
- Arcana randomization

---

## Author

**Muhammad Nathan Algibran**  
Informatics Student  
Faculty of Engineering  
University of Bengkulu  

GitHub:  
`https://github.com/Nathan-Algibran`

---

## Academic Purpose
This project was developed as part of an academic assignment in web development and interactive interface design.

---

## Attachment

<img width="1912" height="967" alt="Screenshot 2026-04-14 214956" src="https://github.com/user-attachments/assets/2ffd8242-dae7-4d49-a4d5-14caec57ba0e" />
<img width="1891" height="967" alt="Screenshot 2026-04-14 215136" src="https://github.com/user-attachments/assets/2ef7a99d-feda-4917-9c99-8b3a4dec1463" />
<img width="1901" height="965" alt="Screenshot 2026-04-14 215056" src="https://github.com/user-attachments/assets/01db568a-87a2-48cf-8049-3d264b1e45e9" />
<img width="1911" height="965" alt="Screenshot 2026-04-14 215030" src="https://github.com/user-attachments/assets/c9e7fdd0-cbed-4497-b7c9-7ea7cc2f7b3f" />
<img width="1911" height="965" alt="Screenshot 2026-04-14 215010" src="https://github.com/user-attachments/assets/0d8005a9-5d52-472d-b8db-8c23ed6402f0" />

