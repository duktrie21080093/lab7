$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
    $('#user').bind('mouseover', function(){
        $('#sidTip').css("display","inline")
    })
    $('#user').bind('mouseout', function(){
        $('#sidTip').css("display","none")
    })
});

