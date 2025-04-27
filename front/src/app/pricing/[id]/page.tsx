import { TariffContent } from "@features/TariffContent";
import { getTariffById } from "@api/tariffs";

export default async function Tariff({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tariff = await getTariffById(id);

  return <TariffContent tariff={tariff} />;
}
