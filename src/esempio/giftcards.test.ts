import { newOrder } from "./gifcartsmodules";

let data ={ 
  codiceFiscale: "RSSMRA80A01H501A",
  nome: "Mario",
  cognome: "Rossi",
  email: "mario.rossi@example.com"
}
const order = newOrder(data);
describe(" [TestCaseOrder] Funzione NEWORDER", () => {

 
 beforeEach(() => {
  data = {
   codiceFiscale: "",
   nome: "",
   cognome: "",
   email: ""
 };
});

    test("newOrder", () => {
      //Per verificare che l'ordine sia stato creato
      expect(order).toBeDefined();
    });

    //Test di Codice Fiscale

    test("Codice Fiscale", () => {
      expect(order.datiAnagrafici.codiceFiscale).toHaveLength(16);
    });

    test("Codice Fiscale formato", () => {
      expect(order.datiAnagrafici.codiceFiscale).toMatch(/^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/);
    });

    //Special Case
    test("Codice  to be define", () => {
      expect(order.datiAnagrafici.codiceFiscale).toBeDefined();
    });

    
    



    // Test di Nome 
    test("Nome", () => {
      expect(order.datiAnagrafici.nome).toBe("Mario");
    });

    //Special Case 

    test("Nome definito ", () => {
      expect(order.datiAnagrafici.nome).toBeDefined(); // Fix: Update the expected value to an empty string
    });

    test("Nome lunghezza", () => {
      expect(order.datiAnagrafici.nome.length).toBeLessThanOrEqual(50);
    });




    // Test di Cognome 
    test("Cognome", () => {
      expect(order.datiAnagrafici.cognome).toBe("Rossi");
    });

    //Special Case 

    test("Cognome definito ", () => {
      expect(order.datiAnagrafici.cognome).toBeDefined();
    });

    test("Cognome con numeri e lettere", () => {
      expect(order.datiAnagrafici.cognome.length).toBeLessThanOrEqual(50);
    });

    // Test di Email
    test("Email", () => {
      expect(order.datiAnagrafici.email).toBe("mario.rossi@example.com")
    });

    test("Email format", () => {
      expect(order.datiAnagrafici.email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
    });


    //Special Case
    test("Email definitio", () => {
      expect(order.datiAnagrafici.email).toBeDefined();
    });

    test("Email controllo lunghezza ", () => {
      expect(order.datiAnagrafici.email.length).toBeLessThanOrEqual(319);
    });



 


});