const { createProvider } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const { createBotDialog } = require('@bot-whatsapp/contexts/dialogflow')

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterProvider = createProvider(BaileysProvider)

    createBotDialog({
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
