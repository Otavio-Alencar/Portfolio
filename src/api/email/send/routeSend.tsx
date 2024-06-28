import { NextResponse } from "next/server";
import {Resend} from "resend"

export async function GetEmail(from:string,text:string){
    try{
        const resend = new Resend(process.env.RESEND_API_KEY)
        const {data} = await resend.emails.send({
           from: from,
           to: "oalencardev@gmail.com",
           subject: 'Olá Otávio',
           html:text,
        })
        return NextResponse.json({message:"Email sent"})
        console.log(data)
    }catch(error){
        return NextResponse.json({error})
    }
}