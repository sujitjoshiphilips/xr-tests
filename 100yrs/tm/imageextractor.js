const extractFrames = require('ffmpeg-extract-frames')
await extractFrames({
  input: '/videos/v1/v1.mp4',
  output: './v1-%1.jpg'
})

//100yrs\tm\videos\v1\v1.mp4