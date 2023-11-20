$(document).ready(function() {
    $(".form").on('submit',function(e) {
        e.preventDefault();
        var name=$(".name").val();
        var email=$(".email").val();
        var phone=$(".phone").val();
        var subject=$(".subject").val();
        var message=$(".message").val();
        var prequest=" ";
        $.post("https://script.google.com/macros/s/AKfycbzPYcduedPzeoCP44jn9HQwmYLxpFQ5-1TIrClOJChcqqvr8v5Nmo7A3mN3dkmKw8VL-A/exec",{name:name,email:email,phone:phone,subject:subject,message:message,prequest:prequest},function(res) {
            if(res==1){
                alert("Submitted Successfully");
            }
            else{
                alert("Error! Try again");
            }
        })
    })
})