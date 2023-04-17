    /* On récupère les infos dans l'url et on les place dans des tableaux pour les utiliser */
nom = new Array();
valeur = new Array();
url = window.location.search.slice(1,window.location.search.length);
listParam = url.split("&");
for(i=0;i<listParam.length;i++){
    laListe = listParam[i].split("=");
    nom[i] = laListe[0];
    valeur[i] = laListe[1];
    valeur[i]=valeur[i].replaceAll("+", " ");  //enleve les + pour les noms composés
}

    /* On crée des input cachés pour pouvoir sen servir dans la prochaine page */
for (let k = 0; k < valeur.length-1; k++) {
    let nodeh=document.createElement("input");
    nodeh.setAttribute("type","hidden");
    nodeh.setAttribute("name", nom[k]);
    nodeh.setAttribute("value", valeur[k]);
    document.getElementById("commande").appendChild(nodeh); 
}
