var estudiante;
var notauno;
var notados;

estudiante=prompt("Por Favor Digite su Nombre");
notauno=parseFloat(prompt("Digite la Primera Nota"));
notados=parseFloat(prompt("Digite la Segunda Nota"));

promedio=(notauno + notados)/2;
alert("Su Promedio es:"+ promedio);

/*Swal.fire({
    title: '<strong>HTML <u>example</u></strong>',
    icon: 'info',
    html:
      'You can use <b>bold text</b>, ' +
      '<a href="//sweetalert2.github.io">links</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })*/