# Enhanced React Todo App — Date Filters & Priority

Implements:
- Date filters: Today, This Week, Overdue, Upcoming
- Priority management: High, Medium, Low with badges
- Search, clear completed
- LocalStorage persistence
- Clean, responsive UI (no external CSS frameworks required)

## Scripts
```bash
npm install
npm run dev
```
Open http://localhost:5173

## File Structure
```
src/
  components/
    FilterBar.jsx
    PriorityBadge.jsx
    TaskCard.jsx
  context/
    TaskContext.jsx
  pages/
    Home.jsx
  utils/
    dateUtils.js
  App.jsx
  main.jsx
  index.css
```

## Notes
- State is persisted in `localStorage` as `todo-state-v1`.
- Sorting: priority (High→Low) then due date ascending.
- Edit a task by clicking **Edit** on a card; form switches to "Update Task".
