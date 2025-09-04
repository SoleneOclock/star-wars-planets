import H2 from "@/components/Title";

export default async function PlanetPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <main className="">
      <H2>Planete {name}</H2>
    </main>
  );
}
