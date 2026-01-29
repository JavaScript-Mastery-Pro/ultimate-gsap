import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <header className="nav">
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
        <a href="https://jsmastery.com/all-courses" target="_blank">GSAP Course</a>
      </header>

      <section className="container">
        <h1>The Ultimate GSAP Course Workshop</h1>

        <ul>
          <li>
            <Link to="/pages/01a_your-first-animation">
              <img src="/cover1.png" alt="animation-cover" />
              <div>
                <h3>Your First Animation</h3>
                <p>Learn how to create your first animation with GSAP</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/01b_challenge">
              <img src="/cover2.png" alt="animation-cover" />
              <div>
                <h3>Basic Challenge</h3>
                <p>Practice your skills by creating a pulsing glow animation</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/02a_understanding-properties">
              <img src="/cover3.png" alt="animation-cover" />
              <div>
                <h3>Understanding Properties</h3>
                <p>Learn how GSAP interprets and animates different types of properties to create visually rich motion.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/02b_understanding-methods">
              <img src="/cover4.png" alt="animation-cover" />
              <div>
                <h3>Understanding Methods</h3>
                <p>Learn how to control GSAP animations using built-in methods to create complex motion sequences.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/03a_power-easing">
              <img src="/cover5.png" alt="animation-cover" />
              <div>
                <h3>Power Easing</h3>
                <p>Learn how Power Easing in GSAP offers progressively stronger acceleration and deceleration for snappier or smoother motion control.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/04a_sine-easing">
              <img src="/cover6.png" alt="animation-cover" />
              <div>
                <h3>Sine Easing</h3>
                <p>Learn how Sine Easing in GSAP creates smooth, natural motion by mimicking the curve of a sine wave</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/05a_back-easing">
              <img src="/cover7.png" alt="animation-cover" />
              <div>
                <h3>Back Easing</h3>
                <p>Learn how Back Easing in GSAP creates motion that briefly overshoots before settling, adding a dynamic, elastic feel to animations.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/06a_bounce-easing">
              <img src="/cover8.png" alt="animation-cover" />
              <div>
                <h3>Bounce Easing</h3>
                <p>Learn how Bounce Easing in GSAP simulates realistic bouncing effects by mimicking gravity and collision dynamics.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/07a_elastic-easing">
              <img src="/cover9.png" alt="animation-cover" />
              <div>
                <h3>Elastic Easing</h3>
                <p>Learn how Elastic Easing in GSAP produces spring-like motion with dramatic overshoot and recoil for high-energy animations.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/08a_expo-easing">
              <img src="/cover10.png" alt="animation-cover" />
              <div>
                <h3>Expo Easing</h3>
                <p>Learn how Expo Easing in GSAP creates dramatic animations that accelerate or decelerate exponentially for a powerful impact.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/09a_apple-dock">
              <img src="/cover11.png" alt="animation-cover" />
              <div>
                <h3>Apple Dock</h3>
                <p>Learn how to recreate Apple Dock–style animations in GSAP using a mix of easing functions for smooth, responsive, and playful motion.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/10a_learn-to">
              <img src="/cover12.png" alt="animation-cover" />
              <div>
                <h3>Learn Gsap To</h3>
                <p>Learn how <code>gsap.to()</code> lets you animate any property to a desired value with full control over timing, easing, and callbacks.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/10b_challenge-to">
              <img src="/cover13.png" alt="animation-cover" />
              <div>
                <h3>Gsap To Challenge</h3>
                <p>Put your skills to the test by using <code>gsap.to()</code> to create a multi-property, interactive animation with custom easing and sequencing.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/11a_learn-from">
              <img src="/cover14.png" alt="animation-cover" />
              <div>
                <h3>Learn Gsap From</h3>
                <p>Learn how <code>gsap.from()</code> animates elements from a starting state to their current state, ideal for entrance animations.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/11b_challenge-from">
              <img src="/cover15.png" alt="animation-cover" />
              <div>
                <h3>Gsap From Challenge</h3>
                <p>Put your skills to the test by creating engaging entrance animations using <code>gsap.from()</code> to reveal elements with flair.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/12a_learn-fromto">
              <img src="/cover16.png" alt="animation-cover" />
              <div>
                <h3>Learn Gsap fromTo</h3>
                <p>Learn how <code>gsap.fromTo()</code> gives you precise control by defining both the start and end states of an animation explicitly.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/12b_challenge-fromto">
              <img src="/cover17.png" alt="animation-cover" />
              <div>
                <h3>Gsap fromTo Challenge</h3>
                <p>Put your skills to the test by building a precise animation using <code>gsap.fromTo()</code>, defining both start and end states.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/13a_learn-set">
              <img src="/cover18.png" alt="animation-cover" />
              <div>
                <h3>Learn Gsap Set</h3>
                <p>Learn how <code>gsap.set()</code> instantly applies property values without animation, perfect for setup, state resets, or quick style tweaks.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/13b_challenge-set">
              <img src="/cover19.png" alt="animation-cover" />
              <div>
                <h3>Gsap Set Challenge</h3>
                <p>Put your skills to the test by using <code>gsap.set()</code> to initialize animation states, and control visibility.</p>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/pages/14a_learn-timeline">
              <img src="/cover20.png" alt="animation-cover" />
              <div>
                <h3>Gsap Timeline</h3>
                <p>Learn how <code>gsap.timeline()</code> lets you sequence multiple animations with precise control over timing, overlap, and orchestration.</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Home
