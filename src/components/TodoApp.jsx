import { useState } from "react";
import styles from "./styles.module.css";
import { TiDelete } from "react-icons/ti";
import TodoCategory from "./TodoCategory";
function TodoApp() {
  const [todos, setTodos] = useState({
    job: [],
    home: [],
    hobby: [],
  });

  const [form, setForm] = useState("");
  const [activeCategory, setActiveCategory] = useState("job");
  const addTodo = () => {
    if (form.trim() === "") return;
    const newForm = {
      id: crypto.randomUUID(),
      text: form,
      completed: false,
    };
    setTodos({
      ...todos,
      [activeCategory]: [...todos[activeCategory], newForm],
    });
    setForm("");
  };
  const handleCategoryClick = (elem) => {
    setActiveCategory(elem);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
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
        <div className={styles.todoAdd}>
          <input
            className={styles.input}
            type="text"
            value={form}
            onKeyDown={handleEnter}
            placeholder="Enter a new task..."
            onChange={(e) => setForm(e.target.value)}
          />
          <button className={styles.addBtn} onClick={addTodo}>
            Add
          </button>
        </div>
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
