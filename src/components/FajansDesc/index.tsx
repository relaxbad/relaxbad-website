const FajansDesc = () => (
  <>
    <div className="md:w-1/2 flex flex-wrap">
      <p>
        Turniej organizowany przy współpracy z Fajansem Włocławskim
        popularyzujący ..... W zmaganiach biorą udział zawodnicy z różnych
        poziomów umiejętności z podziałem na gry pojedyncze, gry podwójne,
        mixty.{" "}
      </p>
    </div>
    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2  gap-4 gap-y-10 mt-20">
      <div>
        <h3 className="mb-2">Kategorie gier</h3>
        <ul className="list-disc list-inside">
          <li>Gry pojedyncze</li>
          <li>Gry podwójne</li>
          <li>Mixty</li>
        </ul>
      </div>
      <div>
        <h3 className="mb-2">Gdzie?</h3>
        <p>
          SP nr 19 we Włocławku <br /> ul. Szkolna 10
        </p>
      </div>
      <div>
        <h3 className="mb-2">Kiedy?</h3>
        <p>Wrzesień 2025</p>
      </div>
      <div>
        <h3 className="mb-2">Zapisy</h3>
        <p>relaxbad.nw@gmail.com</p>
      </div>
      <div className="sm:col-span-2">
        <h3 className="mb-2">Nagrody</h3>
        <p>
          Nagroda, czyli Fajansowa Lotka symbolizuje nawiązanie do tradycji
          regionu. <br />
          Fundatorem finansowej lotki jest firma Fajans Włocławski z siedzibą
          przy ulicy Falbanka 28.{" "}
        </p>
      </div>
    </div>
  </>
);

export default FajansDesc;
