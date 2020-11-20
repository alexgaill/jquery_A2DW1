getMessages();
$("button").click(function(e){
    e.preventDefault();
    $.ajax({
        url:"Routeur.php?function=save",
        method:"POST",
        dataType:'json',
        data:{content:$("input").val()}
    }).done(function(response){
        getMessages();
    })
})

function getMessages(){
    $.ajax({
        url:"Routeur.php?function=get",
        dataType:'json',
        success:function(response){
            response.forEach(message => {
                $("#messages").append(`<p>${message.content}</p>`)
                
            });
            console.log(response);
        }
    })
}