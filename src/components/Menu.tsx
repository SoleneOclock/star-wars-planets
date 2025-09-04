import Link from "next/link";
import LikeBtn from "./LikeBtn";

export default function Menu() {
  console.log("render de menu");

  return (
    <ul className="flex gap-4 p-3 bg-cyan-700">
      <li>
        <Link href="/">Accueil</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <LikeBtn />
    </ul>
  );
}
