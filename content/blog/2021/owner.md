---
title: "What does the Owner Role do?"
description: Understand vCenter 7 U2a roles 
date: 2021-05-15T21:44:34+02:00
images: 
    - /images/blog/2021/vsphere-owner.png
categories:
    - VMware
    - Kubernetes
    - vSphere
draft: true
---

In the most recent patch, as of this writing vCenter U2a, there's the introduction of a new role for users of a _namespace_ and that is the **owner** role. I was looking into the official documentation to understand what the new role allows you to do in comparison to the already availabe roles. As of this writing there is nothing covering that topic in the documentation. So let's have a look what we can find. 

## Namespace Self Service

With a 

If you want to see a video of it in action have a look at this one from the official vSphere YouTube channel.

{{< youtube-video videoid=W7fYdlQdjaA >}}

## How is this implemented?

Labeling instead of k8s RABC rules. 