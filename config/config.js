//in questo file vengono settati i parametri ed i colori per adattare l'app agli altri corsi di laurea

const colors = {
    //colori corso di laurea
    lightColor: "#e6ffcc",
    mediumColor : "#4d9900",
    darkColor : "#006600",

    //altri colori
    greyBack : "#f2f2f2",

    //colori economia
    economiaColor:"#990033",
    economiaColorPressed:"#600022",
    // colori ateneo
    tvColor:"#007c34",
    tvColorPressed:"#004411",
    //colori Delphi
    delphiGreenColor:'#2d7c5f',
    delphiGreenColorPressed:'#184433',
    //colori sfondo beige linktree
    linkTreeColor:'#e6e6dc',
    linkTreeColorPressed:'#b6b6b6'
}

const fonts = 'Roboto'

const course = {
    type: "Bachelor Degree",
    name: "GLOBAL GOVERNANCE",
    years: 3
}

// Esempi di url- global: ba/globalgovernance , B.A.: master-science/ba

const sigla = 'ba/globalgovernance'
const api = 'https://economia.uniroma2.it/'+sigla+'/dida/orariolezioni/?formato=json'


export {colors, course, api, sigla, fonts}
