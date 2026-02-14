import { useState } from "react";
import styles from "./styles.module.css";
import TodoItem from "./TodoItem";
import TodoCategory from "./TodoCategory";
import TodoAdd from "./TodoAdd";
function TodoApp() {
  const [todos, setTodos] = useState({
    job: [],
    home: [],
    hobby: [],
  });

  const [activeCategory, setActiveCategory] = useState("job");

  const handleCategoryClick = (elem) => {
    setActiveCategory(elem);
  };
  const deleteCategory = (catToDelete) => {
    if (Object.keys(todos).length <= 1) return;
    const newTodos = { ...todos };
    delete newTodos[catToDelete];
    setTodos(newTodos);
    if (catToDelete === activeCategory) {
      const remaining = Object.keys(newTodos);
      setActiveCategory(remaining[0]);
    }
  };
  return (
    <div className={styles.todo}>
      <div className={styles["todo-container"]}>
        <TodoCategory
          activeCategory={activeCategory}
          handleCategoryClick={handleCategoryClick}
          todos={todos}
          deleteCategory={deleteCategory}
        />
        <TodoAdd
          setTodos={setTodos}
          todos={todos}
          activeCategory={activeCategory}
        />
        <div className={styles["todo-items__section"]}>
          {todos[activeCategory].map((todo) => (
            <TodoItem
              key={todo.id}
              activeCategory={activeCategory}
              setTodos={setTodos}
              todo={todo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default TodoApp;
