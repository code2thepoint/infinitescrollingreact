import React from 'react'
import { Link } from 'react-router-dom';
  

const Nav = () => {
    return (
        <>
<header>   
   <div class="header-area header-transparent">
       <div class="main-header header-sticky">
           <div class="container-fluid">
               <div class="menu-wrapper d-flex align-items-center justify-content-between">
                  
                   <div class="logo">
                          {/* <Link to="/">
                              <img src="assets/img/logo/logo.png" alt=""/>
                         </Link> */}
                   </div>
                 
                   <div class="main-menu f-right d-none d-lg-block">
                       <nav>
                           <ul id="navigation">
                               <li>
                                   <Link to="/">
                                      Home
                                   </Link>
                                </li>
                                <li>
                                  <Link to="/scrolling">
                                       Scrolling
                                    </Link>
                                </li>                           
                            </ul>
                       </nav>
                   </div>          
                    
                   <div class="header-btns d-none d-lg-block f-right">
                 
                   </div>
                  
                   <div class="col-12">
                       <div class="mobile_menu d-block d-lg-none"></div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</header>
          
        </>
    )
}

export default Nav


