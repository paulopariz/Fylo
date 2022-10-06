
  document.getElementById("unavailable-email-alert").addEventListener("click", exibemensagem);
  function exibemensagem (){
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Content currently unavailable!',
})
  };

  document.getElementById("unavailable-started-alert").addEventListener("click", exibemensagem);
  function exibemensagem (){
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Content currently unavailable!',
})
  };



  var topo = document.querySelector("#voltar-ao-topo");
  topo.addEventListener("click", function() {
    window.scrollTo(0, 0).animate({scrollTop:0}, 'slow');
});



  const addUserText = document.querySelector('nav');
  addUserText.style.backgroundColor = 'hsl(219, 30%, 18%)';



  let texto = "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.";
  document.getElementByIds("depoimentotext").innerHTML = `<p>${texto}</p>`;
   

  