---
name: Sesame Mochi
tools: [Blender, DaVinci Resolve]
image: /assets/posts/sesame_mochi/SesameMochi1.jpg
description: Some nice mochi
rank: 14
---

# {{ page.name }}

Some nice mochi.
{:style="text-align: justify"}

{% assign images = 'SesameMochi2.jpg, SesameMochi3.jpg, SesameMochi4.jpg, SesameMochi_Animation.gif'  |split: ', ' %}

{% include blog/img-code.html %}
{% include back.html %}
