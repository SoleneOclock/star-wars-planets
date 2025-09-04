export default function LoaderPage() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-yellow-400">
      <div className="perspective absolute inset-0 flex items-center justify-center">
        <div className="crawl text-center text-xl leading-loose">
          <p className="mb-4 uppercase">Il y a bien longtemps,</p>
          <p className="mb-4 uppercase">
            dans une galaxie lointaine, très lointaine...
          </p>
          <br />
          <p className="mb-4 font-bold text-3xl">STAR WARS</p>
          <p className="mb-4 font-semibold">Episode IV</p>
          <p className="mb-4">
            C’est une période de guerre civile. Les vaisseaux rebelles attaquent
            depuis une base cachée et ont remporté leur première victoire contre
            l’Empire galactique...
          </p>
        </div>
      </div>
    </div>
  );
}
