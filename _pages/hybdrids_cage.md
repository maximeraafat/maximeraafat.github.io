---
name: Hybrids Cage
tools: [Blender]
image: /assets/posts/HybridsColor.jpg
description: A render inspired by Rayman 2, a game by Ubisoft
rank: 3
---

# {{ page.name }}
A project inspired by Rayman 2 : The Great Escape, a game released by Ubisoft.
{:style="text-align: justify"}

{% assign alt = page.image | slice: 14, page.image.size %}
{% assign size = alt | size | minus: 4 %}
{% assign alt = alt | slice: 0, size %}

<a href="{{ page.image }}" target="_blank"> ![{{ alt }}]({{ page.image }}){:class="img-style"} </a>

<hr>

<center><button type="button" class="btn btn-outline-primary" onclick="history.back()">Go Back</button></center>
