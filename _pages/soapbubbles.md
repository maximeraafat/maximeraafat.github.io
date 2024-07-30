---
title: 'Thin Film Soap Bubbles'
tools: [Blender, DaVinci Resolve]
image: /assets/posts/thin_film_soap/ThinFilmSoapBubbles1.jpg
description: Shader thickness in nanometers
rank: 24
---

# **{{ page.title }}**
<hr class="short">

Thin film simulation with the new Principled BSDF shader in [Blender](https://www.blender.org){:target="_blank"} 4.2.
{:style="text-align: justify"}

This latest release features a fully rewritten EEVEE engine with global illumination and vertex displacement support, alongside a ray portal BSDF shader, and so much more.
{:style="text-align: justify"}

<video class="img-style" controls loop>
    <source src="/assets/posts/thin_film_soap/ThinFilmSoapBubbles.mp4" type="video/mp4">
</video>

<div style="text-align: right">
    Song: <a href="https://soundcloud.com/danielmp3-music/green-to-blue" target="_blank">Green To Blue</a>, by <i>Daniel.mp3</i>
</div>

{% assign images = 'ThinFilmSoapBubbles1.jpg, ThinFilmSoapBubbles2.jpg' |split: ', ' %}

{% include blog/img-code.html %}
{% include back.html %}