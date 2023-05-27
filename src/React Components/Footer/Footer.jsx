import React from "react";
import s from "./style.module.css";

export default ()=>{
    return (
        <footer class={s.siteFooter}>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class={s.footerLinks}>
              <li><a href="#">C</a></li>
              <li><a href="#">UI Design</a></li>
              <li><a href="#">PHP</a></li>
              <li><a href="#">Java</a></li>
              <li><a href="#">Android</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class={s.footerLinks}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class={s.copyrightText}>Copyright &copy; 2023 All Rights Reserved by 
         <a href="#"> Sankalp Faundation</a>.
            </p>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class={s.socialIcons}>
              <li><a class={`${s.facebook} ${s.footerLogo}`} href="#"><img className={s.logos} src="./Media logos/linkedin.png" alt="" srcset=""/></a></li>
              <li><a class={`${s.twitter} ${s.footerLogo}`} href="#"><img className={s.logos} src="./Media logos/twitter.png" alt="" srcset=""/></a></li>
              <li><a class={`${s.dribbble} ${s.footerLogo}`} href="#"><img className={s.logos} src="./Media logos/youtube.png" alt="" srcset=""/></a></li>
              <li><a class={`${s.linkedin} ${s.footerLogo}`} href="#"><img className={s.logos} src="./Media logos/instagram.png" alt="" srcset=""/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    );
}