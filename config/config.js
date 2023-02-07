//in questo file vengono settati i parametri ed i colori per adattare l'app agli altri corsi di laurea

import { createContext } from "react"

export const AppContext = createContext()

const colors = {
    //colore StatusBar (attualmente non usato)
    statusBarColor:"#006600",
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

const fonts = 'sans-serif'

const corsi = {

    //TRIENNALI

    clem: {
        type1: "Corso di",
        type2: "Laurea",
        name: ["ECONOMIA", "E", "MANAGEMENT"],
        years: 3,
        lang: 'it',
        api: 'cdl/triennio/clem',
        lightColor: '#ccffe6',
        mediumColor : "#00994d",
        darkColor : "#063",
    },

    clef: {
        type1: "Corso di",
        type2: "Laurea",
        name: ["ECONOMIA", "E", "FINANZA"],
        years: 3,
        lang: 'it',
        api: 'cdl/triennio/clef',
        lightColor: '#fcdacf',
        mediumColor : "#f2460d",
        darkColor : "#c30",
    },

    baBAE: {
        type1: "Bachelor",
        type2: "Degree",
        name: ["BUSINESS ADMINISTRATION", "AND", "ECONOMICS"],
        years: 3,
        lang: 'en',
        api: 'ba/business-administration-economics',
        lightColor: '#e5ccff',
        mediumColor : "#4c0f8a",
        darkColor : "#331452",
    },

    baGG: {
        type1: "Bachelor",
        type2: "Degree",
        name: ["GLOBAL", "GOVERNANCE"],
        years: 3,
        lang: 'en',
        api: 'ba/globalgovernance',
        lightColor: '#e6ffcc',
        mediumColor : "#4d9900",
        darkColor : "#360",
    },

    //MAGISTRALI

    clem2: {
        type1: "Laurea",
        type2: "Magistrale",
        name: ["ECONOMIA", "E", "MANAGEMENT"],
        years: 2,
        lang: 'it',
        api: 'cdl/biennio/clem',
        lightColor: '#ccfff2',
        mediumColor : "#009973",
        darkColor : "#00664d",
    },

    clef2: {
        type1: "Laurea",
        type2: "Magistrale",
        name: ["ECONOMIA DEI MERCATI", "E DEGLI INTERMEDIARI","FINANZIARI"],
        years: 2,
        lang: 'it',
        api: 'cdl/biennio/clemif',
        lightColor: '#ffd5cc',
        mediumColor : "#991a00",
        darkColor : "#610",
    },

    //ENGLISH

    ba: {
        type1: "Master of",
        type2: "Science",
        name: ["BUSINESS","ADMINISTRATION"],
        years: 2,
        lang: 'en',
        api: 'master-science/ba',
        lightColor: '#cce5ff',
        mediumColor : '#0f4c8a',
        darkColor : "#143352",
    },

    euEconBussLaw: {
        type1: "Master of",
        type2: "Science",
        name: ["EUROPEAN ECONOMY","AND", "BUSINESS LAW"],
        years: 2,
        lang: 'en',
        api: 'master-science/eebl',
        lightColor: '#ffccd5',
        mediumColor : "#99001a",
        darkColor : "#601",
    },

    finBan: {
        type1: "Master of",
        type2: "Science",
        name: ["FINANCE", "AND", "BANKING"],
        years: 2,
        lang: 'en',
        api: 'master-science/financeandbanking',
        lightColor: '#e5f9ff',
        mediumColor : "#007399",
        darkColor : "#00394d",
    },

    economics: {
        type1: "Master of",
        type2: "Science",
        name: ["ECONOMICS"],
        years: 2,
        lang: 'en',
        api: 'master-science/economics',
        lightColor: '#fcc',
        mediumColor : "#900",
        darkColor : "#600",
    }
}

let course = corsi.baBAE
// Esempi di url- global: ba/globalgovernance , B.A.: master-science/ba

export {colors, course , fonts, corsi}
