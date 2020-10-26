[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

# pingpong

## Demo link : https://fabiencont.github.io/pingpong/
> Use up/down arrow for player 1 and z/s key for player 2

## Docker

> build server :
> docker build . -t pingball

> build client :
> docker build -f DockerfileClient -t pingballclient .

> run server :
> docker run --publish 3000:3000 --detach --name pgs pingball

> run client :
> docker run --publish 8888:8888 --detach --name pgc pingballclient

> remove container :
> docker rm --force pgs

## Overview

> *Game development is in progress...*

## Theatre

> *[Theatre](https://github.com/theatrejs) is a lightweight, simple and fast javascript game framework.*

This game is built with the [Theatre](https://github.com/theatrejs) game framework generator (see : [`generator-theatre`](https://github.com/theatrejs/generator-theatre)).

## [Change Log](./CHANGELOG.md)

## [License](./LICENSE)
