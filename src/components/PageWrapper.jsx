import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function PageWrapper({ page }) {
  const contentRef = useRef(null)
  const scriptRef = useRef(null)

  useEffect(() => {
    const loadPage = async () => {
      try {
        const htmlResponse = await fetch(`/pages/${page}/index.html`)
        const htmlText = await htmlResponse.text()
        
        const parser = new DOMParser()
        const doc = parser.parseFromString(htmlText, 'text/html')
        
        const content = doc.querySelector('.content')
        const demo = doc.querySelector('.demo')
        
        if (contentRef.current) {
          contentRef.current.innerHTML = ''
          if (content) contentRef.current.appendChild(content.cloneNode(true))
          if (demo) contentRef.current.appendChild(demo.cloneNode(true))
        }

        const pageStyle = document.createElement('link')
        pageStyle.rel = 'stylesheet'
        pageStyle.href = `/pages/${page}/style.css`
        document.head.appendChild(pageStyle)

        const gsapScript = document.createElement('script')
        gsapScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js'
        gsapScript.onload = async () => {
          const scriptResponse = await fetch(`/pages/${page}/script.js`)
          const scriptText = await scriptResponse.text()
          
          const script = document.createElement('script')
          script.type = 'module'
          script.textContent = scriptText
          document.body.appendChild(script)
          scriptRef.current = script
        }
        document.body.appendChild(gsapScript)

        return () => {
          document.head.removeChild(pageStyle)
          if (scriptRef.current) document.body.removeChild(scriptRef.current)
        }
      } catch (error) {
        console.error('Error loading page:', error)
      }
    }

    loadPage()
  }, [page])

  return (
    <main>
      <header className="nav">
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
        <a href="https://jsmastery.com/all-courses" target="_blank">GSAP Course</a>
      </header>
      <div ref={contentRef}></div>
    </main>
  )
}

export default PageWrapper
