import express from 'express'

export function runApp() {

    const PORT = process.env.PORT || 3000

    const app = express()

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.get('/', function (req, res) {
        res.json({ message: 'hello' })
    })

    app.listen(PORT, function() {
        console.log(`app run at : http://localhost:${PORT}`)
    })

}