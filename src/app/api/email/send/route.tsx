import { NextRequest, NextResponse } from "next/server";
import {Resend} from "resend"

export async function POST(nextRequest: NextRequest){
    
    try{
        const {email,text} = await nextRequest.json()
        console.log(text,process.env.RESEND_API_KEY)
        const resend = new Resend(process.env.RESEND_API_KEY)
        const { data, error } = await resend.emails.send({
            from: 'From Portfolio <onboarding@resend.dev>',
            to: ['oalencardev@gmail.com'],
            subject: email,
            html: text,
        });
        console.log(error)
        return NextResponse.json({message:"Email sent"})
        
        console.log(data)
    }catch(error){
        return NextResponse.json({error})
    }
}