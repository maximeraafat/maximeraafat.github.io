---
name: First Donut
tools: [Blender]
image: /assets/posts/1st-Donut.jpg
description: My very first project in Blender
rank: 1
---

# {{ page.name }}

Like almost every Blender newbie, I started off with the famous donut tutorial by [Blender Guru](https://www.blenderguru.com){:target="_blank"}. Below's my result!
{:style="text-align: justify"}

{% assign alt = page.image | slice: 14, page.image.size %}
{% assign size = alt | size | minus: 4 %}
{% assign alt = alt | slice: 0, size %}

<a href="{{ page.image }}" target="_blank"> ![{{ alt }}]({{ page.image }}){:class="img-style"} </a>

<hr>

<center><button type="button" class="btn btn-outline-primary" onclick="history.back()">Go Back</button></center>
