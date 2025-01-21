import * as React from "react"

const IndexPage = () => {
  return (
  <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
    <p style={{ fontSize: '1.5rem', marginTop: '20px' }}>
      Ambas partes
    </p>
    <img
      alt="uandi"
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLwJrXNi0nHJT7dWXBs9x4Tu2FiSXJK060iYvIGN9jggQYt-Ti8mSKlgIrSRcQQmvMm7qHapUEEpP6975zMpvQ3lLGRTWpUXmGkuLs5M2wYib3r8dlZRwTowPKcAKH4YnOStoVAcPxkdq6/s1600/d%25C3%25ADa+y+noche.jpg" 
      style={{ width: '60%', height: 'auto' }}
    />
  </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
