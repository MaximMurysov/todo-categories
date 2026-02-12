import styles from "./styles.module.css";

function TodoCategory({ activeCategory, handleCategoryClick }) {
  const category = ["job", "home", "hobby"];

  return (
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
  );
}
export default TodoCategory;
