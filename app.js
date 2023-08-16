const {
    createBot,
    createProvider,
    createFlow,
    addKeyword } = require('@bot-whatsapp/bot')

const QRPortal= require('@bot-whatsapp/portal')

const WsProvider = require('@bot-whatsapp/provider/baileys')
const DBProvider = require('@bot-whatsapp/database/mock')

// -----------------------------------Opciones Menu General------------------------------------

const flujoReserva = addKeyword('1', '1.', 'reserva')
.addAnswer('*1. Quiero Reservar el Auditorio Tecnológico o Sala de Conferencias.*')
.addAnswer('Para solicitar una reserva comuníquese por correo o teléfono con la oficina. \n*Correo: _usm@Udenar.edu.co_* \n*Teléfono: _7244309 Ext. 1118_*')
.addAnswer(['Necesitas algo mas? (Si / No)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    if (['si', 's','no', 'n'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                console.log('opcion Si reserva', opcion)
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                console.log('opcion No reserva', opcion)
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoSugerencias = addKeyword('3', '3.', 'sugerencias')
.addAnswer('*3. Quiero hacer sugerencias.*')
.addAnswer('Estamos cambiando para mejorar, por favor déjanos saber tu sugerencia:\nhttps://forms.office.com/Pages/ResponsePage.aspx?id=6wzDLf2QwEK2PFrN0SiQsQI5A-F1Ff5AqD1K2NOiTGpUNU5EUEZYRzU1WFNLU1k3UjFOM1VaRkMzSC4u')
.addAnswer(['Necesitas algo mas? (Si / No)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    console.log('opcion Sugerencias', opcion)
    if (['si', 's','no', 'n'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                console.log('opcion Si sugerencias', opcion)
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                console.log('opcion No sugerencias', opcion)
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoConceptos=addKeyword('4','4.','concepto')
.addAnswer('*4.Quiero solicitar un concepto técnico*')
.addAnswer('Para solicitar un concepto técnico comuníquese por correo o teléfono con la oficina. \n*Correo: _usm@Udenar.edu.co_* \n*Teléfono: _7244309 Ext. 1118_*\nEspecifique la dependencia y el motivo de solicitud (Compras, Verificar estado)')
.addAnswer(['Necesitas algo mas? (Si / No)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    if (['si', 's','no', 'n'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoMantenimiento=addKeyword('5','5.','mantenimiento')
.addAnswer('*5.Quiero solicitar Mantenimiento*')
.addAnswer('Recuerde que el equipo debe pertenecer a la *Universidad de Nariño* para realizarle manimiento Software o Hardware.\nPara ello debe dirigirse de forma presencial a la oficina de Soporte IIT ubicada en el 3 piso del Bloque Tecnológico')
.addAnswer(['Necesitas algo mas? (Si / No)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    if (['si', 's','no', 'n'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoCamaras=addKeyword('6','6.','camaras')
.addAnswer('*6.Quiero solicitar grabaciones CCTV*')
.addAnswer('Dirija un correo electrónico a *usm@udenar.edu.co* especificando el motivo de su solicitud, seguido de sus datos personales como nombre, cédula, código, no olvide el aula y la fecha con hora exacta.')
.addAnswer(['Necesitas algo mas? (Si / No)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    if (['si', 's','no', 'n'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

// --------------------------------------------------------------------------------------------
const flujoStatgraphics=addKeyword('1')
.addAnswer('QR para compartir el manual a tus compañeros',{media:'https://i.imgur.com/9Wp44fh.jpg'})
.addAnswer(['Link del Manual', 'https://liveudenaredu-my.sharepoint.com/:f:/g/personal/usm_udenar_edu_co/ElGNjC4hIIlPnryZJNDoCYgBtVeyN-LeW6j0j_S5Hge4VA?e=As4uwz'])
.addAnswer(['Necesitas otro manual? (Si / No) o Necesitas algo mas? (Menu)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    console.log('opcion Statgraphics', opcion)
    if (['si', 's','no', 'n', 'menu', 'menú'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                console.log('opcion Si Statgraphics', opcion)
                await gotoFlow(flujoManuales)
                break;
            case 'menu'||'menú':
                console.log('opcion Menu Statgraphics', opcion)
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                console.log('opcion No Statgraphics', opcion)
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})


const flujoMicrosoft=addKeyword('2')
.addAnswer('QR para compartir el manual a tus compañeros',{media:'https://i.imgur.com/otqgWVh.jpg'})
.addAnswer(['Link del Manual', 'https://liveudenaredu-my.sharepoint.com/:f:/g/personal/usm_udenar_edu_co/Et-jxM-cgAZBg7-fJ3lhBh8Ba6FOpPCe1s1aO5MX-J4mig?e=0dbOce'])
.addAnswer(['Necesitas otro manual? (Si / No) o Necesitas algo mas? (Menu)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    console.log('opcion Microsoft', opcion)
    if (['si', 's','no', 'n', 'menu', 'menú'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                console.log('opcion Si Microsoft', opcion)
                await gotoFlow(flujoManuales)
                break;
            case 'menu'||'menú':
                console.log('opcion Menu Microsoft', opcion)
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                console.log('opcion No Microsoft', opcion)
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoRevit = addKeyword('3')
.addAnswer('QR para compartir el manual a tus compañeros', {media:'https://i.imgur.com/2N4HkYD.jpg'})
.addAnswer(['Link del Manual', 'https://liveudenaredu-my.sharepoint.com/:f:/g/personal/usm_udenar_edu_co/EhE8dQk_PHxDj2QFglSst7UBW1o-CHaS5XDpzT5N9hKl_Q?e=khQulb'])
.addAnswer(['Necesitas otro manual? (Si / No) o Necesitas algo mas? (Menu)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    console.log('opcion Revit', opcion)
    if (['si', 's','no', 'n', 'menu', 'menú'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                console.log('opcion Si Revit', opcion)
                await gotoFlow(flujoManuales)
                break;
            case 'menu'||'menú':
                console.log('opcion Menu Revit', opcion)
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                console.log('opcion No Revit', opcion)
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})


const flujoCabri = addKeyword('4')
.addAnswer('QR para compartir el manual a tus compañeros', {media:'https://i.imgur.com/tQ376kA.jpg'})
.addAnswer('Link del manual', 'https://liveudenaredu-my.sharepoint.com/:f:/g/personal/usm_udenar_edu_co/EgfvVBKGouxClUnqcWJwlTUBTUfvLAeEuUpWmNmatCwD9w?e=VS1lHu')
.addAnswer(['Necesitas otro manual? (Si / No) o Necesitas algo mas? (Menu)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    console.log('opcion Cabri', opcion)
    if (['si', 's','no', 'n', 'menu', 'menú'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                console.log('opcion Si Cabri', opcion)
                await gotoFlow(flujoManuales)
                break;
            case 'menu'||'menú':
                console.log('opcion Menu Cabri', opcion)
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                console.log('opcion No Cabri', opcion)
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoAutocad = addKeyword('5')
.addAnswer('QR para compartir el manual a tus compañeros', {media:'https://i.imgur.com/BmtkdhK.jpg'})
.addAnswer('Link del manual', 'https://liveudenaredu-my.sharepoint.com/:f:/g/personal/usm_udenar_edu_co/EuJjfmI1ojREuM5ux-YoYCgBggurQtbKf8aqh72JwH-bjw?e=QDv19A')
.addAnswer(['Necesitas otro manual? (Si / No) o Necesitas algo mas? (Menu)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    console.log('opcion Autocad', opcion)
    if (['si', 's','no', 'n', 'menu', 'menú'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                console.log('opcion Si Autocad', opcion)
                await gotoFlow(flujoManuales)
                break;
            case 'menu'||'menú':
                console.log('opcion Menu Autocad', opcion)
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                console.log('opcion No Autocad', opcion)
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoNavisworks = addKeyword('6')
.addAnswer('QR para compartir el manual a tus compañeros', {media:'https://i.imgur.com/83aS5R5.png'})
.addAnswer(['Link del Manual', 'https://liveudenaredu-my.sharepoint.com/personal/usm_udenar_edu_co/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fusm%5Fudenar%5Fedu%5Fco%2FDocuments%2FGUIAS%20DE%20INSTALACI%C3%93N%2FGUIA%20NAVISWORKS&view=0'])
.addAnswer(['Necesitas otro manual? (Si / No) o Necesitas algo mas? (Menu)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    console.log('opcion Navisworks', opcion)
    if (['si', 's','no', 'n', 'menu', 'menú'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                console.log('opcion Si Navisworks', opcion)
                await gotoFlow(flujoManuales)
                break;
            case 'menu'||'menú':
                console.log('opcion Menu Navisworks', opcion)
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                console.log('opcion No Navisworks', opcion)
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoGeo5 = addKeyword('7')
.addAnswer('QR para compartir el manual a tus compañeros', {media:'https://i.imgur.com/Nv3a1Gi.png'})
.addAnswer(['Link del Manual', 'https://liveudenaredu-my.sharepoint.com/personal/usm_udenar_edu_co/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fusm%5Fudenar%5Fedu%5Fco%2FDocuments%2FGUIAS%20DE%20INSTALACI%C3%93N%2FGUIA%20GEO5&ga=1'])
.addAnswer(['Necesitas otro manual? (Si / No) o Necesitas algo mas? (Menu)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    console.log('opcion Navisworks', opcion)
    if (['si', 's','no', 'n', 'menu', 'menú'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                console.log('opcion Si Navisworks', opcion)
                await gotoFlow(flujoManuales)
                break;
            case 'menu'||'menú':
                console.log('opcion Menu Navisworks', opcion)
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                console.log('opcion No Navisworks', opcion)
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoRoc = addKeyword('8')
.addAnswer('QR para compartir el manual a tus compañeros', {media:'https://i.imgur.com/tAviKM2.png'})
.addAnswer(['Link del Manual', 'https://liveudenaredu-my.sharepoint.com/personal/usm_udenar_edu_co/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fusm%5Fudenar%5Fedu%5Fco%2FDocuments%2FGUIAS%20DE%20INSTALACI%C3%93N%2FGUIA%20ROCSCIENCE&view=0'])
.addAnswer(['Necesitas otro manual? (Si / No) o Necesitas algo mas? (Menu)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    console.log('opcion Navisworks', opcion)
    if (['si', 's','no', 'n', 'menu', 'menú'].includes(opcion)) {
        switch (opcion) {
            case 'si'||'s':
                console.log('opcion Si Navisworks', opcion)
                await gotoFlow(flujoManuales)
                break;
            case 'menu'||'menú':
                console.log('opcion Menu Navisworks', opcion)
                await gotoFlow(flujoAuxiliar)
                break;
            case 'no'||'n':
                console.log('opcion No Navisworks', opcion)
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoManuales =addKeyword('__si__', '__s__', '2')
.addAnswer( ['📚 Estos son los manuales disponibles \n','1.Manual Statgrahics ❇️\n','2.Manual Microsoft ❇️ \n','3.Manual Revit ❇️ \n','4.Manuales Cabri ❇️ \n','5. Manual Autocad ❇️ \n','6. Manual NavisWorks ❇️ \n', '7. Manual Geo5 ❇️ \n', '8. Manual RocScience ❇️ \n', '9. Regresar al Menu Principal'],{capture:true},async(ctx,{flowDynamic,fallBack, gotoFlow})=>{

    let opcion = ctx.body.trim()
    console.log('opcion Manuales', opcion)

    const opcionesMenu = {
        1: async(flujoStatgraphics)=>{
            console.log('opcion Statgraphics 1')
            await flowDynamic(flujoStatgraphics)
        },
        2: async(flujoMicrosoft)=>{
            console.log('opcion Microsoft 2')
            await flowDynamic(flujoMicrosoft)
        },
        3: async(flujoRevit)=>{
            console.log('opcion Revit 3')
            await flowDynamic(flujoRevit)
        },
        4: async(flujoCabri)=>{
            console.log('opcion Cabri 4')
            await flowDynamic(flujoCabri)
        },
        5: async(flujoAutocad)=>{
            console.log('opcion Autocad 5')
            await flowDynamic(flujoAutocad)
        },
        6: async(flujoNavisworks)=>{
            console.log('opcion Navisworks 6')
            await flowDynamic(flujoNavisworks)
        },
        7: async(flujoGeo5) => {
            await flowDynamic(flujoGeo5)
        },
        8: async(flujoRoc) => {
            await flowDynamic(flujoRoc)
        },
        9: async() => {
            console.log('opcion Volver Principal 7')
            await gotoFlow(flujoAuxiliar)
        }     
    
    }

    if (opcionesMenu[opcion]) {
        console.log('opcion dentro manuales', opcion)
        opcionesMenu[opcion]()
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
  
},[flujoCabri, flujoMicrosoft, flujoRevit, flujoStatgraphics, flujoAutocad, flujoNavisworks, flujoGeo5, flujoRoc])


const flujoAuxiliar = addKeyword('__menu__')
.addAnswer('Selecciona una opción para poder ayudarte:')
.addAnswer(['1. Reservar Auditorio Tecnológico o Sala de Conferencias.', '2. Manuales de Instalación.', '3. Sugerencias', '4. Cancelar'],{capture:true}, async(ctx,{flowDynamic,gotoFlow,fallBack, endFlow})=>{

    let opcion = ctx.body.trim()
    console.log('opcion Auxiliar', opcion)

    // let aux = '##'+ctx.body.trim()+'##'
    // console.log('aux', aux)

    const opcionesMenu = {
        1: async(flujoReserva)=>{
            console.log('opcion Reserva Auxiliar')
            await flowDynamic(flujoReserva)
        },
        2: async () => {
            console.log('opcion Manuales Auxiliar')
            await gotoFlow(flujoManuales)
        },

       
            3: async(flujoSugerencias)=>{
                console.log('opcion Sugerencias')
                await flowDynamic(flujoSugerencias)
            },
            4:async(flujoConceptos)=>{
                console.log('opcion Conceptos')
                await flowDynamic(flujoConceptos)
            }
            ,
            5:async(flujoMantenimiento)=>{
                console.log('opción Mantenimiento')
                await flowDynamic(flujoMantenimiento)
            }
            ,
            6:async(flujoCamaras)=>{
                console.log('opcion Camaras')
                await flowDynamic(flujoCamaras)
            }
            ,
            7: async() => {
                console.log('opción Cancelar Auxiliar')
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'}) 
            }     

    }
    
    if (opcionesMenu[opcion]) {
        console.log('opcion dentro auxiliar', opcion)
        opcionesMenu[opcion]()
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }

},[flujoReserva, flujoSugerencias, flujoManuales,flujoConceptos,flujoMantenimiento,flujoCamaras])

flujoInicial = addKeyword('hola', 'hols','buenos dias','hi','hello','buenos días','buenas tardes','buenas noches')
.addAnswer('¡¡Hola!!',{media:'https://i.imgur.com/y3iK7Je.png'})
.addAnswer('Gracias por comunicarte con el chat Bot 🤖 de la oficina de Infraestructura de Informática y Telecomunicaciones de la Universidad de Nariño')
.addAnswer('Selecciona una opción para poder ayudarte:')
.addAnswer(['1. Reservar Auditorio Tecnológico o Sala de Conferencias.', '2. Manuales de Instalación.', '3. Sugerencias', '4. Cancelar'],{capture:true}, async(ctx,{flowDynamic, gotoFlow,fallBack, endFlow})=>{

    let opcion = ctx.body.trim()
    console.log('opcion Inicial', opcion)

    // let aux = '##'+ctx.body.trim()+'##'
    // console.log('aux', aux)

    const opcionesMenu = {
        1: async(flujoReserva)=>{
            console.log('opcion Reserva Inicial')
            await flowDynamic(flujoReserva)
        },
        2: async()=>{
            console.log('opcion Manuales Inicial')
            await gotoFlow(flujoManuales)
        },
        3: async(flujoSugerencias)=>{
            console.log('opcion Sugerencias')
            await flowDynamic(flujoSugerencias)
        },
        4:async(flujoConceptos)=>{
            console.log('opcion Conceptos')
            await flowDynamic(flujoConceptos)
        }
        ,
        5:async(flujoMantenimiento)=>{
            console.log('opción Mantenimiento')
            await flowDynamic(flujoMantenimiento)
        }
        ,
        6:async(flujoCamaras)=>{
            console.log('opcion Camaras')
            await flowDynamic(flujoCamaras)
        }
        ,
        7: async() => {
            console.log('opción Cancelar Auxiliar')
            await endFlow({body:'Fue un gusto atenderte, hasta pronto'}) 
        }       
    }

    if (opcionesMenu[opcion]) {
        console.log('opcion dentro inicial', opcion)
        opcionesMenu[opcion]()
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }

},[flujoReserva, flujoSugerencias, flujoManuales,flujoConceptos,flujoMantenimiento,flujoCamaras])

const main=async()=>{
    const adapterDB=new DBProvider()
    const adapterFlow=createFlow([flujoInicial, flujoAuxiliar])
    const adapterProvider=createProvider(WsProvider)

    createBot({
        flow:adapterFlow,
        provider:adapterProvider,
        database:adapterDB,
    })

}

QRPortal()
main()


// console.log("soooooooooooooo");
//     console.log(nombre)
//     console.log(ctx.body)
//     if(ctx.body!=1 && ctx.body!=2)
//     {
//        return fallBack()
//     }
//     else if(ctx.body==1)
//         return flujoStatgraphics
//     else if(ctx.body==2)
//          return flujoMicrosoft
//     else if(ctx.body==6)
//         return flowDynamic(flujoPrincipal)


// flujo principal

    // console.log('opcion', opcion)



    // let aux = '##'+ctx.body.trim()+'##'
    // console.log('aux', aux)

    // if (['1', '2', '3', '4', '5', '6', '7'].includes(opcion)) {
    //     switch (opcion) {
    //         case 1:
    //             await flowDynamic(flujoStatgraphics)
    //         case 2:
    //             await flowDynamic(flujoMicrosoft)
    //         case 3:
    //             await flowDynamic(flujoRevit)
    //         case 4:
    //             await flowDynamic(flujoCabri)
    //         case 5:
    //             await flowDynamic(flujoAutocad)
    //         case 6:
    //             await flowDynamic(flujoNavisworks)
    //         case '7':
    //             console.log('opcion dentro', opcion)
    //             await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
    //             break;
    //     }
    // }else{
    //     let aux = '##'+ctx.body.trim()+'##'
    //     console.log('Aux else', aux)
    //     await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    // }