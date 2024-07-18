import styles from "~/styles/homepage.module.css"
import { TablePessoa } from "../_components/pessoas/TablePessoas";





export default function Homepage() {
  return (
    <main className= {styles.main}>
      <TablePessoa/>
    </main>
  );
}