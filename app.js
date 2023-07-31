const { 
    createBot,
    createProvider, 
    createFlow, 
    addKeyword } = require('@bot-whatsapp/bot')

const QRPortal= require('@bot-whatsapp/portal')

const WsProvider = require('@bot-whatsapp/provider/baileys')
const DBProvider = require('@bot-whatsapp/database/mock')

let nombre;

const flujoStatgraphics=addKeyword('1')
.addAnswer('QR para compartir el manual a tus compañeros',{media:'https://i.imgur.com/9Wp44fh.jpg'})
.addAnswer(['Link del Manual', 'https://liveudenaredu-my.sharepoint.com/:f:/g/personal/usm_udenar_edu_co/ElGNjC4hIIlPnryZJNDoCYgBtVeyN-LeW6j0j_S5Hge4VA?e=As4uwz'])
.addAnswer(['Necesitas otro manual? (Si / No)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    if (['si', 's','no', 'n'].includes(opcion)) {
        switch (opcion) {
            case 'si':
                await gotoFlow(flujoAuxiliar)
            case 's':
                await gotoFlow(flujoAuxiliar)
            case 'no':
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
            case 'n':
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
.addAnswer(['Necesitas otro manual? (Si / No)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    if (['si', 's','no', 'n'].includes(opcion)) {
        switch (opcion) {
            case 'si':
                await gotoFlow(flujoAuxiliar)
            case 's':
                await gotoFlow(flujoAuxiliar)
            case 'no':
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
            case 'n':
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
.addAnswer(['Necesitas otro manual? (Si / No)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    if (['si', 's','no', 'n'].includes(opcion)) {
        switch (opcion) {
            case 'si':
                await gotoFlow(flujoAuxiliar)
            case 's':
                await gotoFlow(flujoAuxiliar)
            case 'no':
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
            case 'n':
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
.addAnswer(['Necesitas otro manual? (Si / No)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    if (['si', 's','no', 'n'].includes(opcion)) {
        switch (opcion) {
            case 'si':
                await gotoFlow(flujoAuxiliar)
            case 's':
                await gotoFlow(flujoAuxiliar)
            case 'no':
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
            case 'n':
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
.addAnswer(['Necesitas otro manual? (Si / No)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    if (['si', 's','no', 'n'].includes(opcion)) {
        switch (opcion) {
            case 'si':
                await gotoFlow(flujoAuxiliar)
            case 's':
                await gotoFlow(flujoAuxiliar)
            case 'no':
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
            case 'n':
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoNavisworks = addKeyword('6')
.addAnswer('QR para compartir el manual a tus compañeros', {media:'https://i.imgur.com/83aS5R5.png'})
.addAnswer('Link del manual', 'https://liveudenaredu-my.sharepoint.com/:f:/g/personal/usm_udenar_edu_co/EuGsZMaRajVEtfKQ8FdRajsBTFU6nB9toNSBUJMp7ry2eg?e=CNABZR')
.addAnswer(['Necesitas otro manual? (Si / No)'],{capture:true},async (ctx,{fallBack, gotoFlow, endFlow})=>{
    let opcion = ctx.body.trim().toLowerCase()
    if (['si', 's','no', 'n'].includes(opcion)) {
        switch (opcion) {
            case 'si':
                await gotoFlow(flujoAuxiliar)
            case 's':
                await gotoFlow(flujoAuxiliar)
            case 'no':
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
            case 'n':
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
})

const flujoAuxiliar = addKeyword('si', 's')
.addAnswer( ['Estos son los manuales disponibles\n','1.Manual Statgrahics\n','2.Manual Microsoft\n','3.Manual Revit\n','4.Manuales Cabri\n','5. Manual Autocad\n','6. Manual NavisWorks\n', '7. Cancelar'],{capture:true}, async(ctx,{flowDynamic,fallBack, endFlow})=>{
    
    let opcion = ctx.body.trim()

    if ([1,2,3,4,5,6,7].includes(opcion)) {
        switch (opcion) {
            case 1:
                await flowDynamic(flujoStatgraphics)
            case 2:
                await flowDynamic(flujoMicrosoft)
            case 3:
                await flowDynamic(flujoRevit)
            case 4:
                await flowDynamic(flujoCabri)
            case 5:
                await flowDynamic(flujoAutocad)
            case 6:
                await flowDynamic(flujoNavisworks)
            case 7:
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        console.log('opcion', opcion)
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    }
},[flujoCabri, flujoMicrosoft, flujoRevit, flujoStatgraphics, flujoAutocad, flujoNavisworks] )

const flujoPrincipal=addKeyword('hola','buenos dias','hi','hello','buenos días','buenas tardes','buenas noches')
.addAnswer(['Bienvenido al centro de Soporte IIT','Por favor ingresa tu nombre'],
{capture:true},(ctx,{flowDynamic})=>{
    nombre=ctx.body
     return flowDynamic(`Perfecto *${nombre}*, continuamos...`)
})
.addAnswer(['Estos son los manuales disponibles:\n','1.Manual Statgrahics\n','2.Manual Microsoft\n','3.Manual Revit\n','4.Manuales Cabri\n','5. Manual Autocad\n','6. Manual NavisWorks\n', '7. Cancelar'],{capture:true}, async(ctx,{flowDynamic,fallBack, endFlow})=>{
  
    let opcion = ctx.body.trim()

    let aux = '##'+ctx.body.trim()+'##'
    console.log('opcion', aux)

    if ([1,2,3,4,5,6,7].includes(opcion)) {
        switch (opcion) {
            case 1:
                await flowDynamic(flujoStatgraphics)
            case 2:
                await flowDynamic(flujoMicrosoft)
            case 3:
                await flowDynamic(flujoRevit)
            case 4:
                await flowDynamic(flujoCabri)
            case 5:
                await flowDynamic(flujoAutocad)
            case 6:
                await flowDynamic(flujoNavisworks)
            case 7:
                await endFlow({body:'Fue un gusto atenderte, hasta pronto'})
                break;
        }
    }else{
        let aux = '##'+ctx.body.trim()+'##'
        console.log('opcion', aux)
        await fallBack('Ops, no entiendo tu respuesta, por favor intenta de nuevo')
    } 
}, [flujoCabri, flujoMicrosoft, flujoRevit, flujoStatgraphics, flujoAutocad, flujoNavisworks])

// const flujoSecundario=addKeyword('no', 'gracias', '6', 'cancelar').addAnswer('Fue un gusto atenderte')

const main=async()=>{
    const adapterDB=new DBProvider()
    const adapterFlow=createFlow([flujoPrincipal, flujoAuxiliar])
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
    