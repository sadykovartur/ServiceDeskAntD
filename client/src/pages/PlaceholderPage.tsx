import { Card, Typography } from 'antd'

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <Card>
      <Typography.Title level={3} style={{ marginTop: 0 }}>
        {title}
      </Typography.Title>
      <Typography.Paragraph>Это заглушка для ЛР2.</Typography.Paragraph>
    </Card>
  )
}
