import React from 'react'

function One() {
  return <h1>One</h1>
}

function Two() {
  return <h1>Two</h1>
}

function Three() {
  return <h1>Three</h1>
}


// Given three React Functional Components:
// ie: One, Two and Three
// You have to:
// export Three as default
// and export One and Two normally

// Code here:
 export { One, Two }

export default Three
