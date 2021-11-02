---
name: Fruits in Fluid-Sim
tools: [Blender]
image: /assets/posts/FruitSplash_Art.jpg
description: First timer in physics simulation
rank: 2
---

# {{ page.name }}

Here's another result from a tutorial (again by [Blender Guru](https://www.blenderguru.com){:target="_blank"}) I followed soon after the donut project.
{:style="text-align: justify"}

{% assign alt = page.image | slice: 14, page.image.size %}
{% assign size = alt | size | minus: 4 %}
{% assign alt = alt | slice: 0, size %}

<a href="{{ page.image }}" target="_blank"> ![{{ alt }}]({{ page.image }}){:class="img-style"} </a>

<hr>

<center><button type="button" class="btn btn-outline-primary" onclick="history.back()">Go Back</button></center>
