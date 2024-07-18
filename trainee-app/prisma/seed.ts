import {prisma} from "./index"

const main = async () => {
    const pessoa1 = await prisma.pessoa.create({data:{
        cpf: "fjadklsl",
        habilitacao:"fçdlkj",
    }});

    await prisma.carro.create({data:{
        modelo:"celta azul",
        numero_do_chassi:"fkdlajslkdjlfs",
        dono_id:pessoa1.id,
        placa: {create: {valor:"ABCD111"}}
    }})
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async(e)=>{
        console.log(e);
        await prisma.$disconnect();
    });