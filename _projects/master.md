---
title: Master Thesis
tags: [3D Avatars, Generative Modelling, Neural Rendering]
style: border
color: chocolate !important # need !important to override bootstrap class
description: Generative Adversarial Networks for view consistent Human Appearance Modelling
date: 26-09-2022
rank: 6
---

<hr class="invisible">
My master thesis consisted in developing a generative model for multi-view consistent full-body textured human avatars. The proposed method combined a simple differentiable point-based rendering module with a lightweight generative adversarial network to learn human appearances in the form of SMPLX UV texture maps, from single-view photographs only. When rendered on the underyling SMPLX geometry, the generated textures are passed through a discriminator and accordingly classified as real or fake images against the ground truth images.
{:style="text-align: justify"}

This pipeline offers several advantages over current rival techniques, such as guaranteed robustness to novel body poses and camera views due to the view consistent nature of UV maps, or real-time rendering of novel appearances.
{:style="text-align: justify"}
<hr class="invisible">

> The generator did not converge due to many instabilities encountered during the fragile GAN training. This work accordingly primarily serves as a basis for future research. The code is available on my GitHub.

{% assign github = "https://github.com/maximeraafat/3DiGAN" %}

<button type="button" class="btn btn-outline-primary" onclick="window.open('{{ github }}', '_blank'); return false"><span class="fab fa-github"></span> GitHub</button>

<hr class="long">

### **Report and Presentation**

{% assign col_sm_nb = 6 %}
{% assign docs = 'master_report, master_ppt' | split: ', ' %}

{% include projects/doc-code.html %}
{% include back.html %}