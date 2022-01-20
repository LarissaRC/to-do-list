const itens = document.getElementById('itens');

function addItem() {
    var listIten = document.createElement('div');
    var textItem = document.getElementById('item-txt');

    if (verifyText(textItem.value)) {
        var item = document.createElement('input');
        var label = document.createElement('label');
        var labelText = document.createTextNode(textItem.value);
    
        item.setAttribute('type', 'checkbox');
        item.setAttribute('name', textItem.value);
        item.setAttribute('id', textItem.value);
    
        label.setAttribute('for', textItem.value);
        label.appendChild(labelText);
    
        listIten.classList.add('item')
        listIten.appendChild(item);
        listIten.appendChild(label);
    
        textItem.value = "";
    
        itens.appendChild(listIten);
    } else {
        alert("Texto vazio!");
    }
    
}

function verifyText(text) {
    if(text == ""){
        return false;
    } else {
        return true;
    }
}