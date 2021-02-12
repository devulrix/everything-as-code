#!/usr/bin/env bash 

set -ue 

cd source 
hugo --minify 

cp -R public/* ../blog-depyloment
