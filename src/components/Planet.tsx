import Link from "next/link";
import type IPlanet from "@/@types/planet";

export default function Planet({
  planet,
  id,
}: {
  planet: IPlanet;
  id: number;
}) {
  return (
    <Link href={`/planet/${planet.name}`}>
      <div className="w-40 xl:w-60 h-40 xl:h-60 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 hover:from-pink-300 shadow-[0_0_40px_#1e3a8a] border-4 border-blue-800 flex justify-center items-center hover:animate-spin">
        {planet.name}
      </div>
    </Link>
  );
}
