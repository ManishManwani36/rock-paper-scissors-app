import React from "react";
import ReactDOM from "react-dom";
import close from "../assets/icon-close.svg"
import rules from "../assets/image-rules.svg"

function Modal({toggle}) {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src={close} alt="close-button"/>
          </button>
        </div>
        <img src={rules} alt="rules"/>
      </div>
    </div>
    ,document.getElementById("modal")
  );
}

export default Modal;
