import React from 'react'

export default function Topics({title, urls}: {title: string, urls: string[]}) {
  return (
    <>
    <h1>{title}</h1>
    {urls.map((url, index) => <a key={index} href={url} target="_blank">{url}</a>)}
    </>
  )
}
