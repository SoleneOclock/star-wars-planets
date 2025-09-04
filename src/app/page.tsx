// ce composant sera executé coté serveur AVANT l'envoie du code au client

import type IPlanet from "@/@types/planet";
import Planet from "@/components/Planet";
import H2 from "@/components/Title";

const fetchPlanets = async () => {
  const response = await fetch("https://swapi.py4e.com/api/planets/", {
    // si on ajoute no cache on est sur que à chaque requête d'un client le fetch est refait (sinon y'a du cache) bien pour des données.
    cache: "no-cache",
  });

  // simulation d'un delais on attend la resolution d'une promise qui sera resolue au bout d'un timer de 3 seconde
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const data = await response.json();
  return data.results as IPlanet[];
};

export default async function Home() {
  console.log("render de Home");

  // on peut direct fair eun fetch, notre composant peut etre asynchrone, c'est pas grave le client attendra un peu plus longtemps avant de recevoir sa page
  const planetes = await fetchPlanets();

  return (
    <div>
      <header>
        <H2>Les planetes StarWars</H2>
      </header>

      <main>
        <div className="flex flex-wrap gap-4 m-4">
          {planetes.map((planet, index) => (
            <Planet planet={planet} key={planet.name} id={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
