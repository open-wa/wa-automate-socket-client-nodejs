const { SocketClient } = require('../dist/index.js')

const EASY_API_ADDR = "http://localhost:8002"

const TEST_NUM = "________@c.us"

const test = async () => {
    console.log('Starting')
    const sc = await SocketClient.connect(EASY_API_ADDR)
    console.log(`Client Connected:`, sc.socket.id)
    await sc.onAnyMessage(m=>console.log('ANY', m.body))
    await sc.sendText(TEST_NUM, 'Socket test').then(console.log)
}

test()