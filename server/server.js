const express = require('express');
const fs = require('fs');

const app = express();
const jsonParser = express.json()
app.use(express.static(__dirname + "/"));

const file = "data.json"
app.post("http://localhost:3000/payment", jsonParser, (req, res) => {
    if (!req.body) return res.send('Ошибка - нет тела запроса')
    console.log(req.body)
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
    let data = fs.readFileSync(file, "utf8")

    let result = JSON.parse(data)

    result.push(workResult)
    data = JSON.stringify(result)
    fs.writeFileSync("data.json", data);
    res.send(workResult)
})
app.get("http://localhost:3001/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});


app.listen(3001, function () {
    console.log("Сервер ожидает подключения...");
});