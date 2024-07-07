// src/components/Header.tsx
import React from "react";
import Image from "next/image";
import logo from "@/components/assets/zuzu-fundobranco.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1>Título</h1>
      <Image src={logo} alt="Logo Zuzu" className={styles.logo} />
    </header>
  );
};

export default Header;
