#!/bin/bash

function run(){
    python data/crawlKoreaAgeDeathsPerData.py
    python data/crawlKoreaRegionalCumulativeData.py
    python data/crawlKoreaRegionalData.py
    python data/crawlKoreaTotalCumulativeData.py
    python data/crawlWorldCumulativeData.py
    python data/crawlWorldData.py
    echo "==========Crawling complete!=========="
}

run