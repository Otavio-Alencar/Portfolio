import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

export const Projects=  ()=>{
    return(
        <div className="min-h-screen">
            <Card >
                <CardHeader>
                    <CardTitle>
                        Projetos
                    </CardTitle>
                    <CardContent className="p-0">
                        <ul className="hidden md:flex gap-3">
                            <li className="text-sm text-start">Todos</li>
                            <li className="text-sm text-start">Landing Pages</li>
                            <li className="text-sm text-start">API Requests</li>
                            <li className="text-sm text-start">Forms</li>
                        </ul>

                        <Carousel className="pt-8 md:hidden">
                            <CarouselContent>
                                <CarouselItem className="flex justify-center">
                                    <div className="h-48 w-full bg-blue-400"></div>
                                </CarouselItem>
                                <CarouselItem className="flex justify-center">
                                    <div className="h-48 w-full bg-blue-400"></div>
                                </CarouselItem>
                                <CarouselItem className="flex justify-center">
                                    <div className="h-48 w-full bg-blue-400"></div>
                                </CarouselItem>
                                <CarouselItem className="flex justify-center">
                                    <div className="h-48 w-full bg-blue-400"></div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </Carousel>
                    </CardContent>
                    <CardFooter className="hidden md:flex">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#"/>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink>1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink>2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink>3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink>4</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#"/>
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </CardFooter>
                </CardHeader>
            </Card>
        </div>
    )
}