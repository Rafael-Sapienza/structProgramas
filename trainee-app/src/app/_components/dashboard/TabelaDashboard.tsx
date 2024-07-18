import { TBodyDashboard} from "./TBodyDashboard";
import styles from "~/styles/paginaExtrato/tabelaExtrato.module.css"

export function TabelaDashboard(){
    return(
        <table className= {styles.tabelaExtrato}>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade em estoque</th>
                    <th>Unidades Vendida</th>
                </tr>
            </thead>
            <TBodyDashboard/>
        </table>
    )
}