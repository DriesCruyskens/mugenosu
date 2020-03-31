---
title: Test Sketch
date: 2020-03-31T10:24:50.790Z
description: This is a test sketch added using Netlify CMS in Staging.
image: /uploads/flow-hitteset.png
github: 'https://github.com/DriesCruyskens/mugenosu'
url: 'https://mugenosu.xyz'
---
This drawing consists of a number of paths that originate from a circle shape. They follow an OpenSimplex noisefield until they have a certain length or collide with another path. The path is determent step-by-step and because of path smoothing, I don't need to add a vertex every pixel but can use a step size of about 10ish.

At first all paths where drawn at the same time but this soon became too computationally expensive as each path has to look for a collision with all the other ones. This was later changed to drawing each path after another so that they only have to check for collisions against paths that came before. This is still not very efficiënt because the use of Paperjs' \`intersect\` method is very slow. Other problems with intersect are it does not take stroke width into account and because the direction a path makes is based on OpenSimplex noise, lines close to eachother tend to run parallel. This causes lines to not actually intersect, to the point I wonder if the intersects method actually ever worked. Below is an image allowing all overlap, in other words all streams run until they have reached their maximum length:

![alt text](/uploads/flow-intersect.png "title text")