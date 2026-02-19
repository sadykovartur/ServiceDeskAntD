import { Alert, Button, Card, Empty, Input, Space, Spin, Table, Tag, Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { Link } from 'react-router-dom'

type ViewState = 'loading' | 'error' | 'empty' | 'data'

// ЛР2: переключайте состояние вручную
const view: ViewState = 'data'

type TicketRow = {
  id: number
  title: string
  status: 'New' | 'Assigned' | 'Resolved'
  priority: 'Low' | 'Medium' | 'High'
}

const columns: ColumnsType<TicketRow> = [
  { title: 'ID', dataIndex: 'id', width: 80 },
  {
    title: 'Title',
    dataIndex: 'title',
    render: (value, row) => <Link to={`/tickets/${row.id}`}>{value}</Link>
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (v) => <Tag>{v}</Tag>
  },
  {
    title: 'Priority',
    dataIndex: 'priority',
    render: (v) => <Tag>{v}</Tag>
  }
]

const data: TicketRow[] = [
  { id: 1, title: 'Не открывается страница', status: 'New', priority: 'High' },
  { id: 2, title: 'Ошибка в форме', status: 'Assigned', priority: 'Medium' }
]

export function TicketsListPage() {
  return (
    <Card
      title="My Tickets"
      extra={
        <Button type="primary">
          <Link to="/tickets/new">Create</Link>
        </Button>
      }
    >
      <Space style={{ marginBottom: 16 }} wrap>
        <Input placeholder="Search (stub)" style={{ width: 240 }} />
        <Input placeholder="Status filter (stub)" style={{ width: 200 }} />
      </Space>

      {view === 'loading' && <Spin />}
      {view === 'error' && <Alert type="error" message="Ошибка загрузки (stub)" />}
      {view === 'empty' && <Empty description="Пока тикетов нет (stub)" />}
      {view === 'data' && <Table rowKey="id" columns={columns} dataSource={data} pagination={false} />}

      {view !== 'data' && (
        <Typography.Paragraph style={{ marginTop: 16, marginBottom: 0, opacity: 0.7 }}>
          ЛР2: это заглушки. Реальные данные будут в ЛР4.
        </Typography.Paragraph>
      )}
    </Card>
  )
}
