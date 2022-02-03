---
title: "Getting started with Tanzu and NSX Advanced Load Balancer"
date: 2022-02-01T09:57:34+01:00
publishDate: 2022-02-06
author: Ulrich Hölscher
authorLink: https://twitter.com/devulrix

featuredImage: "tanzu-vds.jpg"
featuredImageAlt: "VMware Tanzu Logo"

categories: ["Tanzu", "YouTube"]
tags: ["Kubernetes", "Tutorial", "AVI", "VMware"]

draft: false
---
## Overview

In this multi-part series, we will instal Tanzu Kubernetes Grid Service with vSphere 7 and vSphere Networking. With the update of vSphere 7U2, the support for NSX Advanced Load balancer (formaly known as AVI) was added. I'll be using the U3 update for vCenter. 

{{< message type="info" title="Disclaimer" >}}

This is not an official VMware Guide. If you're looking for that, please follow this [guide](https://core.vmware.com/resource/tanzu-proof-concept-guide#poc-guide-overview).

{{< /message >}}

Below you find the coresponding YouTube video of me doing everything described in this article. All files are stored in a [GitHub repository]().

YouTube

If you're looking for an easy automated installation, have a look at William Lam's [repository](https://github.com/lamw/vsphere-with-tanzu-nsx-advanced-lb-automated-lab-deployment). William is building an automated nested environment to get you started in less than an hour.

## Prerequisites

Before we can start, we need to make sure that we meet the minimum criteria for the environment. 

* 3 ESXi hosts with vSphere 7.0 and Enterprise Plus license
* vCenter 7.0 U3
* 3 routed Networks
  * **Managment Network** with 5 consecutive IP addresses and minimum 6 in total
  * At least one **Workload Network** with the size of the K8s workers you want to support. In this tutorial we'll be using a /24.
  * One **VIP/Frontend Network** with the size of the Load Balancer Service you want to use. At least 1 for each K8s cluster is needed.

For a full list of requierements have a look at the official [documentation](https://docs.vmware.com/en/VMware-vSphere/7.0/vmware-vsphere-with-tanzu/GUID-7FF30A74-DDDD-4231-AAAE-0A92828B93CD.html). We will be covering the network setup in much more detail in the [vSphere Networking](#vsphere-with-tanzu---vsphere-networking) section. 
 
### vSphere with Tanzu - vSphere Networking

![Network Setup for NSX Advanced Loadbalancer and Tanzu](networking.svg)

## Supervisor Cluster Setup

## Tanzu Kubernetes Cluster Deployment

After the installation finished the next step is to create our first Tanzu Kubernetes Cluster.