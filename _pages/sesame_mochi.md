---
name: Sesame Mochi
tools: [Blender, DaVinci Resolve]
image: /assets/posts/sesame_mochi/SesameMochi1.jpg
description: My first time with geometry nodes
rank: 14
---

# {{ page.name }}
Occasionally, enjoy a little treat. Sesame seeds were modelled via geometry nodes in Blender. Rendered in Cycles and edited in DaVinci Resolve. Unfortunately for the render-time, the seeds looked much better with some subsurface scattering (avoid it if possible!).
{:style="text-align: justify"}

{% assign images = 'SesameMochi2.jpg, SesameMochi3.jpg, SesameMochi4.jpg, SesameMochi_Animation.gif'  |split: ', ' %}

{% include blog/img-code.html %}
{% include back.html %}