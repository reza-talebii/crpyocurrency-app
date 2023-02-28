import { ConfigProvider } from 'antd'
import en_US from 'antd/locale/en_US'
import { QueryClient, QueryClientProvider } from 'react-query'
// import darkTheme from 'styles/theme/dark'
import Routers from 'routes/index'

function App() {
  const queryClient = new QueryClient()

  return (
    <ConfigProvider locale={en_US} direction="ltr">
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default App
