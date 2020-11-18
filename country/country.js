$.ajax({
    url:"https://restcountries.eu/rest/v2/lang/en?fields=name;population;capital;currencies",
    success:function(response){
        $("#nbEn").text(response.length);
        response.forEach(country => {
            $("#countriesEn").append("<tr><td>"+ country.name +"</td><td>"+ country.capital +"</td><td>"+ country.currencies[0].name +"</td><td>"+ country.population +"</td></tr>")
        });
    }
})

$.ajax({
    url:"https://restcountries.eu/rest/v2/lang/fr?fields=name;population;capital;currencies",
    success:function(response){
        $("#nbFr").text(response.length);
        response.forEach(country => {
            $("#countriesFr").append("<tr><td>"+ country.name +"</td><td>"+ country.capital +"</td><td>"+ country.currencies[0].name +"</td><td>"+ country.population +"</td></tr>")
        });
    }
})

$.ajax({
    url:"https://restcountries.eu/rest/v2/all?fields=name",
    success:function(response){
        response.forEach(country => { 
            $("select").append("<option>"+ country.name +"</option>");
        });
    }
})

$("button").click(function(e){
    e.preventDefault()
    $.ajax({
        url:"https://restcountries.eu/rest/v2/name/"+ $("select").val() +"?fullText=true&fields=name;capital;population;region;flag"
    }).done(function(response){
        country = response[0];
        $("#name").text(country.name);
        $("#capital").text(country.capital);
        $("#population").text(country.population);
        $("#region").text(country.region);
        $("img").attr({
            src: country.flag,
            alt: country.name
        })
    })
})
