import styles from "~/styles/homepage.module.css"
import {TabelaDashboard} from "../_components/dashboard/TabelaDashboard";



export default function Homepage() {
  return (
    <main className= {styles.main}>
      <TabelaDashboard/>
    </main>
  );
}