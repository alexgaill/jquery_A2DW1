// $.ajax({
//     url:"infos.txt",
//     success:function(response){
//         console.log(response);
//     }
// })

$.ajax({
    url:"getDatas.php",
    dataType:"json",
    success:function(response){
        // console.log(JSON.parse(response))
        console.log(response);
    }
})