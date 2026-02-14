import styles from "./styles.module.css";
import { useState } from "react";

function TodoAdd({ setTodos, activeCategory, todos }) {
  const [form, setForm] = useState("");
  const [showInput, setShowValue] = useState(false);

  const [newCategory, setNewCategory] = useState("");

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
  };
  const addNewCategory = (newCategory) => {
    setTodos({ ...todos, [newCategory]: [] });
    setNewCategory("");
    setShowValue(false);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  return (
    <>
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
      <>
        <div className={styles.addNewCategory}>
          <button
            className={styles.addBtn}
            onClick={() => setShowValue(!showInput)}
          >
            {showInput ? "Cancel" : "Add"}
          </button>
        </div>
        {showInput ? (
          <div className={styles.newCategory}>
            <input
              className={styles.inputNewCategory}
              type="text"
              placeholder="Enter a new category..."
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button
              className={styles.addBtnCategory}
              onClick={() => addNewCategory(newCategory)}
            >
              Add new category
            </button>
          </div>
        ) : (
          ""
        )}
      </>
    </>
  );
}
export default TodoAdd;
