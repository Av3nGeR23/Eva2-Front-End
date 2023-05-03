function mostrarImagen(url) {

    var divImagen = $('<div>').css({
      'position': 'fixed',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%)',
      'background-color': 'rgba(0, 0, 0, 0.8)',
      'padding': '20px',
      'text-align': 'center',
      'z-index': '9999'
    });

    
    var imagen = $('<img>').attr('src', url).css({
      'max-width': '100%',
      'max-height': '80vh'
    });

   
    divImagen.append(imagen);
    $('body').append(divImagen);
    divImagen.click(function() {
    divImagen.remove();
  });


    $(divImagen).click(function(event) {
      if (event.target === this) {
        $(this).remove();
      }
    });
  }

  function mostrarFormulario() {
    var formulario = document.getElementById("miFormulario");
    if (formulario.style.display === "none") {
      formulario.style.display = "block";
    } else {
      formulario.style.display = "none";
    }
  }
  function mostrarPopup() {
    var popup = document.getElementById("formulario");
    popup.style.display = "block";
    document.getElementById("formulario").style.display = "block";
    window.onclick = function(event) {
      if (event.target == popup) {
        popup.style.display = "none";
      }
    }
  }
   
  btnAbrir.onclick = function() {
    popup.style.display = "block";
}

document.getElementById("cerrar-popup").onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}	

  
  function cerrarPopup() {
    document.getElementById("formulario").style.display = "none";
  }