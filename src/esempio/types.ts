export type datianagrafici = {
    codiceFiscale: string;
    nome: string;
    cognome: string;
    email: string;
    };


    export type giftCard = { 
        tipologia: 'digitale'| 'cartacea',
        taglio : 10 | 25 | 50 | 100,
        quantita : number;
    }

    export type ordine = {
        datiAnagrafici: datianagrafici;
        giftcards: giftCard[];
    }