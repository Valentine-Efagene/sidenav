import React, { useState } from "react";
import styles from "./DropDown.module.css";

export default function DropDown({ head, children, className }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <div
        className={styles.head}
        onClick={() => {
          setCollapsed((prevState) => !prevState);
        }}
      >
        {head}
      </div>
      <div
        className={`${styles.children} ${
          collapsed ? styles.collapsed : styles.full
        }`}
      >
        {children}
      </div>
    </>
  );
}
