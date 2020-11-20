$(":submit").click(function(e){
    e.preventDefault();
    switch ($(":radio:checked").val()) {
        case "contacts":
            $.ajax({
                url:"templates/contacts.php",
                dataType:"json",
                success:function(response){
                    $(".section").html("<ul></ul>")
                    response.forEach(contact => {
                        $(".section ul").append(`<li>
                            <p><strong>Prénom:</strong> ${contact.firstName}</p>
                            <p>Téléphone: ${contact.phone}</p>
                        </li>`)
                    });
                },
                error:function(response){
                    console.log(response.statusText)
                },
            })
            break;
        case "section":
            $.ajax({
                url:"templates/section.php",
                dataType:"html",
                success:function(response){
                    $(".section").html(response);
                },
                error:function(response){
                    console.log(response.statusText)
                },
            })
            break;
        case "films":
            $.ajax({
                url:"templates/films.php",
                dataType:"json",
                success:function(response){
                    $(".section").html("");
                    response.forEach(film => {
                        $(".section").prepend(
                            `<div>
                                <img src='img/${film.cover}' alt='${film.title}'/>
                                <p>${film.title}, ${film.duration} min</p>
                            </div>`
                        )
                        
                    });
                },
                error:function(response){
                    console.log(response.statusText)
                },
            })
            break;

    }
})