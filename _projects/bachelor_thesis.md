---
title: Bachelor Thesis
tags: [Fluid simulation, Computer Graphics, Cut-Cells]
style: border
color: warning
description: Implicit Cut-Cells Implementation for Sub-GridLiquids Simulation
date: 12-06-2020
rank: 1
# external_url: https://polybox.ethz.ch
---

The focus of my bachelor thesis laid on extending the **cut-cell method**, a method for low resolution flow simulations when interacting with high resolution rigid bodies. Multiple previous research already addressed different approaches for flow simulations, such as the [SPH method](https://en.wikipedia.org/wiki/Smoothed-particle_hydrodynamics){:target="_blank"} (Smoothed-Particle Hydrodynamics) or the [PIC/FLIP methods](https://en.wikipedia.org/wiki/Particle-in-cell){:target="_blank"} (Particle-In-Cell and Fluid-Implicit-Particle). Although those techniques are very effective for visually realistic low cost fluid simulations, they do not handle liquid-solid interactions adaptively. The goal of the cut-cell approach is to **adaptively augment the grid resolution** to the boundary shape of an object interacting with the simulated fluid.
{:style="text-align: justify"}

> Note that most of the time for this work was spent in achieving a working `particle renderer`.

<hr>

### Report and Presentation

{% assign col_sm_nb = 6 %}
{% assign docs = 'bachelor_report, bachelor_ppt' | split: ', ' %}

{% include projects/doc-code.html %}
{% include back.html %}
