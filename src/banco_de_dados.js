const sequence = {
    _id: 1, 
    get id() {return this._id++}
}

const produtos = {}

function salvar_produto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function get_produto(id){
    return produtos[id] || {}
}

function delete_produto(){
    const produto = produtos[id]
    delete produtos[id]
    return produto 
}
 
function get_produtos(){
    return Object.values(produtos)
}


module.exports = {salvar_produto, get_produto, get_produtos, delete_produto}

