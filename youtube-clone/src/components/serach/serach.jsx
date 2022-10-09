import React, { useRef } from "react";
import styles from "./serach.module.css";
import logo from "../../img/youtube_logo.png";
import glass from "../../img/glass.png";

function Serach({ searchHandle }) {
  const inputRef = useRef();
  const onSubmit = event => {
    event.preventDefault();
    searchHandle(inputRef.current.value);
    inputRef.current.blur();
  };

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <img
        onClick={() => window.location.reload()}
        className={styles.logo_img}
        src={logo}
        alt="logo"
      />
      <input
        ref={inputRef}
        placeholder=" 검색"
        type="text"
        className={styles.input}
      ></input>
      <button className={styles.btn}>
        <img src={glass} className={styles.btn_img} alt="click"></img>
      </button>
    </form>
  );
}

export default Serach;
