const generateEmployeesCards = employeesArray => {

}

module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1></h1>
        </header>
        <main class="container">
            ${generateEmployeesCards(templateData)}
        </main>
    </body>
    </html>
    `;
};