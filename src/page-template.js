const generateEmployeeCards = employeesArray => {
    return `
        <section class='row-cards'>
            <div class='col'>
                ${employeesArray
            .filter(({ role }) => role = 'Manager')
            .map(({ name, role, id, email, officeNumber }) => {
                return `
                    <div class='card-container'>
                        <div class='card-title-row'>
                            <div class='card-col-title'>
                                <h2>${name}</h2>
                            </div>
                            <div class='card-col-title'>
                                <h3>${role}</h3>
                            </div>
                        </div>
                        <div class='card-body-row'>
                            <div class='card-col-body'>
                                <h4>ID: ${id}</h4>
                            </div>
                            <div class='card-col-body'>
                                <a href='mailto:${email}'>Email: ${email}</a>
                            </div>
                            <div class='card-col-body'>
                                <h4>Office Number: ${officeNumber}</h4>
                            </div>
                        </div>
                    </div>
                `;
            })
            .join('')}
            </div>
        </section>
    `;
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