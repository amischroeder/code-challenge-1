console.log('Script sourced!');

$(document).ready(function(){
    var buttonClicks = 0;
    $('body').append('<p><button class="generateButton">Generate</button></p>');
    $('body').on('click', '.generateButton', function(){
        buttonClicks++;
        $('body').append('<div><p>' + buttonClicks + '<button>Swap</button>' + '<button id="deleteButton">Delete</button>' + '</p></div>');
        $('div').on('click',  '#deleteButton', function(){
            $(this).parent().remove();
        })
    });
});