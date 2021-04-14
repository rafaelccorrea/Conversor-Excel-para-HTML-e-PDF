class table{

    constructor(arr){
        //header é um atributo
        this.header = arr [0];
        arr.shift();
        this.rows = arr;
    }

    // Get Transforma a função em um atributo
    //chamando o get obrigatoriamente devera return algo.

    //Campo Virtual
    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }

}

module.exports = table;