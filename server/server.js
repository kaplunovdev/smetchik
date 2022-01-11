const express = require('express');
const fs = require('fs');

const app = express();
const jsonParser = express.json()
app.use(express.static(__dirname + "/public"));

const filePath = "data.json"
app.post("/api/addPayment", jsonParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)
    const workName = req.body.work
    const priceCount = req.body.price

    const workResult = {
        work: {
            plitka: workName
        },
        price: {
            plitka: priceCount
        }
    }
    let data = fs.readFileSync(filePath, "utf8")

    let result = JSON.parse(data)

    result.push(workResult)
    data = JSON.stringify(result)
    fs.writeFileSync("data.json", data);
    res.send(workResult)
})



app.listen(3001, function () {
    console.log("Сервер ожидает подключения...");
});