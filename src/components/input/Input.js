import React from "react";
import styles from "./input.module.less";

const Input = ({
  name,
  id,
  type,
  placeholder,
  labelText,
  styleType,
  tag,
  ...rest
}) => (
  <div className={styles.inputWrapper}>
    <label htmlFor={id} className={styles.inputLabel}>
      {labelText}
    </label>
    {tag === "textarea" ? (
      <textarea
        {...rest}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        className={styleType === "textarea" ? styles.textArea : styles.input}
      ></textarea>
    ) : (
      <input
        {...rest}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        className={styleType === "textarea" ? styles.textArea : styles.input}
      ></input>
    )}
  </div>
);
export default Input;
