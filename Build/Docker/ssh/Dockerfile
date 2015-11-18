# sshd
#
# VERSION               0.0.1

FROM     ubuntu:13.10
MAINTAINER Stanley Lewis "stanleylewisj@comcast.net"

# make sure the package repository is up to date
RUN apt-get update

RUN apt-get install -y openssh-server
RUN mkdir -p /var/run/sshd 
RUN mkdir -p /home/root/.ssh
RUN chmod 700 -R /home/root/.ssh
ADD docker_rsa.pub /home/root/.ssh/authorized_keys

RUN echo 'root:scarmod' | chpasswd

EXPOSE 22
CMD    /usr/sbin/sshd -D
