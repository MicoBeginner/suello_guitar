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

      <GuitarTable
        guitars={guitars}
        selectedId={selectedId}
        onSelectGuitar={handleSelectGuitar}
      />

      <ActiveGuitar
        guitar={activeGuitar}
      />
    </main>
  );
}

export default App;