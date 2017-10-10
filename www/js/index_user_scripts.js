/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #op-staffBack */
    $(document).on("click", "#op-staffBack", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* graphic button  #op-staff-01 */
    $(document).on("click", "#op-staff-01", function(evt)
    {
         /*global activate_page */
         activate_page("#staffMenu"); 
         return false;
    });
    
        /* button  #op-studentBack */
    $(document).on("click", "#op-studentBack", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* graphic button  #op-student-01 */
    $(document).on("click", "#op-student-01", function(evt)
    {
         /*global activate_page */
         activate_page("#studentMenu"); 
         return false;
    });
    
        /* button  #op-staffOSidebar */
    $(document).on("click", "#op-staffOSidebar", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#op-sidebarStaff"));  
         return false;
    });
    
        /* button  #op-sideMenuHomeStaff */
    $(document).on("click", "#op-sideMenuHomeStaff", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Student */
    $(document).on("click", ".uib_w_42", function(evt)
    {
         /*global activate_page */
         activate_page("#studentMenu"); 
         return false;
    });
    
        /* button  .uib_w_22 */
    $(document).on("click", ".uib_w_22", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_43"));  
         return false;
    });
    
        /* button  Home */
    $(document).on("click", ".uib_w_44", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  Staff */
    $(document).on("click", ".uib_w_45", function(evt)
    {
         /*global activate_page */
         activate_page("#staffMenu"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
