import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershopItem";

export default async function Home() {
  const barbershops = await db.barberShop.findMany({});
  return (
    <div>
      <div className="px-5 pt-5">
        <Header />
        <h2 className="text-xl font-bold">Olá, Breno</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE', 'dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3 px-5">
          Recomendados
        </h2>
        <div
          className="flex gap-2 overflow-x-auto px-5"
          style={{ scrollbarWidth: "none" }}
        >
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
