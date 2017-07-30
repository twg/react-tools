#!/bin/bash

location=$2
if [ -z "$2" ] 
  then
    location="."
fi

location+=/$1

target=`dirname "$0"`
target+="/../../src/$1"

cp -r $target $location
echo $1 copied to $location
