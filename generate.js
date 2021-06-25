// const readline = require('readline');

const mediaTypes = require('./mediaTypes');

// const posit = function (query) {
//     const reader = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });

//     return new Promise (resolve => reader.question(`${query}:\n`, answer => {
//         reader.close();
//         resolve(answer);
//     }))
// }

const finalHTMLArr = [];
const finalCSSArr = [];
// const queryName = await posit(`what's the name of the query?`);
// const values = [];
// while (true) {
//     const valueName = await posit(`what's the name of the value?`)
//     if (valueName === 'n') {
//         break;
//     }

//     values.push(valueName);
// }
// console.log(values)

const generate = function (queryName, values) {
    let css = `#${queryName} .support,\n#${queryName} .`;

    css += values.join(`,\n#${queryName} .`)
    css += ` {
    display: none;
}`;

    values.forEach(value => {
        css += `\n@media (${queryName}: ${value}) {
    #${queryName} .support {
        display: inline;
    }
    #${queryName} .no-support {
        display: none;
    }
    #${queryName} .${value} {
        display: inline;
    }
}`;
    })

    let html = `<div id="${queryName}">
    <span class="no-support">
        This browser doesn't support <pre>${queryName}</pre>.
    </span>
    <span class="support">
        My <pre>${queryName}</pre> is ${values.map(value => `<span class="${value}">${value}</span>`).join('')}.
    </span>
</div>`;
    return {css, html}
}

const generatedArr = Object.keys(mediaTypes).map(queryName => generate(queryName, mediaTypes[queryName]));

console.log(generatedArr.map(x => x.css).join('\n'));
console.log("\n\n\n")
console.log(generatedArr.map(x => x.html).join('\n'));
