import {
  useEffect,
  useState,
} from "react";

import GuitarForm from "./components/GuitarForm";
import GuitarTable from "./components/GuitarTable";
import ActiveGuitar from "./components/ActiveGuitar";

import styles from "./App.module.css";

function App() {
  const [guitars, setGuitars] =
    useState([]);

  const [selectedId, setSelectedId] =
    useState(null);

  const [activeGuitar, setActiveGuitar] =
    useState(null);

  const [roleFilter, setRoleFilter] =
    useState("All");

  const handleAddGuitar = (newGuitar) => {
    setGuitars((currentGuitars) => [
      ...currentGuitars,
      newGuitar,
    ]);
  };

  const handleSelectGuitar = (guitarId) => {
    setSelectedId(guitarId);
  };

  useEffect(() => {
    if (selectedId === null) {
      setActiveGuitar(null);
      return;
    }

    const selectedGuitar = guitars.find(
      (guitar) => guitar.id === selectedId
    );

    if (selectedGuitar) {
      setActiveGuitar(selectedGuitar);
    } else {
      setActiveGuitar(null);
    }
  }, [selectedId, guitars]);

  const filteredGuitars =
    roleFilter === "All"
      ? guitars
      : guitars.filter(
          (guitar) =>
            guitar.userRole === roleFilter
        );

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <span>
            REACT MIDTERM PRACTICAL
          </span>

          <h1>
            Guitar Store Inventory Manager
          </h1>

          <p>
            Manage guitar information,
            inventory, and store records.
          </p>
        </div>

        <div className={styles.badge}>
          SET B
        </div>
      </section>

      <GuitarForm
        onAddGuitar={handleAddGuitar}
      />

      <section className={styles.filterCard}>
        <div>
          <span className={styles.filterLabel}>
            INVENTORY FILTER
          </span>

          <h2>Filter by User Role</h2>

          <p>
            Choose which guitar records
            should appear in the registry.
          </p>
        </div>

        <div className={styles.filterButtons}>
          <button
            type="button"
            className={
              roleFilter === "All"
                ? styles.activeFilter
                : styles.filterButton
            }
            onClick={() =>
              setRoleFilter("All")
            }
          >
            All
          </button>

          <button
            type="button"
            className={
              roleFilter === "Merchant"
                ? styles.activeFilter
                : styles.filterButton
            }
            onClick={() =>
              setRoleFilter("Merchant")
            }
          >
            Merchant
          </button>

          <button
            type="button"
            className={
              roleFilter === "Consumer"
                ? styles.activeFilter
                : styles.filterButton
            }
            onClick={() =>
              setRoleFilter("Consumer")
            }
          >
            Consumer
          </button>
        </div>
      </section>

      <div className={styles.resultSummary}>
        Showing{" "}
        <strong>
          {filteredGuitars.length}
        </strong>{" "}
        of{" "}
        <strong>{guitars.length}</strong>{" "}
        guitar record
        {guitars.length !== 1 ? "s" : ""}
      </div>

      <GuitarTable
        guitars={filteredGuitars}
        selectedId={selectedId}
        onSelectGuitar={handleSelectGuitar}
      />

      <ActiveGuitar
        guitar={activeGuitar}
      />

      <footer className={styles.footer}>
        <strong>
          Guitar Store Inventory Manager
        </strong>

        <span>
          React Midterm Practical • SET B
        </span>
      </footer>
    </main>
  );
}

export default App;