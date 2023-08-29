---
title: Bad Normal Plants
tools: [Blender]
image: /assets/posts/bad_normal_plants/BadNormalPlants_Cycles1.jpg
description: A story of flowers, steel, and geo nodes
rank: 15
---

# **{{ page.title }}**
<hr class="short">

<code>Metallic geometry nodes flowers</code>, engineered following the excellent tutorial by [Bad Normals](https://www.youtube.com/c/BadNormals){:target="_blank"}. Check him out!
{:style="text-align: justify"}

{% assign compare = '0, 2, 4' |split: ', ' %}
{% assign images = 'BadNormalPlants_Cycles1.jpg, BadNormalPlants_Eevee1.jpg, BadNormalPlants_Cycles2.jpg, BadNormalPlants_Eevee2.jpg, BadNormalPlants_Cycles3.jpg, BadNormalPlants_Eevee3.jpg, BadNormalPlants.jpg' |split: ', ' %}
{% include blog/img-code.html %}

{% assign gif = "/assets/posts/bad_normal_plants/BadNormalPlants.gif" %}
<a href="{{ gif }}" target="_blank" style="display:block"> ![{{ BadNormalPlants }}]({{ gif }}){:class="img-style"} </a>

<div class="youtube">
    <iframe src="https://www.youtube.com/embed/o3NMBlE9LqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
</div>

{% include back.html %}