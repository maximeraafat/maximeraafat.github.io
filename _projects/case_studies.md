---
title: Case Studies Seminar Talks
tags: [Academics, Seminar, Interdisciplinary]
style: fill
color: danger
description: Presentation material for the Case Studies seminar for CSE students at ETH Zurich
date: 27-05-2021
rank: 3
---

The aim of this seminar is for students to get industry insight of related fields in the field, as well as improving the students **presentation skills**, when presenting **scientific publications**.
{:style="text-align: justify"}

> Below you can find the material I created and presented for the seminar.

<hr>

<div class="container">
  <div class="row align-items-center">

    {% assign title = "Spring 2021, Fall 2020, Spring 2020, Fall 2019" | split: ', ' %}
    {% assign docs = "CaseStudyFS21, CaseStudyHS20, CaseStudyFS20, CaseStudyHS19" | split: ', ' %}
    {% for doc in docs %}
    <div class="col-sm-12">

      <center><b>{{ title[forloop.index0] }}</b></center>
      <a href="/assets/projects/{{ doc }}.pdf" target="_blank">
        <img src="/assets/projects/{{ doc }}_cover.pdf" alt="{{ doc }}" class="img-style">
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
{:style="text-align: justify"}

<div class="container">
  <div class="row align-items-center">
    <div class="col-sm-12">
      <a href="/assets/projects/deepfake_ppt.pdf" target="_blank">
        <img src="/assets/projects/deepfake_ppt.pdf" alt="deepfake_ppt" class="img-style">
      </a>
    </div>
  </div>
</div>

<hr>

<center><button type="button" class="btn btn-outline-primary" onclick="history.back()">Go Back</button></center>
