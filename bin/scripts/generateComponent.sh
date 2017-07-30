#!/bin/bash

USAGE="Usage: regen type name"

if [ $# == 0 ] || [ $# == 1 ]; then
    echo $USAGE
    exit 1;
fi

if [ "$1" == "component" ]; then
name=$2
Name="$(tr '[:lower:]' '[:upper:]' <<< ${name:0:1})${name:1}"

mkdir "./$name"

cat > "./$name/index.js" <<EOF
import React from 'react'
import css from './style.css'

const $Name = () => (
  <div className={css.container} />
)

$Name.propTypes = {
}

export default $Name
EOF

cat > "./$name/style.css" <<EOF
.container {

}
EOF

cat > "./$name/index.test.js"<<EOF
/* eslint-env jest */

import React from 'react'
import $Name from './'

describe('$name', () => {
  <$Name />
})
EOF

fi