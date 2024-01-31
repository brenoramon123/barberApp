import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="py-5 items-center px-5 justify-between flex flex-row">
            <Image src="/logo.png"alt="fsw barber" height={18} width={120}/>
            <Button variant="outline" size="icon" className="h-8 w-8">
                <MenuIcon size={18}/>
            </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;