import {
  useEffect,
  useState,
} from "react";

import GuitarForm from "./components/GuitarForm";
import GuitarTable from "./components/GuitarTable";
import ActiveGuitar from "./components/ActiveGuitar";

import styles from "./App.module.css";

function App() {
  const [guitars, setGuitars] = useState([]);

  const [selectedGuitar, setSelectedGuitar] =
    useState(null);

  const [activeGuitar, setActiveGuitar] =
    useState(null);

  const [roleFilter, setRoleFilter] =
    useState("All");

  const handleAddGuitar = (guitar) => {
    const guitarWithId = {
      id: guitars.length + 1,
      guitarModel: guitar.guitarModel,
      bodyType: guitar.bodyType,
      brandName: guitar.brandName,
      stockQuantity: guitar.stockQuantity,
      manufacturerName: guitar.manufacturerName,
      userRole: guitar.userRole,
    };

    const updatedGuitars = [];

    for (
      let index = 0;
      index < guitars.length;
      index++
    ) {
      updatedGuitars.push(guitars[index]);
    }

    updatedGuitars.push(guitarWithId);

    setGuitars(updatedGuitars);
  };

  const handleSelectGuitar = (guitar) => {
    setSelectedGuitar(guitar);
  };

  useEffect(() => {
    setActiveGuitar(selectedGuitar);
  }, [selectedGuitar]);

  const filteredGuitars = [];

  if (roleFilter === "All") {
    for (
      let index = 0;
      index < guitars.length;
      index++
    ) {
      filteredGuitars.push(guitars[index]);
    }
  } else {
    for (
      let index = 0;
      index < guitars.length;
      index++
    ) {
      if (
        guitars[index].userRole ===
        roleFilter
      ) {
        filteredGuitars.push(
          guitars[index]
        );
      }
    }
  }

  const getFilterButtonClass = (
    buttonName
  ) => {
    if (roleFilter === buttonName) {
      return styles.activeFilter;
    }

    return styles.filterButton;
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

      <section
        className={styles.filterCard}
      >
        <div>
          <span
            className={
              styles.filterLabel
            }
          >
            INVENTORY FILTER
          </span>

          <h2>Filter by User Role</h2>

          <p>
            Choose which guitar records
            should appear in the registry.
          </p>
        </div>

        <div
          className={
            styles.filterButtons
          }
        >
          <button
            type="button"
            className={getFilterButtonClass(
              "All"
            )}
            onClick={() =>
              setRoleFilter("All")
            }
          >
            All
          </button>

          <button
            type="button"
            className={getFilterButtonClass(
              "Merchant"
            )}
            onClick={() =>
              setRoleFilter("Merchant")
            }
          >
            Merchant
          </button>

          <button
            type="button"
            className={getFilterButtonClass(
              "Consumer"
            )}
            onClick={() =>
              setRoleFilter("Consumer")
            }
          >
            Consumer
          </button>
        </div>
      </section>

      <div
        className={
          styles.resultSummary
        }
      >
        Showing{" "}
        <strong>
          {filteredGuitars.length}
        </strong>{" "}
        of{" "}
        <strong>
          {guitars.length}
        </strong>{" "}
        guitar record(s)
      </div>

      <GuitarTable
        guitars={filteredGuitars}
        selectedGuitar={
          selectedGuitar
        }
        onSelectGuitar={
          handleSelectGuitar
        }
      />

      <ActiveGuitar
        guitar={activeGuitar}
      />

      <footer
        className={styles.footer}
      >
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