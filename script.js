console.log('JS LOADED!');

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Wayne Barnett     ounder & CEO      wayne-barnett-founder-ceo.jpg
// Angela Caroll     Chief Editor      angela-caroll-chief-editor.jpg
// Walter Gordon     Office Manager    walter-gordon-office-manager.jpg
// Angela Lopez      Social Media      Manager  angela-lopez-social-media-manager.jpg
// Scott Estrada     Developer         scott-estrada-developer.jpg
// Barbara Ramos     Graphic Designer  barbara-ramos-graphic-designer.jpg


// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

const teamMembersList = [];

// => Function Scheme New Member
function addNewMember(name, surname, role, photoId) {
    const memberCard = {
        name: name,
        surname: surname,
        role: role,
        photo_Id: photoId
    };

    teamMembersList.push(memberCard);
  }


