---
title: Master Thesis
tags: [Computer Vision, Generative Modelling, Neural Rendering]
style: border
color: lightseagreen !important # need !important to override bootstrap class
description: Generative Adversial Networks for view consistent Human Appearance Modelling
date: 26-09-2022
rank: 7
---

<hr style='visibility:hidden'>
My master thesis consisted in developing a generative model for multi-view consistent full-body textured human avatars. The proposed method combined a simple differentiable point-based rendering module with a lightweight generative adverisal network to learn human appearances in the form of SMPLX UV texture maps, from single-view photographs only. When rendered on the underyling SMPLX geometry, the generated textures are passed through a discriminator and accordingly classified as real or fake images against the ground truth images.
{:style="text-align: justify"}

This pipeline offers several advantages over current rival techniques, such as guaranteed robustness to novel body poses and camera views due to the view consistent nature of UV maps, or real-time rendering of novel appearances.
{:style="text-align: justify"}
<hr style='visibility:hidden'>

> The generator did not converge due to many instabilities encountered during the fragile GAN training. This work accordingly primarily serves as a basis for future research. The code is available on my GitHub.

<button type="button" class="btn btn-outline-primary" onclick="window.open('https://github.com/maximeraafat/3DiGAN', '_blank'); return false"><span class="fab fa-github"></span> GitHub</button>

<hr style='height:{{site.height}}'>

### **Report and Presentation**

{% assign col_sm_nb = 6 %}
{% assign docs = 'master_report, master_ppt' | split: ', ' %}

{% include projects/doc-code.html %}
{% include back.html %}