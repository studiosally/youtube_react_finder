import React from 'react'
import type { Video } from './types'

const VideoItem = function(props) {

	console.log("props received", props)

  return (
    <div>
    <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + props.videoId} frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

export default VideoItem

