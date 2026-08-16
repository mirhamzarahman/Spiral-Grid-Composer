# 🌀 Spiral Grid Composer

A lightweight JavaScript project that creates structured square grids using a clockwise spiral filling strategy.

Instead of simply generating numbers, this project demonstrates how controlled spatial traversal can be used to organize data inside two-dimensional layouts for dashboards, simulations, visual interfaces, educational tools, and procedural content generation.

---

# 📖 Project Overview

Spiral Grid Composer generates an **N × N** grid by placing values sequentially while moving in a clockwise spiral.

The project demonstrates how boundary management can efficiently traverse and populate a matrix without revisiting cells.

---

# 🌍 Real-World Concept

Imagine a warehouse management system that assigns storage slots.

Instead of filling shelves row by row, products are placed in a spiral pattern to optimize accessibility or create visually balanced layouts.

The same concept can also be applied to:

- Interactive dashboards
- Heatmap generation
- Seating arrangements
- Robot navigation maps
- Procedural game worlds
- Data visualization

---

# 💡 Core Concept

The system maintains four moving boundaries:

- Top
- Bottom
- Left
- Right

Each traversal fills one side of the remaining area before shrinking the corresponding boundary.

The process repeats until every position has been assigned.

---

# ⚙️ How the System Works

1. Create an empty square grid.
2. Initialize four boundaries.
3. Fill the top row.
4. Fill the right column.
5. Fill the bottom row.
6. Fill the left column.
7. Move boundaries inward.
8. Continue until the grid is completely filled.

---

# 🧠 Algorithm Used

## Boundary Traversal

The algorithm continuously shrinks the active region after each directional traversal.

This avoids:

- Duplicate visits
- Extra memory
- Complex coordinate tracking

---

# 🔄 Step-by-Step Logic

```text
Create Matrix
      │
      ▼
Initialize Boundaries
      │
      ▼
Fill Top Row
      │
      ▼
Fill Right Column
      │
      ▼
Fill Bottom Row
      │
      ▼
Fill Left Column
      │
      ▼
Shrink Boundaries
      │
      ▼
Repeat Until Complete
```

---

# ✨ Key Features

- 🌀 Clockwise spiral generation
- 📐 Dynamic matrix sizes
- ⚡ Efficient boundary updates
- 🧩 Clean modular implementation
- 📚 Easy to understand
- 🚀 Lightweight JavaScript project

---

# 📥 Example

Input

```text
Grid Size = 4
```

Output

```text
[
 [ 1,  2,  3,  4],
 [12, 13, 14,  5],
 [11, 16, 15,  6],
 [10,  9,  8,  7]
]
```

---

# ⏱ Complexity

| Operation | Complexity |
|-----------|------------|
| Time | O(n²) |
| Space | O(1) extra space (excluding the output matrix) |

---

# 🛠 Technologies Used

- JavaScript (ES6)
- Node.js

---

# 📁 Project Structure

```
Spiral-Grid-Composer/
│
├── README.md
├── LICENSE
└── src/
    └── spiralGridComposer.js
```

---

# 🚀 How to Run

Clone the repository

```bash
git clone https://github.com/mirhamzarahman/Spiral-Grid-Composer.git
```

Go into the project

```bash
cd Spiral-Grid-Composer
```

Run

```bash
node src/spiralGridComposer.js
```

---

# 🎯 Learning Outcomes

This project demonstrates:

- Matrix construction
- Boundary traversal
- Two-dimensional data organization
- Sequential spatial allocation
- Algorithm visualization
- Clean JavaScript architecture

---

# 🚀 Future Improvements

- 🎨 Spiral animations
- 📊 Web visualization
- 🌈 Custom starting positions
- ↩ Counter-clockwise mode
- 📐 Rectangular grid support
- 📦 Export as JSON
- 🌐 Interactive browser interface

---

# 📄 License

MIT License

Feel free to use, modify, and distribute this project.
