import { useState } from "react";
import styles from "./styles.module.css";

function TodoApp() {
  const category = ["job", "home", "hobby"];

  const [activeCategory, setActiveCategory] = useState("job");
  const [todos, setTodos] = useState({
    job: [],
    home: [],
    hobby: [],
  });

  const [form, setForm] = useState("");

  const handleCategoryClick = (elem) => {
    setActiveCategory(elem);
  };
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
  const toggleTodo = (id) => {
    setTodos({
      ...todos,
      [activeCategory]: todos[activeCategory].map((elem) =>
        elem.id === id ? { ...elem, completed: !elem.completed } : elem,
      ),
    });
  };
  return (
    <div className={styles.todo}>
      <div className={styles["todo-container"]}>
        <div className={styles.todos}>
          {category.map((elem) => (
            <button
              key={elem}
              onClick={() => handleCategoryClick(elem)}
              className={`${styles["todo-btn"]} ${elem === activeCategory ? styles.active : ""}`}
            >
              {elem}
            </button>
          ))}
        </div>
        <div className={styles.todoItem}>
          <input
            className={styles.input}
            type="text"
            value={form}
            onChange={(e) => setForm(e.target.value)}
          />
          <button className={styles.addBtn} onClick={addTodo}>
            Add
          </button>
        </div>
        <>
          {todos[activeCategory].map((todo) => (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <p>{todo.text}</p>
              <button>"❌"</button>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
export default TodoApp;
