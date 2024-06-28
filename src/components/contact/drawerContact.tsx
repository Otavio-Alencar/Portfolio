import { ReactNode } from "react"
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Textarea } from "../ui/textarea"
import { GetEmail } from "@/api/email/send/routeSend"

const formSchema = z.object({
    email: z.string().email('Coloque um email válido'),
    text:z.string().min(4,'Seu texto deve conter pelo menos 4 letras')
})

export const DrawerContact = ({children}: {children:ReactNode})=>{
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })
    function onSubmit(values:z.infer<typeof formSchema>){
        GetEmail(values.email,values.text)

    }
    return(
        <Drawer>
            <DrawerTrigger className="p-0 m-0 ">
                {children}
            </DrawerTrigger>
            <DrawerContent className="bg-[#D8DEE9] dark:bg-[#181b21] flex items-center justify-center">
                <DrawerHeader className="flex items-center justify-center pt-4">
                    <DrawerTitle className="py-2">Enviar Email</DrawerTitle>
                </DrawerHeader>
            

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="pb-16 pt-2 flex flex-col gap-5 lg:w-96">
                    <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="text-xs">Seu Email</FormLabel><br />
                                    <FormControl>
                                        <input className="outline-none p-2 border-b  border-[#7fb2c0c8] bg-transparent lg:w-96" type="text" placeholder="Digite aqui seu email" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}>

                        </FormField>
                        <FormField
                            control={form.control}
                            name="text"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="text-xs">Texto</FormLabel>
                                    <FormControl>
                                        <Textarea className="border-[#7fb2c0c8] bg-transparent outline-none" placeholder="Digite o conteúdo do seu email" {...field}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}>

                        </FormField>
                        <button type="submit" className="border border-light-color p-1 rounded-md">Enviar</button>
                    </form>
                </Form>
            </DrawerContent>
        </Drawer>
    )
}