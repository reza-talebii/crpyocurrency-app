import { ConfigProvider } from 'antd'
import en_US from 'antd/locale/en_US'
import { QueryClient, QueryClientProvider } from 'react-query'
import Routers from 'routes/index'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 20000,
    },
  },
})

function App() {
  return (
    <ConfigProvider locale={en_US} direction="ltr">
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default App
