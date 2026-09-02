import { useState } from "react";
import styles from "./GuitarForm.module.css";

function GuitarForm({ onAddGuitar }) {
  const [guitarModel, setGuitarModel] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [brandName, setBrandName] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [manufacturerName, setManufacturerName] = useState("");
  const [userRole, setUserRole] = useState("");

  const [guitarModelError, setGuitarModelError] = useState("");
  const [bodyTypeError, setBodyTypeError] = useState("");
  const [brandNameError, setBrandNameError] = useState("");
  const [stockQuantityError, setStockQuantityError] = useState("");
  const [manufacturerError, setManufacturerError] = useState("");
  const [userRoleError, setUserRoleError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const validateGuitarModel = (value) => {
    if (value.trim() === "") {
      return "Guitar model is required.";
    }

    if (value.trim().length < 3) {
      return "Guitar model must be at least 3 characters.";
    }

    return "";
  };

  const validateBodyType = (value) => {
    if (value === "") {
      return "Please select a body type.";
    }

    return "";
  };

  const validateBrandName = (value) => {
    if (value.trim() === "") {
      return "Brand name is required.";
    }

    return "";
  };

  const validateStockQuantity = (value) => {
    if (value === "") {
      return "Stock quantity is required.";
    }

    if (Number(value) < 1 || Number(value) > 100) {
      return "Stock quantity must be between 1 and 100.";
    }

    return "";
  };

  const validateManufacturer = (value) => {
    if (value.trim() === "") {
      return "Manufacturer name is required.";
    }

    return "";
  };

  const validateUserRole = (value) => {
    if (value === "") {
      return "Please select a user role.";
    }

    return "";
  };

  const handleGuitarModelChange = (event) => {
    const value = event.target.value;

    setGuitarModel(value);
    setGuitarModelError(validateGuitarModel(value));
    setSuccessMessage("");
  };

  const handleBodyTypeChange = (event) => {
    const value = event.target.value;

    setBodyType(value);
    setBodyTypeError(validateBodyType(value));
    setSuccessMessage("");
  };

  const handleBrandNameChange = (event) => {
    const value = event.target.value;

    setBrandName(value);
    setBrandNameError(validateBrandName(value));
    setSuccessMessage("");
  };

  const handleStockQuantityChange = (event) => {
    const value = event.target.value;

    setStockQuantity(value);
    setStockQuantityError(validateStockQuantity(value));
    setSuccessMessage("");
  };

  const handleManufacturerChange = (event) => {
    const value = event.target.value;

    setManufacturerName(value);
    setManufacturerError(validateManufacturer(value));
    setSuccessMessage("");
  };

  const handleUserRoleChange = (event) => {
    const value = event.target.value;

    setUserRole(value);
    setUserRoleError(validateUserRole(value));
    setSuccessMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const modelError = validateGuitarModel(guitarModel);
    const typeError = validateBodyType(bodyType);
    const brandError = validateBrandName(brandName);
    const stockError = validateStockQuantity(stockQuantity);
    const manufacturerNameError =
      validateManufacturer(manufacturerName);
    const roleError = validateUserRole(userRole);

    setGuitarModelError(modelError);
    setBodyTypeError(typeError);
    setBrandNameError(brandError);
    setStockQuantityError(stockError);
    setManufacturerError(manufacturerNameError);
    setUserRoleError(roleError);

    if (
      modelError !== "" ||
      typeError !== "" ||
      brandError !== "" ||
      stockError !== "" ||
      manufacturerNameError !== "" ||
      roleError !== ""
    ) {
      setSuccessMessage("");
      return;
    }

    const newGuitar = {
      guitarModel: guitarModel,
      bodyType: bodyType,
      brandName: brandName,
      stockQuantity: Number(stockQuantity),
      manufacturerName: manufacturerName,
      userRole: userRole,
    };

    onAddGuitar(newGuitar);

    setSuccessMessage("Guitar registered successfully.");

    setGuitarModel("");
    setBodyType("");
    setBrandName("");
    setStockQuantity("");
    setManufacturerName("");
    setUserRole("");

    setGuitarModelError("");
    setBodyTypeError("");
    setBrandNameError("");
    setStockQuantityError("");
    setManufacturerError("");
    setUserRoleError("");
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
            type="text"
            placeholder="Example: Stratocaster"
            value={guitarModel}
            onChange={handleGuitarModelChange}
          />

          {guitarModelError && (
            <p className={styles.error}>
              {guitarModelError}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="bodyType">
            Body Type
          </label>

          <select
            id="bodyType"
            value={bodyType}
            onChange={handleBodyTypeChange}
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

          {bodyTypeError && (
            <p className={styles.error}>
              {bodyTypeError}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="brandName">
            Brand Name
          </label>

          <input
            id="brandName"
            type="text"
            placeholder="Example: Fender"
            value={brandName}
            onChange={handleBrandNameChange}
          />

          {brandNameError && (
            <p className={styles.error}>
              {brandNameError}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="stockQuantity">
            Stock Quantity
          </label>

          <input
            id="stockQuantity"
            type="number"
            min="1"
            max="100"
            placeholder="1 - 100"
            value={stockQuantity}
            onChange={handleStockQuantityChange}
          />

          {stockQuantityError && (
            <p className={styles.error}>
              {stockQuantityError}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="manufacturerName">
            Manufacturer Name
          </label>

          <input
            id="manufacturerName"
            type="text"
            placeholder="Example: Fender Musical Instruments"
            value={manufacturerName}
            onChange={handleManufacturerChange}
          />

          {manufacturerError && (
            <p className={styles.error}>
              {manufacturerError}
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
                checked={userRole === "Merchant"}
                onChange={handleUserRoleChange}
              />

              Merchant
            </label>

            <label>
              <input
                type="radio"
                name="userRole"
                value="Consumer"
                checked={userRole === "Consumer"}
                onChange={handleUserRoleChange}
              />

              Consumer
            </label>
          </div>

          {userRoleError && (
            <p className={styles.error}>
              {userRoleError}
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