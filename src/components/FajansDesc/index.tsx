const FajansDesc = () => (
  <>
    <div className="md:w-1/2 flex flex-wrap">
      <p>
        Ogólnopolski turniej badmintona organizowany przy współpracy z Fajansem
        Włocławskim oraz Urzędem Miasta Włocławek. Fajans, będący symbolem
        tradycji i rzemiosła Włocławka, nadaje wydarzeniu wyjątkowy, lokalny
        charakter. W zmaganiach biorą udział zawodnicy z różnych poziomów
        umiejętności z podziałem na gry podwójne i mixty.
      </p>
    </div>
    <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2  gap-4 gap-y-10 mt-20">
      <div>
        <h3 className="mb-2">Gdzie?</h3>
        <p>
          Hala Sportowa OSiR „Hala Mistrzów”, <br /> al. Chopina 8
        </p>
      </div>
      <div>
        <h3 className="mb-2">Kiedy?</h3>
        <p>13.09.2025</p>
        <p>Rozpoczęcie 8:30</p>
      </div>
      <div>
        <h3 className="mb-2">Kategorie gier</h3>
        <ul className="list-disc list-inside">
          <li>Debel męski: A, B, C</li>
          <li>Mixt: A, B, C</li>
          <li>Debel kobiet: B, C</li>
          <li>Samorząd: Open</li>
          <li>Gra podwójna Radosny Amator: Początkujący</li>
          <li>Debel chłopcy: 12-14 lat</li>
          <li>Debel dziewczęta: 12-14 lat</li>
        </ul>
      </div>

      <div>
        <h3 className="mb-2">Zapisy</h3>
        <p>
          Elektronicznie na email:{" "}
          <strong>jaceknowakowski.zapisy@gmail.com</strong> z kopią do
          <strong> relaxbad.nw@gmail.com</strong>. W zgłoszeniu podajemy:
        </p>
        <ul className="list-disc list-inside">
          <li>Swoje imię i nazwisko</li>
          <li>
            Imię i nazwisko osoby z którą gram lub informację, że szukam
            partnera/partnerki
          </li>
          <li>Kategorie</li> <li>Miejscowość lub klub</li> <li>Telefon</li>
          <li>Data urodzenia (w kat. dzieci)</li>
        </ul>
      </div>
      <div className="sm:col-span-2">
        <h3 className="mb-2">Nagrody</h3>
        <p>
          <strong>Dorośli </strong>
          <br />
          Pary, które zwyciężą w swoich kategoriach otrzymają Fajansowe lotki.
          <br />
          Pary z miejsc 2 otrzymają Fajansowe filiżanki.
          <br />
          Pary z miejsc 3 otrzymają Fajansowe kubki. <br />
          <strong>Dzieci</strong>
          <br />
          Każda z par otrzymuje okolicznościowy medal i dyplom <br />
          <br /> Wśród wszystkich uczestników rozlosowane zostaną nagrody firmy
          Kawasaki, która jest Partnerem Technicznym.
        </p>
      </div>
    </div>
  </>
);

export default FajansDesc;
