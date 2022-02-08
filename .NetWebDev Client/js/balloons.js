let animations = ["animate__bounce","animate__flash","animate__pulse","animate__rubberBand","animate__shakeX","animate__shakeY","animate__headShake","animate__swing","animate__tada","animate__wobble","animate__jello","animate__heartBeat"];
$(function(){
    let newAnimate = animations[Math.floor(Math.random() * animations.length)];
    $("#happyBirthday").addClass(newAnimate);


    $('#red').hover(function(){
            $('#happyBirthday').css("color", "red");
            }, function(){
            $('#happyBirthday').css("color", "black");
        });
        $('#blue').hover(function(){
            $('#happyBirthday').css("color", "blue");
            }, function(){
            $('#happyBirthday').css("color", "black");
        });
        $('#green').hover(function(){
            $('#happyBirthday').css("color", "green");
            }, function(){
            $('#happyBirthday').css("color", "black");
        });


    
    $("#submit").click(function(){
        let temp =0;
        if($('#red').is(':checked')){
            temp += 1;
        }
        else  if($('#blue').is(':checked')){
            temp += 1;
        }
        else  if($('#green').is(':checked')){
            temp += 1;
        }

        if(temp == 0){
            $('#toastAlert').toast({ autohide: false }).toast('show');
        }
        else{
            temp=0;
        }
    });
    
    $('#checkUnCheck').click(function(){
        let temp =0;
        if($('#red').is(':checked')){
            temp += 1;
        }
        else  if($('#blue').is(':checked')){
            temp += 1;
        }
        else  if($('#green').is(':checked')){
            temp += 1;
        }

        if(temp == 0){
            $('.form-check-input').each(function () {
                $(this).prop('checked', true);
                $(this).is(':checked') ?
                $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
                $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
            });
        }
        else{
            $('.form-check-input').each(function () {
                $(this).prop('checked', false);
                $(this).is(':checked') ?
                $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
                $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
            });
        }
        
    });
    
    $('#birthday').pickadate({ format: 'mmmm, d' });
       // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

        // event listener for check/uncheck
        $('.form-check-input').on('change', function () {
            // make the image visible
            $('#' + this.id + 'Img').css('visibility', 'visible')
            // animate balloon in/out based on checkbox
            $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
        });
});

