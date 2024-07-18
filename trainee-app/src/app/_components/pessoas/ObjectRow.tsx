import React from 'react'
import { Pessoa } from '@prisma/client'

type Props = {
  pessoa?: Pessoa
}

const ObjectRow: React.FC<Props> = ({ pessoa }) => {
  if (!pessoa) {
    return null
  }
  /*return (
    <div>
      <h2>{pessoa.id}</h2>
      <p>Email: {pessoa.cpf}</p>
    </div>
  )*/
  return(
    <tr>
      <th>{pessoa.id}</th>
      <th>{pessoa.cpf}</th>
    </tr>
  )

}

export default ObjectRow;