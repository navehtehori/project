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