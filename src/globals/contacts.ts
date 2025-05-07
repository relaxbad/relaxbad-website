interface Contact {
  label: string;
  name: string;
  email?: string;
  phone: string;
}

export const CONTACTS: Contact[] = [
  {
    label: "Prezes",
    name: "Grzegorz Jankowski",
    email: "relaxbad.nw@gmail.com",
    phone: "661 919 848",
  },
  {
    label: "Trener sekcji dziecięcej",
    name: "Maciej Żywiczka",
    phone: "606 629 186",
  },
];
