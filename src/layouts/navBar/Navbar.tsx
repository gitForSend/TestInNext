import styles from "./Navbar.module.css";
import Image from "next/image";
import Logo from "../../../public/projeco-logo-black.png";
const navMenu: String[] = [
    "HOME","ABOUT","SERVICES","WORK","CONTACT"
]

export default function Navbar () {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoNavbar}>
                <Image 
                    src={Logo}
                    alt="Logo"
                    width={79.53}
                    priority
                />
            </div>
            <ul className={styles.ul}>
                {navMenu.map((item,index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </nav>
    )
}
