//$(function(){
//    $("#panel1").hide(3000).show(2000).css({
//        'background': "blue",
//        'color': "white"
//    })
//});

//$(function(){
//    $("#panel1-content").html("The background is blue and the text is white")
//});

//$(function(){
//    $("#panel2").fadeTo(1000, .0).fadeTo(2000, .8).css({
//        'background': "green",
//        'color': "white",
//        'font-weight': "bold"
//    })
//});

//$(function(){
//    $("#panel2-content").html("The background is green and the text is white and the font is bold")
//});


//$(function(){
//    $("#panel3").slideUp(1000).delay(1000).slideDown(1500).css({
//        'background': "darkgrey",
//        'color': "black",
//        'font-family': "monospace"
//    })
//});

//$(function(){
//    $("#panel3-content").css({
//        'font-family': "monospace"
//    })
//});

//$(function(){
//    $("#panel3-content").html("The background is darkgrey and the text is black and the font is monospace, including the panel content")
//});


//$(function(){
//    $("#panel4").fadeTo(1000, .3).slideUp(2000).slideDown(2000).fadeTo(2000, .1).fadeTo(2000, 1).css({
//        'background': "white",
//        'color': "black",
//    })
//});

//$(function(){
//    $("#panel4-heading").css({
//        'background': "blue",
//        'color': "white",
//        'font-weight': "bold",
//        'text-decoration': "underline"
//    })
//});

//$(function(){
//    $("#panel4-content").css({
//        'background': "red",
//        'color': "white",
//        'font-family': "serif"
//    }).html("The panel is white with black text, the heading is blue with white text and underlined with bold text, the content is red with white text and serif font.")
//});

//$("#button1").on("click", function(){
//    //$("#panel1").fadeToggle(1000)
//    $("#panel1").toggle(1000)
//    $("#panel4").toggle(1000)
//})

//$("#button2").on("click", function(){
//    //let random = Math.floor(Math.random()*(6000 - 1000)+1000);
//    //$("#panel2").hide(1000).delay(random).show(1000)
//    //$("#panel2-heading").html(`${random} miliseconds`)
//    $("#panel2").toggle(1000)
//    $("#panel3").toggle(1000)
//    $("#panel4").toggle(1000)
//})

//$("#button3").on("mouseover", function(){
//    $("#panel3").fadeTo(1000, 0)
//    $("#panel4").fadeTo(1000, 0)
//})

//$("#button3").on("click", function(){
//    $("#panel1").toggle(1000)
//    $("#panel3").toggle(1000)
//})

//$("#button4").on("mouseover", function(){
//    $("#panel3").fadeTo(1000, 1)
//    $("#panel4").fadeTo(1000, 1)
//})

//$("#button4").on("click", function(){
//    $("#panel1").toggle(1000)
//    $("#panel2").toggle(1000)
//})

//$(function(){
//    $("#button2").hide(0)
//    $("#button3").hide(0)
//    $("#button4").hide(0)
//    $("#panel1").hide(0)
//    $("#panel2").hide(0)
//    $("#panel3").hide(0)
//    $("#panel4").hide(0)
//});

//$('button').on('click', function(){
//    let panelId = $(this).attr('panelid');
//    $('#panel' +panelId).toggle(1000)
//    $('#panel' +panelId +' .panel-heading').html("this changed");
//})

//$('#panel1').on('click', function(){
//    $('#button2').toggle(1000)
//    $('#button2').html("this changed");
//})

//$('#panel2').on('click', function(){
//    $('#button3').toggle(1000)
//    $('#button3').html("this changed");
//})

//$('#panel3').on('click', function(){
//    $('#button4').toggle(1000)
//    $('#button4').html("this changed");
//})

//$('#panel4').on('click', function(){
//    $('#button1').toggle(1000)
//    $('#button1').html("this changed");
//})

//$(`li`).on(`click`, function(){
//    $(this).next().toggle(300);
//})

$(`li`).on(`click`, function(){
    $(this).closest(`.list`).find(`li`).filter(`.highlight`).removeClass(`highlight`);
    $(this).addClass('highlight')
})