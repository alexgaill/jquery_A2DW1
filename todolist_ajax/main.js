getTasks();

$("#sendData").click(function(e){
    e.preventDefault();
    let task = $("#addTask").serializeArray();

    $.ajax({
        url:"Routeur.php?function=saveTask",
        method:"POST",
        dataType:"json",
        data:task,
        error:function(response){
            console.log(response.statusText);
        }
    })
    getTasks();
    // $("#addTask input:text, [type=date]").val("");
})

$("#deleteAll").click(function(e){
    e.preventDefault();
    $.ajax({
        url:"Routeur.php",
        data:{
            "function":"deleteAll"
        },
        success:function(response){
            $("ul").html("");
            getTasks();
        }
    })
})

$("#deleteSome").click(function(e){
    e.preventDefault();
    let ids = [];
    let selected = $(":checkbox:checked").parent("li");
    for (const task of selected) {
        ids.push(task.dataset.id);   
    }

    $.ajax({
        url:"Routeur.php?function=deleteSome",
        method:"POST",
        dataType:"json",
        data:{idlist:ids}
    })
    getTasks();
})

function getTasks(){
    $.ajax({
        url:"Routeur.php?function=getTasks",
        method:"GET",
        dataType:"json",
        success:function(response){
            $("ul").html("");
            let i = 0
            response.forEach(task => {
                $("ul").append("<li class='"+ task[2] +"' data-id='"+ i +"'><input type='checkbox'><label>"+ task[0] +" | "+ task[3] +" | <p>"+ task[1] +"</p></label></li>");
                i++
            });
        },
        error:function(response){
            console.log(response.statusText);
        }

    })
}