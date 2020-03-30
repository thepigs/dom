function appendHtml(id,html){
    var div = document.createElement("DIV");
    div.setAttribute("id",id);
    div.insertAdjacentHTML('afterbegin', html);
    document.body.appendChild(div)
    return div
}