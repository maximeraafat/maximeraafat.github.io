---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi I am **{{ site.author.name }}**!
<br>

<script type="text/javascript">

function calculateAge(year, month, day) {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getUTCMonth() + 1;
  var currentDay = currentDate.getUTCDate();

  var age = currentYear - year;
  if (currentMonth > month) {
    return age;
  } else {
    if (currentDay >= day) {
      return age;
    } else {
      age--;
      return age;
    }
  }
}
</script>

Already <script type="text/javascript"> document.write(calculateAge(1998, 06, 18)) </script> revolutions around the sun, still not a single coffee during my long coding nights (and days). <br>
I aspire to make the world a better place through AI and computer vision driven innovations, while still enjoying each moment spent along my family, friends and PlayStation.

Wanna know more? Have a look at my Projects!
You saw enough already? You should check out [Zuri Bistro](https://www.zueribistro.ch){:target="_blank"} (they do damn good kebabs).


<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>
