---
name: Case Studies Seminar Talks
tools: [Academics, Seminar, Interdisciplinary]
image: https://www.sketchappsources.com/resources/source-image/movie-badges-jurajjurik.png
description: Presentation material for the Case Studies seminar for CSE students at ETH Zurich.
---

# {{ page.name }}
The aim of this seminar is for students to get industry insight of related fields in the field, as well as improving the students **presentation skills**, when presenting **scientific publications**.

Below you can find the material I created and presented for the seminar.
<hr>

<div class="container">
  <div class="row align-items-center">

    {% assign title = "Spring 2021, Fall 2020, Spring 2020, Fall 2019" | split: ', ' %}
    {% assign docs = "CaseStudyFS21.pdf, CaseStudyHS20.pdf, CaseStudyFS20.pdf, CaseStudyHS19.pdf" | split: ', ' %}
    {% for doc in docs %}
    <div class="col-sm-12">
      <center><b>{{ title[forloop.index0] }}</b></center>
      <a href="/assets/projects/{{ doc }}" target="_blank">
        <img src="/assets/projects/{{ doc }}" alt="{{ doc }}" style="border-radius:{{ site.border}}; background-color:white">
      </a>

      {% assign next_index = forloop.index0 | plus: 1 %}
      {% if next_index < forloop.length %}
        <hr>
      {% endif %}

    </div>
    {% endfor %}

  </div>
</div>

<hr>

### Ethical Challenges of Deepfake

Below is a last example of a pannel that I presented in the frame of an optional lecture, discussing the ethical challenges involved in rapidly emerging technologies such as deepfake.

<div class="container">
  <div class="row align-items-center">
    <div class="col-sm-12">
      <a href="/assets/projects/deepfake_ppt.pdf" target="_blank">
        <img src="/assets/projects/deepfake_ppt.pdf" alt="deepfake_ppt.pdf" style="border-radius:{{ site.border}}; background-color:white">
      </a>
    </div>
  </div>
</div>
