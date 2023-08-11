#!/usr/bin/env bash

# parameter 1: templates prefix

set -e

PREFIX=$1
aws --output text ses describe-configuration-set --configuration-set-name "$PREFIX"

for sourceFile in ../../??/email/*.html
do
    rm -f *.tmp
    lang=`echo $sourceFile|cut -d / -f 3`
    SUBJECT="`head -1 $sourceFile`"
    # trim trailing space
    SUBJECT="${SUBJECT%%$2}"

    cat ../../common/$lang/email/header.html > html.tmp
    sed '1d' < "$sourceFile" >> html.tmp
    cat ../../common/$lang/email/footer.html >> html.tmp
    test -s html.tmp
    jq -MRs . < html.tmp > html-jq.tmp

    baseFileName=`basename $sourceFile .html`-$lang
    jq -Mn -f template.jq --arg template "$PREFIX-$baseFileName" --arg subject "$SUBJECT" html-jq.tmp . > template.tmp

    echo Upload "$PREFIX-$baseFileName"...
    aws ses update-template --cli-input-json "$(cat template.tmp)" || (
        read -p "Create the template $PREFIX-$baseFileName? (y/N) " res
        test "$res" == 'y'
        aws ses create-template --cli-input-json "$(cat template.tmp)"
    )
    rm -f *.tmp
done
