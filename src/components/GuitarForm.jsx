import { useState } from "react";
import styles from "./GuitarForm.module.css";

function GuitarForm({ onAddGuitar }) {
  const [formData, setFormData] = useState({
    guitarModel: "",
    bodyType: "",
    brandName: "",
    stockQuantity: "",
    manufacturerName: "",
    userRole: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateField = (name, value) => {
    let error = "";

    if (name === "guitarModel") {
      if (value.trim() === "") {
        error = "Guitar model is required.";
      } else if (value.trim().length < 3) {
        error = "Guitar model must be at least 3 characters.";
      }
    } else if (name === "bodyType") {
      if (value === "") {
        error = "Please select a body type.";
      }
    } else if (name === "brandName") {
      if (value.trim() === "") {
        error = "Brand name is required.";
      }
    } else if (name === "stockQuantity") {
      if (value === "") {
        error = "Stock quantity is required.";
      } else if (Number(value) < 1 || Number(value) > 100) {
        error = "Stock quantity must be between 1 and 100.";
      }
    } else if (name === "manufacturerName") {
      if (value.trim() === "") {
        error = "Manufacturer name is required.";
      }
    } else if (name === "userRole") {
      if (value === "") {
        error = "Please select a user role.";
      }
    }

    return error;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {
      guitarModel: validateField(
        "guitarModel",
        formData.guitarModel
      ),
      bodyType: validateField(
        "bodyType",
        formData.bodyType
      ),
      brandName: validateField(
        "brandName",
        formData.brandName
      ),
      stockQuantity: validateField(
        "stockQuantity",
        formData.stockQuantity
      ),
      manufacturerName: validateField(
        "manufacturerName",
        formData.manufacturerName
      ),
      userRole: validateField(
        "userRole",
        formData.userRole
      ),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(
      (error) => error !== ""
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const newGuitar = {
        id: Date.now(),
        guitarModel: formData.guitarModel,
        bodyType: formData.bodyType,
        brandName: formData.brandName,
        stockQuantity: Number(formData.stockQuantity),
        manufacturerName: formData.manufacturerName,
        userRole: formData.userRole,
      };

      onAddGuitar(newGuitar);

      setSuccessMessage(
        "Guitar registered successfully."
      );

      setFormData({
        guitarModel: "",
        bodyType: "",
        brandName: "",
        stockQuantity: "",
        manufacturerName: "",
        userRole: "",
      });

      setErrors({});
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <span>SET B</span>
        <h2>Register Guitar</h2>
        <p>Enter the guitar information below.</p>
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className={styles.field}>
          <label htmlFor="guitarModel">
            Guitar Model
          </label>

          <input
            id="guitarModel"
            name="guitarModel"
            type="text"
            placeholder="Example: Stratocaster"
            value={formData.guitarModel}
            onChange={handleChange}
          />

          {errors.guitarModel && (
            <p className={styles.error}>
              {errors.guitarModel}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="bodyType">
            Body Type
          </label>

          <select
            id="bodyType"
            name="bodyType"
            value={formData.bodyType}
            onChange={handleChange}
          >
            <option value="">
              Select body type
            </option>
            <option value="Electric">
              Electric
            </option>
            <option value="Acoustic">
              Acoustic
            </option>
            <option value="Bass">
              Bass
            </option>
            <option value="Classical">
              Classical
            </option>
          </select>

          {errors.bodyType && (
            <p className={styles.error}>
              {errors.bodyType}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="brandName">
            Brand Name
          </label>

          <input
            id="brandName"
            name="brandName"
            type="text"
            placeholder="Example: Fender"
            value={formData.brandName}
            onChange={handleChange}
          />

          {errors.brandName && (
            <p className={styles.error}>
              {errors.brandName}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="stockQuantity">
            Stock Quantity
          </label>

          <input
            id="stockQuantity"
            name="stockQuantity"
            type="number"
            min="1"
            max="100"
            placeholder="1 - 100"
            value={formData.stockQuantity}
            onChange={handleChange}
          />

          {errors.stockQuantity && (
            <p className={styles.error}>
              {errors.stockQuantity}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="manufacturerName">
            Manufacturer Name
          </label>

          <input
            id="manufacturerName"
            name="manufacturerName"
            type="text"
            placeholder="Example: Fender Musical Instruments"
            value={formData.manufacturerName}
            onChange={handleChange}
          />

          {errors.manufacturerName && (
            <p className={styles.error}>
              {errors.manufacturerName}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label>User Role</label>

          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="userRole"
                value="Merchant"
                checked={
                  formData.userRole === "Merchant"
                }
                onChange={handleChange}
              />
              Merchant
            </label>

            <label>
              <input
                type="radio"
                name="userRole"
                value="Consumer"
                checked={
                  formData.userRole === "Consumer"
                }
                onChange={handleChange}
              />
              Consumer
            </label>
          </div>

          {errors.userRole && (
            <p className={styles.error}>
              {errors.userRole}
            </p>
          )}
        </div>

        <button
          type="submit"
          className={styles.button}
        >
          Register Guitar
        </button>

        {successMessage && (
          <div className={styles.success}>
            {successMessage}
          </div>
        )}
      </form>
    </section>
  );
}

export default GuitarForm;