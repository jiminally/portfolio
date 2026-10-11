import DesignSystemPage from '@/pages/DesignSystemPage'
import HomePage from '@/pages/HomePage'

function App() {
  // Keep the reference screen accessible until application routing is introduced.
  const showDesignSystem =
    new URLSearchParams(window.location.search).get('view') === 'design-system'
  return showDesignSystem ? <DesignSystemPage /> : <HomePage />
}

export default App
