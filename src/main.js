
/* Adicionando função que monitora quando o DOM foi carregado */
document.addEventListener('DOMContentLoaded', function(){

    /* Selecionando TODOS os botões das abas pelo elemento data-que adicionamos a eles */
    /* Com isso teremos um retorno de ARRAY com todos os botões */
    const buttons = document.querySelectorAll('[data-tab-button]');


    /* Definindo variavel i = 0, enquanto i for menor que o número de elemntos dentro do array button i ganha + 1 */
    for(let i = 0; i < buttons.length; i++){

        /* Adicionando um evento que monitora quando o usuário clica nele */
        /* Mais sobre o addEventListener aqui --> https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener */
        buttons[i].addEventListener('click', function(botao){


            /* O addEventListener recebe um retorno do NOME de qual botao foi clicado(definido bom botao entre as parenteses) */

            /* "Debug no console para testar qual é o botao que foi clicado" */
            /* .target utilizado pois sem ele o console.log da todas as informações sobre o elemento que foi clicado */
            /* Após selecionar o target eu seleciono tambem o atributo que setamos no html o DATA */
            console.log(botao.target.dataset.tabButton);  


            /* Criando uma constante/variacvel om o valor do NOME do atributo que foi pego com EventListener*/
            const abaAlvo = botao.target.dataset.tabButton

            /* Como antes selecionamos apenas o nome do atributo agora temos que seleciona-lo em si, usanso o document.querySelecrtor
            podemos pesquisar o atributo das abas que tenha como valor o mesmo nome da cariavel abaAlvo*/
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);



            /* Execultando a função que remove/esconde a exibição de todas as abas */
            hideAllTabs();

            /* Logo depois de deletar todas as abas eu adiciono a classe que faz ser visivel apenas na constante que 
            foi clicada e selecionada. */
            aba.classList.add('shows__list--is-active');
            

            /* Chamando a função que retira a classe de estar ativo de todos os elementos botão */
            hideAllButtons();

            /* Seleciono o botão que foi clicado e adiciono nele a classe se ativo para que ele crie um border-bottom */
            botao.target.classList.add('shows__tabs__btn--is-active')


        })

    }
})

/* Criando uma função, sem nenhum parametro dentro das parenteses pois não é nescessário */
function hideAllTabs() {
        /* Atribuindo a uma variavel o valor das abas UL, recebendo um retorno em forma de array */
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        /* Definindo variavel i = 0, enquanto i for menor que o número de elemntos dentro do array das abas i ganha + 1 */
        for(let i = 0; i < tabsContainer.length; i++){

            /* Quando a função HideAllTabs fr chamada a classe que adicionamos no html para a aba ser visivel será removida */
            /* SERÁ REMOVIDA DE TODAS AS ABAS */
            tabsContainer[i].classList.remove('shows__list--is-active')
        }
}

/* Criando uma função que remove a aclasse ativa de todos os botões */
function hideAllButtons(){

    /* Instanciando todos os botões presentes no html */
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++){   

        /* Acessando a lista de classes de todos os botões e removendo a classe que ativa a borda */
        buttons[i].classList.remove('shows__tabs__btn--is-active')

    }




}