
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

let a=0;
let g=0;
let s=0;
let total=0;
    /* On affiche les infos récupérées dans l'url */
for (let k = 0; k < valeur.length; k++) { 
    if (nom[k]=="nom") {
        document.getElementById("Nom").innerHTML=nom[k] + " : " + valeur[k];
    }
    if (nom[k]=="prenom") {
        document.getElementById("Prenom").innerHTML=nom[k] + " : " + valeur[k];
    }
    if (nom[k]=="adresse") {
        document.getElementById("Adresse").innerHTML=nom[k] + " : " + valeur[k];
    }
    if (nom[k]=="ville") {
        document.getElementById("Ville").innerHTML=nom[k] + " : " + valeur[k];
    }
    if (nom[k]=="telephone") {
        document.getElementById("Telephone").innerHTML=nom[k] + " : " + valeur[k];
    }
    if (nom[k]=="base") {
        document.getElementById("Base").innerHTML+=valeur[k];
    }
    if (nom[k]=="taille") {
        document.getElementById("Taille").innerHTML+=valeur[k];
        switch (valeur[k]) {
            case "petit":
                document.getElementById("Taille").innerHTML+=" 6€";
                total+=6;
                break;
            case "moyen":
                document.getElementById("Taille").innerHTML+=" 8€";
                total+=8;
                break;
            case "grand":
                document.getElementById("Taille").innerHTML+=" 10€";
                total+=10;
                break;
        }
    }
    if (nom[k]=="accompagnement") {
        document.getElementById("Accompagnement").innerHTML+=valeur[k] + "<br> ";
        a++;
    }
    if (nom[k]=="garniture") {
        document.getElementById("Garniture").innerHTML+=valeur[k] + "<br>  ";
        g++;
    }
    if (nom[k]=="sauce") {
        document.getElementById("Sauce").innerHTML+=valeur[k] + "<br>  ";
        s++;
    }
}
document.getElementById("prixaccompagnement").innerHTML+=" "+a*1 + "€";
total+=a;
document.getElementById("Accompagnement").parentElement.style.height+=a*2 +3 + "em";
document.getElementById("Accompagnement").parentElement.style.marginTop=0.3 + "em";
if (a==0) {
    document.getElementById("Accompagnement").parentElement.parentElement.removeChild(document.getElementById("Accompagnement").parentElement);
}

document.getElementById("prixgarniture").innerHTML+=" "+g*0.5 + "€";
total+=0.5*g;
document.getElementById("Garniture").parentElement.style.height+=g*2 +3 + "em";
document.getElementById("Garniture").parentElement.style.marginTop=0.3 + "em";
if (g==0) {
    document.getElementById("Garniture").parentElement.parentElement.removeChild(document.getElementById("Garniture").parentElement);
}

document.getElementById("prixsauce").innerHTML+=" "+s*0.5 + "€";
total+=0.5*s;
document.getElementById("Sauce").parentElement.style.height+=s*2 +3 + "em";
document.getElementById("Sauce").parentElement.style.marginTop=0.3 + "em";
if (s==0) {
    document.getElementById("Sauce").parentElement.parentElement.removeChild(document.getElementById("Sauce").parentElement);
}

document.getElementById("Prix").innerHTML+=total + " €";