import {TBodyPessoas} from './TBodyPessoas';
import styles from "~/styles/tablePessoas.module.css";


export function TablePessoa(){
    return(
        <table className= {styles.tablePessoas}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>cpf</th>
                </tr>
            </thead>
            <TBodyPessoas/>
        </table>
    )
}