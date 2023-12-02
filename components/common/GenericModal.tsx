import React, { useState } from "react";
import style from "@/styles/components/genericModal.module.css";
import { Modal, Button } from "@mui/material";
import Image from "next/image";

const GenericModal = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false)
  };
  return (
    <div className={style.mainContainer}>
      <Modal open={open} onClose={handleClose}>
        <div className={style.modalContainer}>
          <div className={style.modalTitle}>
            🎊 Secret Message Link 🎊 <br /> 2024
          </div>
          <Image
            src="/images/modal_welcome.png"
            alt="secret quiz 2023"
            className={style.modalImage}
            width={120}
            height={120}
          />
          <div className={style.modalIntroText}>Instructions</div>
          <ul className={style.instructionsBox}>
            <li className={style.instructionTxt}>
              1. Enter your Name, Create Secret Message link and Share with your
              friends on Whatsapp, Facebook.{" "}
            </li>

            <li className={style.instructionTxt}>
              2. Get unknown feedback from your friends, co-workers, and Fans.{" "}
            </li>
            <li className={style.instructionTxt}>
              3. Once your friends send you a message, you will see the results
              on a Message board.
            </li>
          </ul>
          <button className={style.modalSubmitBtn} onClick={handleClose}>{"Let's Play ▶"}</button>
        </div>
      </Modal>
    </div>
  );
};

export default GenericModal;
