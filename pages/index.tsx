import Image from "next/image";
import { Inter } from "next/font/google";
import GenericModal from "@/components/common/GenericModal";
import style from "@/styles/pages/home.module.css";

export default function Home() {
  return (
    <div className={style.mainContainer}>
      <GenericModal />
      <div className={style.cardMainContainer}>
        <div className={style.modalTitle}>🎊 Secret Message Link 🎊</div>
        <Image
          src="/images/laughing_panda.png"
          alt="secret quiz 2023"
          className={style.modalImage}
          width={150}
          height={150}
        />
        <div>
          <input placeholder="Enter your name..." className={style.nameInput} />
          <button className={style.createLinkBtn}>{"Create My Link ⏭"}</button>
        </div>
      </div>
    </div>
  );
}
