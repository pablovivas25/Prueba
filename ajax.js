$(document).ready(function(e){
    $('#clientes').DataTable({
        "ajax":{
            "url": "http://localhost/ejemplo/dataapp/apiCliente/Cliente/Clientes",
            "dataType": "json",
        },
        "columns":[
            {"data": "Cliente_codigo"},
            {"data": "apellido"},
            {"data": "nombre"}
            //{"defaultContent": `<button>Editar</button>
              //                  <button>Eliminar</button>`}
        ],
        "language": espanol
    
    });

});   
let espanol = {
    "sProcessing":     "Procesando...",
    "sLengthMenu":     "Mostrar _MENU_ registros",
    "sZeroRecords":    "No se encontraron resultados",
    "sEmptyTable":     "Ningún dato disponible en esta tabla",
    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix":    "",
    "sSearch":         "Buscar:",
    "sUrl":            "",
    "sInfoThousands":  ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst":    "Primero",
        "sLast":     "Último",
        "sNext":     "Siguiente",
        "sPrevious": "Anterior"
    }
}

    /*
        .done(function(info) {
            console.log(info['data']);
        
        })//done
        .fail(function(info) {
            alert("error");
        })
      
        .always(function(xhr, textStatus) {
            console.log(textStatus);
        })
   
      */