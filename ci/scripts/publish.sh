#!/bin/sh

set -ue 

#connect to ftp 

lftp -c "open  -u $FTP_USERNAME,$FTP_PASSWORD $FTP_SERVER; mirror -e -R blog-deployment /"