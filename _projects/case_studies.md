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

{% assign col_sm_nb = 12 %}
{% assign title = 'Spring 2021, Fall 2020, Spring 2020, Fall 2019' | split: ', ' %}
{% assign docs = 'CaseStudyFS21, CaseStudyHS20, CaseStudyFS20, CaseStudyHS19' | split: ', ' %}

{% include projects/doc-code.html %}

<hr>

### Ethical Challenges of Deepfake

Below is a last example of a pannel that I presented in the frame of an optional lecture, discussing the ethical challenges involved in rapidly emerging technologies such as deepfake.
{:style="text-align: justify"}

{% assign docs = 'deepfake_ppt' | split: ', ' %}
{% assign no_cover = true %}

{% include projects/doc-code.html %}
{% include back.html %}
