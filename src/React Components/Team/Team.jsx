import React from "react";
import T from "./TeamSample";
import "./team.css";

export default () => {
  return (
    <div class="container Team" style={{textAlign:"center"}}>
    <h1>Our Founders</h1>
  <div class="row">
    <T name="Saurabh kumar sharma" title="CEO, GSVM medical college Kanpur" />
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
    <T name="Allaudin ansari" title="Director, (BRD medical college, gorakhpur)" />
    <T name="Abhishek kumar " title="Communication head, NIT " />
    <T name="Aakash kumar " title="Research head, NIT hamirpur" />
    <T name="Satyam tripathi" title="Media Co-Ordinator, NIT hamirpur" />
  </div>
    <h1>Executive Members</h1>
  <div class="row">
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
  </div>
    <h1>Mentors</h1>
  <div class="row">
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
  </div>
    <h1>Our Community</h1>
  <div class="row">
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
    <T name="Vikas kumar" title="CEO, NIT hamirpur" />
  </div>
</div>
  );
};
