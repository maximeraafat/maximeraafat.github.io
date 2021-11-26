---
title: Machine Perception Project
tags: [Optical Flow, Deep Learning, Computer Vision]
style: border
color: primary
description: Report for the Machine Perception Project on Estimating Optical Flow
date: 01-06-2021
rank: 4
---

**Machine Perception** is a lecture taught at ETH Zurich, tackling the **most recent deep learning** approaches and architectures for perception tasks, such as **Variational Auto-Encoders**, **Generative Adversial Networks** or **Normalizing Flows**. Towards the end of the semester, the students had the opportunity to get some hands-on experience by implementing a state-of-the-art network for a concrete application in a small group. In my team, we focused on **estimating Optical Flow** by starting with [Nvidia's PWC-Net](https://openaccess.thecvf.com/content_cvpr_2018/html/Sun_PWC-Net_CNNs_for_CVPR_2018_paper.html){:target="_blank"} and building on top of it our own architecture, Seg-Net, which achieves more promising results.
{:style="text-align: justify"}

> For a detailed description on our work and the evaluated results, please have a look at the report below.

<hr>

### Report

{% assign docs = 'machine_perception' | split: ', ' %}

{% include projects/doc-code.html %}
{% include back.html %}
