import React, { useState } from "react";
import Modal from "./Modal"

function Footer() {
  const [modal, setModal] = useState(false);

  function toggle() {
    setModal((prevState) => !prevState);
  }

  return (
    <>
      <footer>
        <button className="rules" onClick={toggle}>Rules</button>
      </footer>
      {
        modal ? 
        <Modal toggle={toggle}/>
        : null
      }
    </>
  );
}

export default Footer;
