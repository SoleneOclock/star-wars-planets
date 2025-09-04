"use client";
// l'instruction ci dessus specifie à Next que ce composant est un client component donc rendu dan sle navigateur du client et non pas coté serveur !
import { useState } from "react";

export default function LikeBtn() {
  // on ne peut pas faire de state ni de onclick sur un serveur component
  // il faut alors preciser que ce composant là est executé coté client
  const [clicks, setClicks] = useState(0);
  return (
    <button type="button" onClick={() => setClicks(clicks + 1)}>
      {clicks} ❤️
    </button>
  );
}
