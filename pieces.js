const reponse= await fetch("pieces-autos.json");
const pieces=await reponse.json();

for(let i=0;i<pieces.length;i++){
  const article=pieces[i];

const titre=document.createElement("h2");
titre.innerText=article.nom;

const imageElement=document.createElement("img");
imageElement.src=article.image;

const paragraphe=document.createElement("p");
paragraphe.innerText=article.categorie??("aucun categorie");

const prix=document.createElement("p");
prix.innerText=`prix:${article.prix} $`;

const description=document.createElement("p");
description.innerText=article.description??"pas de description pour le moment";

const disponibilite=document.createElement("p");
disponibilite.innerText=article.disponibilite?"en stock":"Rupture de stock";

const avisBouton = document.createElement("button");
avisBouton.class="button"
avisBouton.dataset.id = article.id;

avisBouton.textContent = "Afficher les avis";

const div=document.createElement("div")
div.class="div"
div.appendChild(imageElement);
div.appendChild(titre);
div.appendChild(prix);
div.appendChild(paragraphe);
div.appendChild(description);
div.appendChild(disponibilite);
div.appendChild(avisBouton);
const fiches=document.querySelector(".fiches");
fiches.appendChild(div);

}

const buttonTrier=document.querySelector(".btn-trier")
buttonTrier.addEventListener('click' ,
    function(){
        const piecesOrdonnees=Array.from(pieces)
        piecesOrdonnees.sort(function(a,b){
            return b.prix-a.prix;
        });
    console.log(pieces)
})

const filter=document.querySelector(".filter");

filter.addEventListener('click',
    function(){

        pieces.filter(function(piece){
            return piece.prix<=35;
        })

})
const noms=pieces.map(piece=>piece.nom);
const ul=document.createElement("ul")
for(let i=0;i<noms.length;i++){
    const list=document.createElement("li");
    list.innerText=noms[i]; 
    ul.appendChild(list); 
}
const head=document.createElement("h2")
head.innerText="Noms des produits"
document.body.appendChild(head)
document.body.appendChild(ul)

 console.log(noms)


 const disponible=pieces.map(piece=>piece.disponibilite?"stock":"n'est pas en stock");
 console.log(disponible)
