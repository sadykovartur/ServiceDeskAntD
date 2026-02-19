import { Layout, Menu, Typography } from 'antd'
import type { MenuProps } from 'antd'
import { useMemo } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { CreateTicketPage } from '../../pages/CreateTicketPage'
import { LoginPage } from '../../pages/LoginPage'
import { RegisterPage } from '../../pages/RegisterPage'
import { TicketDetailsPage } from '../../pages/TicketDetailsPage'
import { TicketsListPage } from '../../pages/TicketsListPage'
import { PlaceholderPage } from '../../pages/PlaceholderPage'

const { Header, Sider, Content } = Layout
type AppMenuItem = Required<MenuProps>['items'][number]

export function AppLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  const items: AppMenuItem[] = useMemo(
    () => [
      { key: '/tickets', label: 'My Tickets' },
      { key: '/tickets/new', label: 'Create Ticket' },
      { type: 'divider' },
      { key: '/operator/queue', label: 'Operator: Queue (stub)' },
      { key: '/admin/categories', label: 'Admin: Categories (stub)' }
    ],
    []
  )

  const selectedKey = useMemo(() => {
    const path = location.pathname
    if (path.startsWith('/tickets/new')) return '/tickets/new'
    if (path.startsWith('/tickets/')) return '/tickets'
    return path
  }, [location.pathname])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div style={{ padding: 16 }}>
          <Typography.Title level={5} style={{ color: '#fff', margin: 0 }}>
            Service Desk
          </Typography.Title>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          items={items}
          selectedKeys={[selectedKey]}
          onClick={(e) => navigate(e.key)}
        />
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', paddingInline: 16 }}>
          <Typography.Text>Учебный проект • ЛР2 каркас</Typography.Text>
        </Header>

        <Content style={{ margin: 16 }}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/tickets" element={<TicketsListPage />} />
            <Route path="/tickets/new" element={<CreateTicketPage />} />
            <Route path="/tickets/:id" element={<TicketDetailsPage />} />

            <Route path="/operator/queue" element={<PlaceholderPage title="Operator: Queue (stub)" />} />
            <Route path="/admin/categories" element={<PlaceholderPage title="Admin: Categories (stub)" />} />

            <Route path="*" element={<PlaceholderPage title="404 (stub)" />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}
