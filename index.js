

    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar2');
        if (sidebar.style.right === '0px') {
          sidebar.style.right = '-250px'; 
        } else {
          sidebar.style.right = '0px'; 
        }
      }
      if  (window.matchMedia("(max-width: 800px)").matches) {
      window.addEventListener('scroll', function(){
        const header =  document.getElementById('firstHeader');
        
        if(window.scrollY > 50){
          header.style.backgroundColor = '#e1e1e1'
         
        }
        else{
          header.style.backgroundColor = 'transparent'
          
        }})}
