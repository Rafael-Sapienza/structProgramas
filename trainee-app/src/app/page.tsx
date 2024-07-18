import styles from "~/styles/homepage.module.css"
import { Card, Navbar } from "./_components/navBar";
import MyImageComponent from "./_components/MyImageComponent";
import { TBodyPessoas } from "./_components/pessoas/TBodyPessoas";






export default function Homepage() {
  return (
    <main className= {styles.main}>
      <Navbar/>
    </main>
  );
}