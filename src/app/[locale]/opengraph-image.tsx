import { ImageResponse } from 'next/og'
import { getGT } from 'gt-next/server'

// Image metadata
export const alt = 'Archie McKenzie'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// The light mode SF emoji (daytime: Golden Gate Bridge in fog)
const sfEmoji = '🌁'

// Image generation
export default async function Image() {
  const t = await getGT();
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
        }}
      >
        <div style={{ fontSize: 220, display: 'flex' }}>{sfEmoji}</div>
        <div style={{ fontSize: 64, fontWeight: 600 }}>Archie McKenzie</div>
        <div style={{ fontSize: 36, color: '#555' }}>
          {t('Founder of General Translation, applied philologist, and friend to all AI agents.')}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
