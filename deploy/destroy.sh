#!/bin/bash

NAME_CHALL="node-challenge"

MAPPORT=$1

docker rm -f "ctf-${NAME_CHALL}-${MAPPORT}"