const Reader = require('./Reader');
const Processor = require('./Processor');
const table = require('./table');
const HtmlParser = require('./htmlparser')
const Writer = require('./Writer')
const PDFWriter = require('./PDFWriter')


let escritor = new Writer();
let leitor = new Reader();

async function main() {
    let dados = await leitor.Read("./users.csv")
    let dadosprocessados = Processor.Process(dados);
    
    let usuarios = new table(dadosprocessados);

    let html = await HtmlParser.Parse(usuarios);

    escritor.writer(Date.now() + ".html", html);
    PDFWriter.WriterPDF(Date.now() + ".PDF", html);

}

main();