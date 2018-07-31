// Formulario
$('.formphp').on('submit', function() {
  var emailContato = "tamiresdaianemelo@gmail.com"; // <----- Escreva aqui o e-mail que vai receber as mensagens vindas do site

  var that = $(this),
      url = that.attr('action'),
      type = that.attr('method'),
      data = {};
  
  that.find('[name]').each(function(index, value) {
    var that = $(this),
        name = that.attr('name'),
        value = that.val();
        
    data[name] = value;
  });
  
  $.ajax({
    url: url,
    type: type,
    data: data,
    success: function(response) {
    
      if( $('[name="leaveblank"]').val().length != 0 ) {
        $('.formphp').html("<div id='form-erro'></div>");
        $('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
        .hide()
        .fadeIn(1500, function() {
        $('#form-erro');
        });
      } else {
      
        $('.formphp').html("<div id='form-send'></div>");
        $('#form-send').html("<span>Mensagem enviada!</span><p>Em breve entro em contato com você. Abraços.</p>")
        .hide()
        .fadeIn(1500, function() {
        $('#form-send');
        });
      };
    },
    error: function(response) {
      $('.formphp').html("<div id='form-erro'></div>");
      $('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
      .hide()
      .fadeIn(1500, function() {
      $('#form-erro');  
    });
    }
  });
  
  return false;
});