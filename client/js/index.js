// criação de tr dinamica pegando os campos do formulário.
//pegando os campos do formulário
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

//achando a tabela que vai ser inserida a nova tr criada a partir dos campos selecionados 
var tbody = document.querySelector('table tbody');

//criando evento de criação de tr ao clicar no botão incluir do formulário
document.querySelector('.form').addEventListener('submit', function (event) {

    //dizendo ao formulário para não recarregar a página ao clicar no botão submit
    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    // adicionando tr criada dinamicamente ao tbody
    tbody.appendChild(tr);

    // limpando a tela e deixando valores default

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});