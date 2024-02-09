
describe(" [TestCaseOrder] Funzione NEWORDER", () => {

 //


    test("newOrder", () => {
      //Per verificare che l'ordine sia stato creato
      expect(order).toBeDefined();
    });

    //Test di Codice Fiscale

    test("Codice Fiscale", () => {
      expect(order.codiceFiscale).toHaveLength(16);
    });

    //Special Case
    test("Codice  to be define", () => {
      expect(order.codiceFiscale).toBeDefined();
    });

    
    



    // Test di Nome 
    test("Nome", () => {
      expect(order.nome).toBe("Mario");
    });

    //Special Case 

    test("Nome definito ", () => {
      expect(order.nome).toBeDefined(); // Fix: Update the expected value to an empty string
    });

    test("Nome lunghezza", () => {
      expect(order.nome.length).toBeLessThanOrEqual(50);
    });




    // Test di Cognome 
    test("Cognome", () => {
      expect(order.cognome).toBe("Rossi");
    });

    //Special Case 

    test("Cognome definito ", () => {
      expect(order.cognome).toBeDefined();
    });

    test("Cognome con numeri e lettere", () => {
      expect(order.cognome.length).toBeLessThanOrEqual(50);
    });

    // Test di Email
    test("Email", () => {
      expect(order.email).toBe("mario.rossi@example.com")
    });

    //Special Case
    test("Email definitio", () => {
      expect(order.email).toBeDefined();
    });

    test("Email controllo lunghezza ", () => {
      expect(order.email.length).toBeLessThanOrEqual(319);
    });



 


});