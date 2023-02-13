const activePage = window.location.pathname;
console.log(activePage);

const navLinks = document.querySelectorAll('.navBarItem a').forEach(link=> {
    if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
   }
   else{
      link.classList.remove('active');
   }
}
    );


    function myFunction() {
      var x = document.getElementById("home11").value;
      document.getElementById("161").innerHTML =  x;
    }