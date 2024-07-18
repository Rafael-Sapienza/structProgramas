import { revalidateTag } from 'next/cache'
import ObjectRow from './ObjectRow'


export async function TBodyPessoas(){
    'use server'
    revalidateTag("")
    const response = await fetch("http://localhost:3000/api/pessoa",{cache:'no-store'})
    const data: {message: string, pessoas:{id:number, cpf:string,habilitacao:string}[]} = await response.json() as {message: string, pessoas:{id:number, cpf:string,habilitacao:string}[]}

    /*return(
        <ObjectRow pessoa = {data.pessoas[0]}/>
    )*/

    const pessoas = data.pessoas
    const rows = [];
    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i]
        rows.push(<ObjectRow pessoa = {pessoa}/>);
    }
    return <tbody>{rows}</tbody>;
}
    

    /*return(
        <ul>
            {data.pessoas.map((item) => <li key={item.id}>{item.habilitacao}</li>)}
            Primeira pessoa:{data.pessoas[0]?.id}
        </ul>
        
    )*/