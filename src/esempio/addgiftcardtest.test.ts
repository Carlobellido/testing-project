import { addGiftCard } from "./gifcartsmodules";
import { giftCard, ordine } from "./types";

const giftCardtest :giftCard ={
tipologia: "digitale"||"cartacea",
    taglio : 10,
    quantita : 1
} 
const giftcardData : ordine = {
    datiAnagrafici: {
        codiceFiscale: "RSSMRA80A01H501A",
        nome: "Mario",
        cognome: "Rossi",
        email: "mario.rossi@example.com"
    },
    giftcards: []

  };

  const nuovoOrdine = addGiftCard(giftcardData , giftCardtest);


  describe("[Case giftcards] Funzione AddGiftCard", () => {
    beforeEach(() => {
        tipologia: "";
        taglio : 0;
        quantita : 0;
      
    });

// Verifiche iniziali 

test("Verifica che la giftcard sia stata aggiunta", () => {
expect(nuovoOrdine.giftcards).toHaveLength(1);});

test("Verica tipologia giftcard", () => {
    expect(nuovoOrdine.giftcards[0].tipologia).toBe("digitale");
  });

test("Verifica taglio giftcard", () => {
    expect(nuovoOrdine.giftcards[0].taglio).toBe(10);
  });

test("Verifica quantita giftcard", () => {
    expect(nuovoOrdine.giftcards[0].quantita).toBe(1);
  });





  /*
test("Aggiunta quantità giftcard dello stesso taglio", () => {
    const giftCard2: giftCard = {
        tipologia: "digitale",
        taglio: 10,
        quantita: 1
    }
    for (let i = 0; i < nuovoOrdine.giftcards.length; i++) {
        giftcardData.giftcards[i].quantita += 1;
        expect(nuovoOrdine.giftcards[i].quantita).toBe(giftcardData.giftcards[i].quantita);
    }
});
  });
*/

  });
  
