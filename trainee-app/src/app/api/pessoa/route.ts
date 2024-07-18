import { NextResponse, type NextRequest } from "next/server";
import {db} from "~/server/db"

export async function GET(req : NextRequest) {
    try{
        const pessoas = await db.pessoa.findMany()
        const firstPessoa = pessoas[0]
        const ide = pessoas[1]?.id
        return NextResponse.json({message: "OK",pessoas})
    } catch(err) {
        if (err instanceof Error) {
            return NextResponse.json(
                {
                    message:"error",
                    err: err.message
                },
                {
                    status:500
                }
            )
        }
    }
}


export async function POST(req : NextRequest) {
    const { cpf } = await req.json() as {cpf:string}
    try{
        const pessoa = await db.pessoa.create({
            data:{
                cpf
            }
        })
        return NextResponse.json({message: "OK",pessoa})
    } catch(err) {
        if (err instanceof Error) {
            return NextResponse.json(
                {
                    message:"error",
                    err: err.message
                },
                {
                    status:500
                }
            )
        }
    }
}

