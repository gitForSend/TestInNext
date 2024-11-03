import styles from "./Footer.module.css";
// import Logo from "../../../public/assets/png/projeco-logo.png";
import Container from "@/components/basic/container/Container";
import Image from "next/image";
// import Facebook from "../../public/assets/svg/facebook.svg";
// import Twitter from "../../../public/assets/svg/twiter.svg";
// import Google from "../../../public/assets/svg/google.svg";
export default function Footer() {
  const logos: any = [
      // <Facebook key="facebook"/>, <Twitter key="twitter"/>, <Google key="google" />
  ];
  const footerMenu: string[][] = [
    ["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT US"],
    ["FAQ", "TERMS", "CAREERS"],
    ["BLOG", "PARTNER", "NEWS"],
  ];
  const contactsFooter: string[] = [
    "213 Baker Street Oriel City Kounty 7000 KNW, Kountry Name",
    "+23 994 233 4022",
    "info@konstruct.com",
  ];
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.contentFooter}>
          <div className={styles.firstLogoContent}>
            <h4>COMPANY</h4>
            {/* <Image src={Logo} alt="Logo" width={101} height={23} /> */}
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </div>
          <div className={styles.linksFooter}>
            <h4>LINKS</h4>
            <div className={styles.menuFooter}>
              {footerMenu.map((subMenu:string[], indexArr:number) => {
                return (
                  <div className={styles.footerItem} key={indexArr}>
                    {subMenu.map((item:string, index:number) => {
                      return (
                        <a href="#" key={index}>
                          {item}
                        </a>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.contactFooter}>
            <h4>CONTACT US</h4>
            <div className={styles.contactsFooterTexts}>
              {contactsFooter.map((item:string, index:number) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          </div>
          <div className={styles.logosFooter}>
            {logos.map((item:any,index:number) => {
              return <a href="#" key={index}>{item}</a>
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
