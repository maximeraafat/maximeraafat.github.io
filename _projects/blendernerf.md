---
title: BlenderNeRF
tags: [Computer Vision, Computer Graphics, AI, Blender]
style: border
color: lightcoral !important # need !important to override bootstrap class
description: Easy NeRF synthetic dataset creation within Blender
date: 18-08-2023
rank: 9
# external_url: https://github.com/maximeraafat/BlenderNeRF
---

<hr style='visibility:hidden'>
Whether a VFX artist, a research fellow or a graphics amateur, **BlenderNeRF** is the easiest and fastest way to create synthetic [NeRF](https://www.matthewtancik.com/nerf){:target="_blank"} datasets within [Blender](https://www.blender.org){:target="_blank"}. Obtain renders and camera parameters with a single click, while having full user control over the 3D scene and camera!
{:style="text-align: justify"}

Rendering is an expensive computation. Photorealistic scenes can take seconds to hours to render depending on the scene complexity, hardware and available software resources.
{:style="text-align: justify"}

NeRFs can speed up this process, but require camera information typically extracted via cumbersome code. This plugin enables anyone to get renders and cameras with a single click in Blender.
{:style="text-align: justify"}
<hr style='visibility:hidden'>

> Download the add-on right here, or visit my GitHub for further details!

<button type="button" class="btn btn-outline-primary" onclick="location.href='https://github.com/maximeraafat/BlenderNeRF/archive/refs/heads/main.zip'"><span class="fa fa-download"></span> Download</button>
<button type="button" class="btn btn-outline-primary" onclick="window.open('https://github.com/maximeraafat/BlenderNeRF', '_blank'); return false"><span class="fab fa-github"></span> GitHub</button>

<hr style='height:{{site.height}}'>

<div class="youtube">
    <iframe src="https://www.youtube.com/embed/C8YuDoU11cg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

{% assign gif1 = "/assets/posts/blendernerf/COS.gif" %}
{% assign gif2 = "/assets/posts/blendernerf/SOF.gif" %}
{% assign gif3 = "/assets/posts/blendernerf/TTC.gif" %}

<a href="{{ gif }}" target="_blank" style="display:block"> ![{{ COS }}]({{ gif1 }}){:class="img-style"} </a>
<a href="{{ gif }}" target="_blank" style="display:block"> ![{{ SOF }}]({{ gif2 }}){:class="img-style"} </a>
<a href="{{ gif }}" target="_blank" style="display:block"> ![{{ TTC }}]({{ gif3 }}){:class="img-style"} </a>

{% include back.html %}