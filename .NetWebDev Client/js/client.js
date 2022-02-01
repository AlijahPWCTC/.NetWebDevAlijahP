$(function(){
     // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        
      e.preventDefault();
          // first pause the audio (in case it is still playing)
          toast.pause();
          // reset the audio
          toast.currentTime = 0;
        // play audio
        toast.play();
        

        if($(this).attr('data-button')== 'tistheseasoning'){
            $('#toastSeasoning').toast({ autohide: false }).toast('show');
        }

        else if($(this).attr('data-button')== 'gogreen'){
          $('#toastGreen').toast({ autohide: false }).toast('show');
        }

        else if($(this).attr('data-button')== 'halfoff'){
          $('#toastHalf').toast({ autohide: false }).toast('show');
        }
        
      
    });

    document.addEventListener('keydown', function(event) {
      if(event.keyCode == 27) {
        $('.toast').toast('hide');
      }
  });
});