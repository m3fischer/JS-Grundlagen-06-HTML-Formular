function onButtonClickOK() {
    
    
    
    //Formulardaten einlesen
    let vorname = document.getElementById("vorname").value    
    let nachname = document.getElementById("nachname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let check = document.getElementById("check").value;

    //2. Alle Daten in einer "Liste" (=> Array) speichern
    let person = [];
    person.push(vorname);
    person.push(nachname);
    person.push(email);
    person.push(password);
    person.push(check);

    console.log(person);

    //3. Neues Element "Danke" sagen erstellen
    const node = document.createElement("h1");
    const textnode = document.createTextNode("Danke :-)");
    node.appendChild(textnode);

    //4. Elemente dem Dokument anfuegen
    document.getElementById("dankesagen").appendChild(node);

    /// Nur als Beispiel, Aendern des Wertes des Input Felds
    document.getElementById("vorname").value ="Hallo"
    document.getElementById("linkeSeitContentArea").innerText="Eine neuer Wert";

    /** Folgendes Funktioniert in der Form noch nicht.
    let body = document.getElementsByTagName("body");
    console.log(body);0
    let shoeVorname = body.getElementById("vorname").value;
    console.log(shoeVorname);
     */

}