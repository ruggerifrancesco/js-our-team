console.log('JS LOADED!');

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Wayne Barnett     ounder & CEO      wayne-barnett-founder-ceo.jpg
// Angela Caroll     Chief Editor      angela-caroll-chief-editor.jpg
// Walter Gordon     Office Manager    walter-gordon-office-manager.jpg
// Angela Lopez      Social Media      Manager  angela-lopez-social-media-manager.jpg
// Scott Estrada     Developer         scott-estrada-developer.jpg
// Barbara Ramos     Graphic Designer  barbara-ramos-graphic-designer.jpg


// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:  ✓
// Creare l’array di oggetti con le informazioni fornite. ✓
// MILESTONE 1:  ✓
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto  ✓
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

const teamMembersList = [
    addNewMember('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    addNewMember('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    addNewMember('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    addNewMember('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    addNewMember('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    addNewMember('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg'),
];

for (let i = 0; i < teamMembersList.length; i++) {
    for (let key in teamMembersList[i]) {
      console.log(key + ': ' + teamMembersList[i][key]);
    }
    // Little temp divider for console.log
    console.log('----------------');
  }
  

// => Function Scheme New Member
function addNewMember(nameId, role, photoId) {
    const memberCard = {
        'Name Identifier': nameId,
        'Actual Role': role,
        'Photo Identifier': photoId
    };

    return memberCard;
  }


