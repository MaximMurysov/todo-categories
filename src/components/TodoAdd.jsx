import styles from "./styles.module.css";
import { useState } from "react";
function TodoAdd({ setTodos, activeCategory, todos }) {
  const [form, setForm] = useState("");

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

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  return (
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
  );
}
export default TodoAdd;
