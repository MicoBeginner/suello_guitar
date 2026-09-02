import styles from "./ActiveGuitar.module.css";

function ActiveGuitar({ guitar }) {
  if (!guitar) {
    return (
      <section className={styles.emptyCard}>
        <span>ACTIVE ITEM PROFILE</span>

        <h2>No Guitar Selected</h2>

        <p>
          Click a guitar from the inventory table to view
          its complete information.
        </p>
      </section>
    );
  }

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div>
          <span>ACTIVE ITEM PROFILE</span>

          <h2>{guitar.guitarModel}</h2>

          <p>
            Complete information for the selected guitar.
          </p>
        </div>

        <div
          className={
            guitar.userRole === "Merchant"
              ? styles.merchantBadge
              : styles.consumerBadge
          }
        >
          {guitar.userRole}
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.detail}>
          <span>Guitar Model</span>
          <strong>{guitar.guitarModel}</strong>
        </div>

        <div className={styles.detail}>
          <span>Body Type</span>
          <strong>{guitar.bodyType}</strong>
        </div>

        <div className={styles.detail}>
          <span>Brand Name</span>
          <strong>{guitar.brandName}</strong>
        </div>

        <div className={styles.detail}>
          <span>Stock Quantity</span>
          <strong>
            {guitar.stockQuantity} unit
            {guitar.stockQuantity !== 1 ? "s" : ""}
          </strong>
        </div>

        <div className={styles.detail}>
          <span>Manufacturer Name</span>
          <strong>{guitar.manufacturerName}</strong>
        </div>

        <div className={styles.detail}>
          <span>User Role</span>
          <strong>{guitar.userRole}</strong>
        </div>
      </div>
    </section>
  );
}

export default ActiveGuitar;