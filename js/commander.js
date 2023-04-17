let nbringredients = 0;

    /* Ajouter/Enlever Ingrédient : si il est selectionné, on l'ajoute et on met un attribut pour savoir qu'on la ajouté, pour pouvoir le supprimer / le réajouter après */
function ajouterpokee(item) {
    if (item.parentElement.parentElement.id!="taille" && item.parentElement.parentElement.id!="base") {
        if (item.getAttribute("alt")=="added") {
            for (let i = 2; i < document.getElementById("ingredientsmypoke").children.length; i++) {
                console.log(document.getElementById("ingredientsmypoke").children[i].firstElementChild);
                if (document.getElementById("ingredientsmypoke").children[i].getAttribute("value")==item.lastChild.previousSibling.innerHTML) {
                    document.getElementById("ingredientsmypoke").removeChild(document.getElementById("ingredientsmypoke").children[i].nextSibling);
                    document.getElementById("ingredientsmypoke").removeChild(document.getElementById("ingredientsmypoke").children[i]);
                    item.removeAttribute("alt");

                    nbringredients--;
                    document.getElementById("nbringredientsselectionne").innerHTML=nbringredients;
                }
            }
        }
        else if (item.getAttribute("alt")==null) {
            item.setAttribute("alt","added");
            let node=document.createElement("span");
            let textnode=document.createTextNode(item.lastChild.previousSibling.innerHTML);
            node.appendChild(textnode);
            node.setAttribute("name", item.lastChild.previousSibling.innerHTML);
            node.setAttribute("value", item.lastChild.previousSibling.innerHTML);
            node.setAttribute("class", "item-text");

            let i=document.createElement("img");
            i.setAttribute("src", "assets/" + item.lastChild.previousSibling.id + ".png");

            let n=document.createElement("li");
            n.setAttribute("class", "items");
            n.setAttribute("value", item.lastChild.previousSibling.innerHTML);
            n.appendChild(i);
            n.appendChild(node);
            document.getElementById("ingredientsmypoke").appendChild(n);

            let nodeh=document.createElement("input");
            nodeh.setAttribute("type","hidden");
            nodeh.setAttribute("name", item.parentElement.parentElement.id);
            nodeh.setAttribute("value", item.lastChild.previousSibling.innerHTML);
            document.getElementById("ingredientsmypoke").appendChild(nodeh); 
            
            nbringredients++;
            document.getElementById("nbringredientsselectionne").innerHTML=nbringredients;
        }
    }
    commander();
}



    /* Permet d'afficher la taille et la base choisies dans le panier*/
function taille(t) {
    document.getElementById("tailleselectionee").innerHTML=t.lastChild.previousSibling.innerHTML;
    document.getElementById("taillet").value=t.lastChild.previousSibling.innerHTML;
    document.getElementById("imagetaille").src=("assets/" + t.lastChild.previousSibling.id + ".png");
    
}
function base(b) {
    document.getElementById("baseselectionee").innerHTML=b.lastChild.previousSibling.innerHTML;
    document.getElementById("baseb").value=b.lastChild.previousSibling.innerHTML;
    document.getElementById("imagebase").src=("assets/" + b.lastChild.previousSibling.id + ".png");
}



/* Fonction permettant de rendre le bouton commander valide si les conditions sont vérifiées */
function commander() {
  if (document.getElementById("nbringredientsselectionne").innerHTML==document.getElementById("nombreingredientschoisi").innerHTML && document.getElementById("tailleselectionee").innerHTML!="selectioner taille" && document.getElementById("baseselectionee").innerHTML!="selectioner base") {
    document.getElementById("commander").removeAttribute("onclick");
    document.getElementById("commander").removeAttribute("type");
    document.getElementById("commander").setAttribute("type","submit");
  }
  else {
    document.getElementById("commander").setAttribute("onclick", "alert(`Veuillez sélectionner une base, une taille, et le bon nombre d'ingrédients.`)");
    document.getElementById("commander").removeAttribute("type");
    document.getElementById("commander").setAttribute("type","button");
  }
}
