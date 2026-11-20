import { useBoard } from './board'
import { Route, Routes } from 'react-router'

import NotFoundPage from './pages/NotFoundPage'
import RequestPage from './pages/RequestPage'
import BoardPage from './pages/BoardPage'
import StatsPage from './pages/StatsPage'
import Header from './components/Header'

function App() {
  const {
    loading,
    requests,
    newCount,
    notice,
    error,
    handleNext,
    retry,
    handleRemove,
    handleAdd,
  } = useBoard()

  return (
    <>
      <Header newCount={newCount} />
      {notice !== '' && <p className="notice notice--page">{notice}</p>}

      <Routes>
        <Route
          path="/"
          element={
            <BoardPage
              onRemove={handleRemove}
              onNext={handleNext}
              onAdd={handleAdd}
              onRetry={retry}
              error={error}
              requests={requests}
              loading={loading}
            />
          }
        />
        <Route
          path="/stats"
          element={<StatsPage loading={loading} requests={requests} />}
        />
        <Route
          path="/requests/:id"
          element={
            <RequestPage
              onRemove={handleRemove}
              onNext={handleNext}
              loading={loading}
              requests={requests}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
