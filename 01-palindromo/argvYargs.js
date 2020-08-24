const opts = {
    frase: {
        demand: true,
        alias: 'f'
    }
}

const argvYargs = require('yargs')
                    .command("exec", "Ejecuta la app", opts);

module.exports = argvYargs;
