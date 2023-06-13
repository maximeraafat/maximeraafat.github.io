---
title: Machine Perception Project
tags: [Optical Flow, Deep Learning, Computer Vision]
style: border
color: primary
description: Report for the Machine Perception Project on Estimating Optical Flow
date: 01-06-2021
rank: 4
---

<hr style='visibility:hidden'>
**Machine Perception** is a lecture taught at ETH Zurich, tackling the **most recent deep learning** approaches and architectures for perception tasks, such as **Variational Auto-Encoders**, **Normalizing Flows** or **Generative Adversarial Networks**. Towards the end of the semester, each student had the opportunity to get some hands-on experience by implementing a state-of-the-art network for a concrete application, in a team of 3 people. My group focused on **estimating human Optical Flow** by building our own architecture, Seg-Net, on top of [Nvidia's PWC-Net](https://openaccess.thecvf.com/content_cvpr_2018/html/Sun_PWC-Net_CNNs_for_CVPR_2018_paper.html), to achieve better results.
{:style="text-align: justify"}
<hr style='visibility:hidden'>

> A detailed description on our work and evaluated results are available in the below report.

<hr style='height:{{site.height}}'>

### **Report**

{% assign docs = 'machine_perception' | split: ', ' %}

{% include projects/doc-code.html %}
{% include back.html %}
