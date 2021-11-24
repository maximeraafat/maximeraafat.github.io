---
name: 3D Apps
tools: [Blender]
image: /assets/posts/3d_apps/3D-App_Icons.jpg
description: Some nice logos
rank: 12
---

# {{ page.name }}

Some nice logos.
{:style="text-align: justify"}

{% assign images = 'Acredius_3D-App.jpg, GDC_3D-App.jpg, IMMERSIVE_3D-App.jpg, SSC_3D-App.jpg, 3D-Apps_Icons.gif'  |split: ', ' %}

{% include blog/img-code.html %}
{% include back.html %}
