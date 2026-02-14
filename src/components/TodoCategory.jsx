import styles from "./styles.module.css";
import { IoCloseSharp } from "react-icons/io5";
function TodoCategory({
  activeCategory,
  handleCategoryClick,
  todos,
  deleteCategory,
}) {
  return (
    <div className={styles.todos}>
      {Object.keys(todos).map((elem) => (
        <button
          onClick={() => handleCategoryClick(elem)}
          className={`${styles["todo-btn"]} ${activeCategory === elem ? styles.active : ""}`}
        >
          {elem}
          <IoCloseSharp
            className={styles.deleteCategory}
            onClick={(e) => {
              e.stopPropagation();
              deleteCategory(elem);
            }}
          />
        </button>
      ))}
    </div>
  );
}
export default TodoCategory;
