import { useState } from "react";
import styles from "./styles.module.css";
import { TiDelete } from "react-icons/ti";
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

  const toggleTodo = (id) => {
    setTodos({
      ...todos,
      [activeCategory]: todos[activeCategory].map((elem) =>
        elem.id === id ? { ...elem, completed: !elem.completed } : elem,
      ),
    });
  };
  const deleteTodo = (id) => {
    setTodos({
      ...todos,
      [activeCategory]: todos[activeCategory].filter((elem) => elem.id !== id),
    });
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
            <div key={todo.id} className={styles.todoItems}>
              <div className={styles.todoItem}>
                <input
                  className={styles.inputCheckBox}
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />

                <p
                  className={`${styles.todoText} ${todo.completed ? styles.completedTodo : ""}`}
                >
                  {todo.text}
                </p>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className={styles.deleteBtn}
              >
                <TiDelete />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TodoApp;
