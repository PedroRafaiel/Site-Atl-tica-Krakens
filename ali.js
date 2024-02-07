document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    const floatingButton = document.getElementById('floating-btn');
    let hideTimeout; 

    function showSidebar() {
        sidebar.style.width = '200px';
        main.style.marginLeft = '200px';
   
        clearTimeout(hideTimeout);
    
        hideTimeout = setTimeout(function() {
            floatingButton.style.display = 'none';
        }, 2000);
    }


    function hideSidebar() {
        sidebar.style.width = '0';
        main.style.marginLeft = '0';
     
        floatingButton.style.display = 'block';
 
        clearTimeout(hideTimeout);
    }

   
    sidebar.addEventListener('mouseenter', showSidebar);

   
    sidebar.addEventListener('mouseleave', hideSidebar);

   
    floatingButton.addEventListener('mouseenter', showSidebar);


    floatingButton.addEventListener('mouseleave', hideSidebar);
});
