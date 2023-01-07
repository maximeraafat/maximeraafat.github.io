---
title: BlenderNeRF
tags: [Computer Vision, Computer Graphics, AI, Blender]
style: border
color: lightcoral !important # need !important to override bootstrap class
description: Easy NeRF synthetic dataset creation within Blender
date: 13-07-2022
rank: 6
# external_url: https://github.com/maximeraafat/BlenderNeRF
---

Whether a VFX artist, a research fellow or a graphics amateur, **BlenderNeRF** is the easiest and fastest way to create synthetic [NeRF](https://www.matthewtancik.com/nerf){:target="_blank"} datasets within [Blender](https://www.blender.org){:target="_blank"}. Obtain renders and camera parameters with a single click, while having full user control over the 3D scene and camera!

Rendering is an expensive computation. Photorealistic scenes can take seconds to hours to render depending on the scene complexity, hardware and available software resources.
{:style="text-align: justify"}

NeRFs can speed up this process, but require camera information typically extracted via cumbersome code. This Blender add-on enables anyone to get renders and cameras with a single click in Blender.

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
