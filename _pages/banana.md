---
name: Banana
tools: [Blender]
image: /assets/posts/banana/Banana2.jpg
description: My first independent project (and a remake)
rank: 7
---

# {{ page.name }}

The remake (above) and original post (below).
{:style="text-align: justify"}

{% assign images = 'Banana1.jpg' |split: ', ' %}

{% include blog/img-code.html %}
{% include back.html %}
