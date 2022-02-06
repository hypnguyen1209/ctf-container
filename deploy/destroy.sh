#!/bin/bash

HOST_NAME="node-challenge"

MAPPORT=$1

docker rm -f "ctf-${HOST_NAME}-${MAPPORT}"