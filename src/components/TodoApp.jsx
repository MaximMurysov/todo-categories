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

  return (
    <div className={styles.todo}>
      <div className={styles["todo-container"]}>
        <TodoCategory
          activeCategory={activeCategory}
          handleCategoryClick={handleCategoryClick}
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
              todos={todos}
              todo={todo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default TodoApp;
