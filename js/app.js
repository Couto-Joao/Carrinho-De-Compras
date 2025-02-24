let somaTotal;
limpar();

function adicionar() {
  let produtos = document.getElementById('produto').value;
  let nomeProduto = produtos.split('-')[0];
  let valorProduto = produtos.split('R$')[1];
  let quantidadeProduto = document.getElementById('quantidade').value;

  //validação da quantidade de produto
  if(quantidadeProduto >= 101) {
    alert('Erro! O máximo de produtos é 100.');
    document.getElementById('quantidade').value = '';
    return;
  }
  
  //Cálculo do subtotal
  let subtotal = (quantidadeProduto * valorProduto);
    
  //Adicionando no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
  </section>`;

  //Atualizando valor total
  somaTotal = somaTotal + subtotal;
  let valorTotal = document.getElementById('valor-total');
  valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${somaTotal}</span>`;
    
  document.getElementById('quantidade').value = '';
}

function limpar() {
  somaTotal = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$';
  document.getElementById('quantidade').value = '';
}

