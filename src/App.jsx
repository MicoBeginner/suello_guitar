import GuitarForm from "./components/GuitarForm";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <span>REACT MIDTERM PRACTICAL</span>

          <h1>Guitar Store Inventory Manager</h1>

          <p>
            Manage guitar information and inventory records.
          </p>
        </div>

        <div className={styles.badge}>
          SET B
        </div>
      </section>

      <GuitarForm />
    </main>
  );
}

export default App;