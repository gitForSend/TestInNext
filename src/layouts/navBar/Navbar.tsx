// "use client";
import styles from "./Navbar.module.css";
import Image from "next/image";
// import Logonav from "../../../public/assets/png/projeco-logo-black.png";
import Navigation from "../hamburger/Hamburger";

export const navMenu: string[] = [
  "HOME",
  "ABOUT",
  "SERVICES",
  "WORK",
  "CONTACT",
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoNavbar}>
        {/* <Image src={Logonav} alt="logo" width={79.53} /> */}
      </div>
      <Navigation />
      <ul className={styles.ul}>
        {navMenu.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}
