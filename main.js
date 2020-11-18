// let title = document.querySelector("h1");
let title = $("h1");

// let divs = document.querySelectorAll("div");
let divs = $("div");

// title.addEventListener("click", function(){console.log("toto")});
$("h1").click(function(){console.log("toto")});

// Le sélecteur correspondant à querySelectorAll() n'a pas besoin de boucle 
// pour fixer l'évènement sur chaque élément.
divs.click(function(){
    $(this).css({"background-color":"blue", "width":"100px", "height":"100px"});
})
// .hover correspond au double évènement mouseenter et mouseleave
// on lui passe 2 fonctions en paramètres la première correspond au mouseenter et la deuxième au mouseleave
$("#firstDiv").hover(function(){
    $(this).addClass("small")
}, function(){
    $(this).removeClass("small")
})
// .addClass ajoute une class à l'élément
// .removeClass retire une class à l'élément
// .toggleClass ajoute ou retire une class à l'élément en fonction de si cet élément possède ou non cette class.
$("#secondDiv").hover(function(){
    $(this).addClass("big")
}, function(){
    $(this).removeClass("big")
})

// .hide permet d'ajouter un display:none à un élément le faisant ainsi disparaitre
// .show permet de retirer le display:none posé sur l'élément pour le réafficher
// Ces deux methods peuvent avoir des paramètres optionnels 
// tel que le temps que va mettre l'élément à apparaître ou disparaitre
divs.dblclick(function(){
    $(this).hide(3000, function(){
        // () => {} correspond à une fonction fléchée. Ce type de fonction est apparu avec l'arrivée d'ES6
        // () correspond aux paramètres de la fonction ex: (e) pour les évènements
        // {} correspond au code qu'exécute la fonction. S'il n'y a qu'une ligne de code,
        // les {} ne sont pas obligatoires.
        setTimeout(() => $(this).show("slow"),2000);
    });
})
// .change lance une fonction au changement de valeur de l'input
$("input[type=email]").change(
    function(){
        // .val() récupère la valeur de l'input
        console.log($(this).val())
    }
)
// On sélectionne le button du formulaire
$(":button").click(
    function(e){
        e.preventDefault();
        // .serializeArray récupère l'ensemble des values d'un formulaire 
        // et les retourne sous forme de tableau d'objet.
        // .serialize récupère l'ensemble des values d'un formulaire et les retourne en chaine de caractère
        console.log($("form").serializeArray());
        console.log($("input[type=email]").val());
        console.log($(":password").val());
    }
)