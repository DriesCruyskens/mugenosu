---
title: "Seis"
date: "2020-02-15"
description: "This drawing is a wiggling spiral with a variant amount of amplitude, reminiscent of how a seismometor detects ground vibrations."
image: "./seis.png"
github: "https://github.com/DriesCruyskens/seis"
---

This sketch was kicked off by a coding train video on the chaos game. The chaos game algorithm is simple:

1. Pick a number of vertices with a fixed position (a triangle for example).

2. Start with a random starting dot somewhere on the screen.

3. Pick a random vertex from the ones you chose in step 1.

4. Put a new dot somewhere on the straight line between the starting dot and the chosen vertex.

5. Pick a new random vertex, but don't allow the previously picked vertex.

6. Put a new dot somewhere on the straight line between the previous dot and the chosen vertex.

7. repeat step 5 and 6 thousands of times. The more dots you use and the smaller they are, the better the result.

You'll notice that there are a couple of steps where you can tweak the algorithm. A big one is where on the straight line between the last dot and the randomly chosen vertex you put your new dot. Right in the middle yield a clear fractal, closer than that yields smaller groups of shapes. Placing the new dot farther than halfway is what gave me the most interesting result. It generates some kind of grit which makes the result less artificial.

A second important factor is the placements of the vertices. I recommend trying out all sorts of different configurations. What happens with convex shapes of n points? What happens with non-convex shapes? After some tinkering you should be able to achieve the same result as I got.

What I like most is how there is, from these simple rules, an emergence of a 3D cube shrouded in mist, almost sci-fi like.