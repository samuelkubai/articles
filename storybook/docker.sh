#!/bin/bash

APP_PATH=$(pwd)

if [ $1 == 'storybook' ]
then
    docker build -t storybook_demo -f Dockerfile.stories .
    docker run -it --name storybook_demo_container \
    -p 9001:9001 \
    -v ${APP_PATH}:/usr/src/app \
    -v /usr/src/app/node_modules \
    --rm storybook_demo
else
    printf '\n\n====================\nNeed a little help:\n====================\n\n'
    printf 'To launch the storybook:\n'
    printf './docker.sh storybook\n\n'
fi
