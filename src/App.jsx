import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageWrapper from './components/PageWrapper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/01a_your-first-animation" element={<PageWrapper page="01a_your-first-animation" />} />
        <Route path="/pages/01b_challenge" element={<PageWrapper page="01b_challenge" />} />
        <Route path="/pages/02a_understanding-properties" element={<PageWrapper page="02a_understanding-properties" />} />
        <Route path="/pages/02b_understanding-methods" element={<PageWrapper page="02b_understanding-methods" />} />
        <Route path="/pages/03a_power-easing" element={<PageWrapper page="03a_power-easing" />} />
        <Route path="/pages/04a_sine-easing" element={<PageWrapper page="04a_sine-easing" />} />
        <Route path="/pages/05a_back-easing" element={<PageWrapper page="05a_back-easing" />} />
        <Route path="/pages/06a_bounce-easing" element={<PageWrapper page="06a_bounce-easing" />} />
        <Route path="/pages/07a_elastic-easing" element={<PageWrapper page="07a_elastic-easing" />} />
        <Route path="/pages/08a_expo-easing" element={<PageWrapper page="08a_expo-easing" />} />
        <Route path="/pages/09a_apple-dock" element={<PageWrapper page="09a_apple-dock" />} />
        <Route path="/pages/10a_learn-to" element={<PageWrapper page="10a_learn-to" />} />
        <Route path="/pages/10b_challenge-to" element={<PageWrapper page="10b_challenge-to" />} />
        <Route path="/pages/11a_learn-from" element={<PageWrapper page="11a_learn-from" />} />
        <Route path="/pages/11b_challenge-from" element={<PageWrapper page="11b_challenge-from" />} />
        <Route path="/pages/12a_learn-fromto" element={<PageWrapper page="12a_learn-fromto" />} />
        <Route path="/pages/12b_challenge-fromto" element={<PageWrapper page="12b_challenge-fromto" />} />
        <Route path="/pages/13a_learn-set" element={<PageWrapper page="13a_learn-set" />} />
        <Route path="/pages/13b_challenge-set" element={<PageWrapper page="13b_challenge-set" />} />
        <Route path="/pages/14a_learn-timeline" element={<PageWrapper page="14a_learn-timeline" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
