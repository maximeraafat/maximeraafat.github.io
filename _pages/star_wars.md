---
name: Star Wars
tools: [Blender]
image: /assets/posts/star_wars/StarWars-ImperialMetals.jpg
description: A Star Wars story
rank: 9
---

# {{ page.name }}

The finest alloys hijacked by the Imperial forces.
{:style="text-align: justify"}

{% assign images = 'StarWars-Beskar.jpg, StarWars-Phrik.jpg, StarWars-Pyronium.jpg'  |split: ', ' %}

{% include blog/img-code.html %}
{% include back.html %}
