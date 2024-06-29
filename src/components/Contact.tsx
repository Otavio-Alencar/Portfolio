import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { DrawerContact } from "./contact/drawerContact"

//
export const Contact = ()=>{
    
    return(
        <div className="min-h-screen bg-white dark:bg-[#232731] flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold">Contato</h1>
            <div id="contact" className=" flex flex-col md:flex-row  items-center justify-center gap-5 lg:gap-10 py-10">
                
                <DrawerContact>
                    <Card className={`bg-[#D8DEE9] dark:bg-dark-color md:h-56 lg:h-72 justify-center items-center flex flex-col px-2 lg:px-5 hover:border-1 hover:border-[#88c0d0b9] cursor-pointer text-[#444e60] dark:text-white hover:scale-[1.1] hover:transition-all ease`}>
                    <CardHeader>
                        <CardTitle>Enviar Email</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center ">
                        <img className="lg:h-40" src="/images/email-icon.png" alt="" />
                    </CardContent>
                </Card>
                </DrawerContact>
                <Card className={`bg-[#D8DEE9] dark:bg-dark-color md:h-56 lg:h-72 justify-center items-center flex flex-col px-2 lg:px-5 hover:border-1 hover:border-[#88c0d0b9] cursor-pointer text-[#444e60] dark:text-white hover:scale-[1.1] hover:transition-all ease`}>
                    <CardHeader>
                        <CardTitle>Meu currículo</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center ">
                        <img className="lg:h-40" src="/images/email-icon.png" alt="" />
                    </CardContent>
                </Card>
                <Card className={`bg-[#D8DEE9] dark:bg-dark-color md:h-56 lg:h-72 justify-center items-center flex flex-col px-2 lg:px-5 hover:border-1 hover:border-[#88c0d0b9] cursor-pointer text-[#444e60] dark:text-white hover:scale-[1.1] hover:transition-all ease`}>
                    <CardHeader>
                        <CardTitle>Minhas Redes</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center ">
                        <img className="lg:h-40" src="/images/email-icon.png" alt="" />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}