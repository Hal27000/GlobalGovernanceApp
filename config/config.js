const colors = {
    lightColor: "#e6ffcc",
    mediumColor : "#4d9900",
    darkColor : "#006600",

    greyBack : "#f2f2f2",

    economiaColor:"#990033",
    tvColor:"#007c34",
    delphiGreenColor:'#2d7c5f'
}

const fonts = 'Roboto'

const course = {
    type: "Bachelor Degree",
    name: "GLOBAL GOVERNANCE",
    years: 3
}

// global: ba/globalgovernance , B.A.: master-science/ba

const sigla = 'ba/globalgovernance'

const api = 'https://economia.uniroma2.it/'+sigla+'/dida/orariolezioni/?formato=json'


export {colors, course, api, sigla, fonts}
