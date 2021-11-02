---
name: Precursor Desert
tools: [Blender]
image: /assets/posts/precursor_orb/PrecursorSand.jpg
description: A render inspired by Jak and Daxter, a game by Naughty Dog
rank: 4
---

# {{ page.name }}

Another game inspired project, this time by Jak and Daxter.
{:style="text-align: justify"}

{% assign alt = page.image | slice: 14, page.image.size %}
{% assign size = alt | size | minus: 4 %}
{% assign alt = alt | slice: 0, size %}

<a href="{{ page.image }}" target="_blank"> ![{{ alt }}]({{ page.image }}){:class="img-style"} </a>

<hr>

<center><button type="button" class="btn btn-outline-primary" onclick="history.back()">Go Back</button></center>
