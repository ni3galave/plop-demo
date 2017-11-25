#!/bin/bash
echo "Generating enums for you application...";

#Delete existing generated file
rm -rf src/

plop enumGenerator

if [ $? -eq 0 ]; then
    echo "Enums generated successfuly.....";
else
    echo "Enums generation failed";
fi
