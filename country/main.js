// console.log("toto est vide");
// let toto;

// $.ajax({
//     url:"https://restcountries.eu/rest/v2/all",
//     method:"GET",
//     success:function (response) {
//         // console.log(response)
//         toto=response;
//         console.log("toto dans l'ajax");
//         console.log(toto);
//     },
//     error:function (response) {
//         // console.log(response.statusText)
//     }
// })
// console.log("toto a-t-il des infos?");
// console.log(toto);

$.ajax({
    url:"https://restcountries.eu/rest/v2/all",
    method:"GET"
}).done(function(response){
response.forEach(country => {
    $("ul").append("<li>"+ country.name +"</li>")
});
}).fail(function(response){
    console.log(response);
})