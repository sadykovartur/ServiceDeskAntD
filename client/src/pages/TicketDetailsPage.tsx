import { Alert, Card, Empty, List, Spin, Tag, Typography } from 'antd'
import { useParams } from 'react-router-dom'

type ViewState = 'loading' | 'error' | 'notFound' | 'data'

// ЛР2: переключайте состояние вручную
const view: ViewState = 'data'

export function TicketDetailsPage() {
  const { id } = useParams()

  return (
    <Card title={`Ticket #${id}`}>
      {view === 'loading' && <Spin />}
      {view === 'error' && <Alert type="error" message="Ошибка загрузки (stub)" />}
      {view === 'notFound' && <Empty description="Тикет не найден (stub)" />}

      {view === 'data' && (
        <>
          <Typography.Title level={4} style={{ marginTop: 0 }}>
            Не работает вход (stub)
          </Typography.Title>

          <Typography.Paragraph>
            <b>Status:</b> <Tag>New</Tag> <b>Priority:</b> <Tag>High</Tag>
          </Typography.Paragraph>

          <Typography.Title level={5}>Comments (stub)</Typography.Title>
          <List
            dataSource={[
              { id: 1, text: 'Пожалуйста, проверьте логин/пароль' },
              { id: 2, text: 'Проблема воспроизводится на другом ПК' }
            ]}
            renderItem={(item) => <List.Item key={item.id}>{item.text}</List.Item>}
          />
        </>
      )}
    </Card>
  )
}
