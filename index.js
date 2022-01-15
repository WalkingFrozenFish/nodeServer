const http = require("http");

const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Node.js</title>
    <link rel="stylesheet" href="app.css">
</head>

<body>
    <div class="wrapper">

        <h1>Текст с сервера на nodejs</h1>
        <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Грамматики о своего раз
            снова имени ее безорфографичный над это.</p>

        <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem.</li>
        </ul>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nulla recusandae ea natus facilis id
            possimus, ullam maiores architecto rem.</p>

        <button>Click</button>

    </div>
    <script src="app.js"></script>
</body>

</html>`;
const css = `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrapper {
    width: 500px;
    padding: 20px;
}

h1 {
    color: green;
    text-align: center;
    margin-bottom: 30px;
}

p {
    text-align: justify;
    font-size: 20px;
    margin-bottom: 30px;
}

ul {
    margin-left: 30px;
    font-size: 20px;
    margin-bottom: 30px;
}

button {
    margin: auto;
    display: block; 
    padding: 10px 40px;
}`;
const js = `let button = document.querySelector("button");
button.addEventListener("click", () => {
    alert("Hello from nodejs");
})`;

http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
            break;

        case "/app.css":
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);
            break;

        case "/app.js":
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(js);
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("404 не найдено")
            break;
    }


}).listen(3000, () => {
    console.log("Сервер запущен");
})
