const studente1 = {

    nome: 'Polina',
    cognome: 'Boretc',
    genere: 'femmina',
    eta: 27,
    citta: 'Chelyabinsk',
    sposato: false,
    corso: {
        nome: 'Web design',
        ore: 250,
        }

}

const studente2 = { 
    nome: 'Christopher', 
    cognome: 'Limone', 
    genere: 'maschio', 
    eta: 27, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso2,
} 

const studente3 = { 
    nome: 'Cinzia', 
    cognome: 'Ariotti', 
    genere: 'femmina', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente4 = { 
    nome: 'Giovanni', 
    cognome: 'Cambiaso', 
    genere: 'maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente5 = { 
    nome: 'Mattia', 
    cognome: 'Dalla Mutta', 
    genere: 'maschio', 
    eta: 26, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente6 = { 
    nome: 'Mirco', 
    cognome: 'Faro', 
    genere: 'maschio', 
    eta: 29, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso2
} 

const studente7 = { 
    nome: 'Paolo', 
    cognome: 'Foppiano', 
    genere: 'maschio', 
    eta: 25, 
    citta: 'Genova', 
    sposato: false, 
    corso: corso3
} 


const studente8 = { 
    nome: 'Leslie', 
    cognome: 'Fritas Olaechea Stefanny', 
    genere: 'femmina', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso1
}


const studente9 = { 
    nome: 'Artem', 
    cognome: 'San Giorgio', 
    genere: 'maschio', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso2
} 

const studente10 = { 
    nome: 'Jessica', 
    cognome: 'Vitanza', 
    genere: 'femmina', 
    eta: 26, 
    citta: 'Lima', 
    sposato: false, 
    corso: corso1
} 

const studenti = [studente1, studente2, studente3, studente4, studente5, studente6, studente7, studente8, studente9, studente10]

function logStudenti(listaArray) {
    
    for (let i = 0; i < listaArray.length; i++) {
        const lista = listaArray[i];
        console.log(lista.name + " " + lista.priority)
    }
}


function writeListToDocument(listaArray) {
    
    const container = document.getElementById('lista-container');

    for (let i = 0; i < listaArray.length; i++) {
        
        const lista = listaArray[i];
        
        const li = document.createElement('li');

        li.classList.add('list-element');

        const node  = document.createTextNode(lista.name);

        const priorityNode = document.createTextNode("  " + lista.priority);

        const br = document.createElement('br')

        li.appendChild(node);

        li.appendChild(br);

        li.appendChild(priorityNode);

        container.appendChild(li);

    }
}

writeListToDocument(studenti);



