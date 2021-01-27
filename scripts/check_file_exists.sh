#!/bin/bash

# https://stackoverflow.com/questions/638975/how-do-i-tell-if-a-regular-file-does-not-exist-in-bash

FILE=$1

if [[ -f $FILE ]] ; then
    echo "Error: $FILE exists."
    exit 1
fi

exit 0
