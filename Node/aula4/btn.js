const btn = window.document.querySelector('#btn');
const sb = window.document.querySelector('#framework');


btn.onclick = (event) => {
    event.preventDefault();
    // mostra o indice da selecao
    alert(sb.selectedIndex);
}