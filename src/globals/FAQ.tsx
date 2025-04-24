import { JSX } from "react";

export interface FAQType {
  title: string;
  answer: JSX.Element | string;
}

export const FAQ: FAQType[] = [
  {
    title: "Kiedy odbywają się treningi?",
    answer: (
      <>
        <p>Treningi odbywają się w SP 19 we Włocławku na Michelinie</p>
        <ul className="list-disc list-inside ml-4 my-2">
          <li>Wtorek 18.30 - 21.15</li>
          <li>Piątek 19.00 - 21.00</li>
        </ul>
      </>
    ),
  },
  {
    title: "Czy organizowane są zajęcia dla dzieci?",
    answer: (
      <>
        <p>
          Tak, organizujemy zajęcia dla dzieci i młodzieży. Zajęcia odbywają się
          w:
        </p>
        <ul className="list-disc list-inside ml-4 my-2">
          <li>Poniedziałek SP Kruszyn - 15.00 - 16.30</li>
          <li>Wtorek SP 19 - 17.00 - 18.30</li>
          <li>Środa SP 19 - 19.00 - 20.30</li>
        </ul>
        <p>O przyporządkowaniu zawodników do grup decyduje trener</p>
      </>
    ),
  },
  {
    title: "Jak dołączyć do klubu?",
    answer: (
      <p>
        Aby dołączyć do klubu niezbędne jest wypełnienie deklaracji
        członkowskiej dostępnej w plikach do pobrania oraz przesłanie jej na
        mail relaxbad.nw@gmail.com lub dostarczenie oryginału na trening.
        <br />
        <br />
        Pierwsze dwa treningi są próbne, nie trzeba być członkiem klubu żeby w
        nich uczestniczyć - wystarczy że się zgłosisz.
      </p>
    ),
  },
  {
    title: "Co zabrać na swój pierwszy trening?",
    answer:
      "Buty do gry na hali (spody nie rysujące powierzchni), strój sportowy, wodę do picia oraz dobry humor. Rakietę i lotki na początek Ci użyczymy ",
  },
  {
    title: "Jakie są koszty członkostwa?",
    answer: (
      <p>
        Składka członkowska wynosi miesięcznie 60 zł i jest płatna do 10 dnia
        bieżącego miesiąca.
      </p>
    ),
  },
];
