---
title: Blender x NeRF
tags: [Computer Vision, Computer Graphics, AI, Blender]
style: border
color: lightcoral !important # need !important to override bootstrap class
description: User friendly Blender add-on for NeRF synthetic dataset creation
date: 13-07-2022
rank: 6
# external_url: https://github.com/maximeraafat/BlenderNeRF
---

Rendering is a computationally intensive process ; generating photorealistic scenes can take seconds to hours depending on the scene complexity, hardware properties and the computational resources available to the 3D software.
{:style="text-align: justify"}

While obtaining renderings might be considered a straight forward process for 3D artists, obtaining the additional camera information necessary for [NeRF](https://www.matthewtancik.com/nerf){:target="_blank"}-based models can be discouraging, even for python familiar users or machine learning developers. This [Blender](https://www.blender.org){:target="_blank"} add-on aims at solving this issue, enabling artists to easily integrate AI in their creative flow while also facilitating research.
{:style="text-align: justify"}

> Download the add-on right here, or visit my GitHub for further details!

<button type="button" class="btn btn-outline-primary" onclick="location.href='https://github.com/maximeraafat/BlenderNeRF/archive/refs/heads/main.zip'"><span class="fa fa-download"></span> Download</button>
<button type="button" class="btn btn-outline-primary" onclick="window.open('https://github.com/maximeraafat/BlenderNeRF', '_blank'); return false"><span class="fab fa-github"></span> GitHub</button>

<hr>

<div class="container" align="center">
  <div class="row align-items-center">
    <div class="col-sm-6">
      <a href="/assets/posts/donut_3/Donut3.gif" target="_blank">
        <img src="/assets/posts/donut_3/Donut3_compressed.gif" alt="donut3" class="img-style">
      </a>
      <center><b>Traditional rendering</b></center>
    </div>

    <div class="col-sm-6">
      <a href="/assets/posts/donut_3/Donut3_NeRF.gif" target="_blank">
        <img src="/assets/posts/donut_3/Donut3_NeRF_compressed.gif" alt="donut3_nerf" class="img-style">
      </a>
      <center><b>NeRF-synthesized images</b></center>
    </div>

  </div>
</div>

{% include back.html %}
