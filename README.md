# 📋 React Todo App

This is a **React-based Todo Application** built as part of the **Software Developer Internship Assignment (AcademyMint)**.  
It allows users to manage their tasks with **date filters** and **priority levels**.

---

## 🚀 Features
- ➕ Add new tasks with **title, due date, and priority**  
- ✅ Mark tasks as **completed / undo completion**  
- ❌ Delete tasks  
- 📅 **Date filters**: View all tasks, today’s tasks, upcoming tasks, or completed tasks  
- 🔴🟡🟢 **Priority management** (High / Medium / Low) with color-coded badges  
- 🎨 Responsive and clean UI (works on mobile too)  

---

## 🛠️ Tech Stack
- **React (18+)**
- **Context API** for state management
- **Tailwind CSS** (for styling) *(or plain CSS if Tailwind not available)*
- **JavaScript (ES6+)**

---

## 📂 Project Structure
src/
├── components/
│ ├── TaskCard.jsx 
│ ├── FilterBar.jsx 
│ ├── PriorityBadge.jsx
├── pages/
│ └── Home.jsx
├── context/
│ └── TaskContext.jsx 
├── utils/
│ └── dateUtils.js 
├── App.jsx
├── index.js 


---

## ⚙️ Installation & Setup
1. Clone the repository:
   git clone https://github.com/Venky-43/Todo-App.git
   cd todo-app
   
## Install dependencies
npm install

## Start the development server
npm start

## 🎮 Usage
Enter a task title, due date, and priority.
Click Add Task to save it.
Use filter buttons (All, Today, Upcoming, Completed) to organize tasks.
Mark tasks as Done/Undo or Delete them.

## 📧 Submission
This project is created as part of the AcademyMint Internship Evaluation.
Author: Kothapalli Venkannababu
