import React from 'react'

export default function Filter({text,filterName}) {
  return (
    <>
        {text} <input onChange={filterName} />

    </>
  )
}
