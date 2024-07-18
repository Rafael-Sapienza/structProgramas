import styles from "~/styles/homepage.module.css"
import { TabelaExtrato } from "../_components/paginaExtrato/TabelaExtrato";



export default function Homepage() {
  return (
    <main className= {styles.main}>
      <TabelaExtrato/>
    </main>
  );
}