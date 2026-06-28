import { ImageResponse } from 'next/og'
import { getGT } from 'gt-next/server'
import getSFEmoji from '@/js/sf'

// Image metadata
export const alt = 'Archie McKenzie'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          background: 'white',
          color: 'black',
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 220, display: 'flex' }}>{getSFEmoji()}</div>
        <div style={{ fontSize: 64, fontWeight: 600, fontFamily: 'serif' }}>Archie McKenzie</div>
      </div>
    ),
    {
      ...size,
    }
  )
}
