#!/bin/sh

set -ue 

#connect to ftp 

lftp -c "open  -u $FTP_USERNAME,$FTP_PASSWORD $FTP_SERVER -e 'set ftp:list-options -a'; mirror -e -R blog-deployment /"