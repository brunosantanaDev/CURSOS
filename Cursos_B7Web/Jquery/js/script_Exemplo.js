
//var $j = jQuery.noConflict();
//jQuery(document).ready(function(){     });


$(function () {

  $("#campo").val();

  comBorda = { 'border': '1px solid #987456' }


  titulo1 = {
    "color": "#0000ff",
    "text-decoration": "underline",
    "font-family": "oswald",
    "font-size": "70px",
  }

  $(".titulo1").css(titulo1);

  if ($('.titulo1').hasClass('titulo1')) {
    //alert('SIM, TEM CLASSE')
  } else {
    // alert('NÃO, TEM CLASSE');
  }//True ou False




  $('.demo').fadeOut(2000).fadeIn(2000);

  $('.teste').hide("slow");



  $('.demo ul li').each((i, e) => $(e).css(comBorda));

  $('button').before('<button class="btjq">Clique Aqui Jq</button>');
  $('button').css('margin-left', '20px').fadeOut(2000).fadeIn(1000);

  $('.btjq').click(function () {
    $('#campo').css("background", "#666666");
    // $('#campo').attr("style")
  });

  $('.bt').click(function () {
    $(this).css('border', '5px solid #ff0000').css('background', '#0000ff');
  });

  segundoItem = $(".var li:eq(3)");
  segundoItem.html("Item 2 Selecionado");

});















