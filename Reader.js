const fs = require('fs')

// Transforma em Promisse

const util = require('util');

class Reader {
    
    constructor(){
        this.Reader = util.promisify(fs.readFile);
    }

    async Read(filepath) {
        try {
            return await this.Reader(filepath, "utf8");
        }catch(err) {
            return undefined;
        }
    }

}

module.exports = Reader;