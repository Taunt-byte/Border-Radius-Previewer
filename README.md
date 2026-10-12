# 🎨 Border Radius Previewer

<p align="center">
  A simple and interactive web application to preview CSS3 border-radius values in real time.
</p>

---

## 📌 About the Project

The **Border Radius Previewer** is a web application that allows users to customize the corner radius of an element and instantly visualize the results.

Users can adjust each corner individually, experiment with predefined shapes, and generate CSS code ready to use in their own projects.

This project was created to practice front-end development, DOM manipulation, event handling, and dynamic CSS styling.

## ✨ Features

- [x] Real-time border-radius preview.
- [x] Individual controls for all four corners.
- [x] Range sliders for adjusting values.
- [x] Numeric inputs for precise adjustments.
- [x] Predefined border-radius presets.
- [x] Automatic CSS code generation.
- [x] Copy CSS code to the clipboard.
- [x] Reset button to restore default values.
- [x] Responsive layout for different screen sizes.
- [x] Dark-themed user interface.
- [x] Example shapes with different border-radius values.

## 🛠️ Technologies Used

- **HTML5** — Application structure and interface elements.
- **CSS3** — Styling, responsive layout, gradients, and border-radius properties.
- **JavaScript** — DOM manipulation, event handling, and dynamic CSS generation.
- **Git and GitHub** — Version control and source code hosting.

## 📂 Project Structure

```text
border-radius-previewer/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser and a code editor, such as Visual Studio Code.

No external libraries or package installations are required.

### 1. Clone the repository

```bash
git clone https://github.com/Taunt-byte/Border-Radius-Previewer.git
```

Replace `YOUR-USERNAME` with your GitHub username.

### 2. Navigate to the project folder

```bash
cd border-radius-previewer
```

### 3. Run the application

Open `index.html` directly in your browser or use the **Live Server** extension in Visual Studio Code.

The application will be ready to use.

## 🎯 How to Use

1. Open the application in your browser.
2. Adjust the sliders or enter numeric values for each corner.
3. Observe the preview update in real time.
4. Select a preset to apply the same radius to all four corners.
5. Click **Copy CSS** to copy the generated code.
6. Paste the CSS into your own project.

## 💡 Understanding CSS Border Radius

The CSS `border-radius` property defines how rounded the corners of an element are.

Each corner can be customized independently using the following properties:

| CSS Property | Description |
|---|---|
| `border-top-left-radius` | Top-left corner |
| `border-top-right-radius` | Top-right corner |
| `border-bottom-right-radius` | Bottom-right corner |
| `border-bottom-left-radius` | Bottom-left corner |

### Example

```css
.card {
    border-top-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 50px;
}
```

This example creates an element with four different corner radii.

You can also apply the same radius to every corner:

```css
.card {
    border-radius: 16px;
}
```

## 📸 Screenshots

![Border Radius Previewer](/Screenshot/previewer.png)

## 📚 Learning Objectives

This project helps develop practical skills in:

- HTML page structure and semantic elements.
- CSS styling and responsive design.
- The CSS `border-radius` property.
- JavaScript fundamentals.
- DOM selection and manipulation.
- Event listeners and callback functions.
- Input validation and numeric values.
- Dynamic CSS property updates.
- Clipboard API usage.
- Organizing and documenting software projects.

## 🔮 Future Improvements

Potential features for future versions include:

- Support for percentage-based border-radius values.
- Exporting the preview as an image.
- Customizable preview colors and gradients.
- Additional shape presets.
- Dark and light theme switching.
- More advanced CSS border-radius syntax.
- Automated tests for input validation and CSS generation.

## 👨‍💻 Author

**Lucas Neves**

Developed as a learning project to practice front-end development and build a software development portfolio.

## 📄 License

This project can be distributed under the MIT License. To use this license, add a `LICENSE` file containing the official MIT License text.

---

⭐ If you find this project useful, consider giving the repository a star!
