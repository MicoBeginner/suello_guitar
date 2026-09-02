import { useState } from "react";

import GuitarForm from "./components/GuitarForm";
import GuitarTable from "./components/GuitarTable";

import styles from "./App.module.css";

function App() {
  const [guitars, setGuitars] =
    useState([]);

  const [selectedGuitar, setSelectedGuitar] =
    useState(null);

  const handleAddGuitar = (newGuitar) => {
    setGuitars((currentGuitars) => [
      ...currentGuitars,
      newGuitar,
    ]);
  };

  const handleSelectGuitar = (guitar) => {
    setSelectedGuitar(guitar);
  };

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
        selectedGuitar={selectedGuitar}
        onSelectGuitar={
          handleSelectGuitar
        }
      />

      {selectedGuitar && (
        <section
          className={
            styles.selectedPreview
          }
        >
          <span>SELECTED GUITAR</span>

          <strong>
            {selectedGuitar.guitarModel}
          </strong>

          <p>
            {selectedGuitar.brandName} •{" "}
            {selectedGuitar.bodyType} •
            Stock:{" "}
            {
              selectedGuitar.stockQuantity
            }
          </p>
        </section>
      )}
    </main>
  );
}

export default App;