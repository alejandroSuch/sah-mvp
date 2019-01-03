#!/usr/bin/env bash

if [ $# -ne 1 ]
then
  echo "";
  echo "Usage: $0 TAG";
  echo "Example: $0 1.1.2";
  echo "";
  echo "";
  echo "";
  exit 1;
fi

echo "VERSION IS $1";

VERSION=$1 docker-compose up