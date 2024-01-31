import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { BarberShop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
    barbershop: BarberShop
}

const BarbershopItem = ({barbershop}:BarbershopItemProps) => {
    return ( 
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1 py-0">
        <div className="w-full h-[159px] relative">
            <div className="top-2  left-2 z-50 absolute top-2 left-2">
            <Badge variant="secondary" className=" flex gap-1 items-center opacity-90"> <StarIcon size={12} className="fill-primary text-primary"></StarIcon> <span className="text-xs">5,0</span></Badge>
            </div>
          
          <Image
            alt={barbershop.name}
            src={barbershop.imageURL}
            style={{
              objectFit: "cover",
            }}
            fill
            className="rounded-2xl"
          />
        </div>
                

                <div className="px-3 pb-3">
                <h2 className="font-bold text-ellipsis text-nowrap overflow-hidden">{barbershop.name}</h2>
                <p className="text-sm text-gray-400 overflow-hidden text-nowrap text-ellipsis mt-3">{barbershop.address}</p>
                <Button variant="secondary" className="w-full mt-3">Reservar</Button>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;