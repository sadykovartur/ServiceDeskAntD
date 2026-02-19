import { Button, Card, Form, Input, Select, Typography } from 'antd'

export function CreateTicketPage() {
  return (
    <Card title="Create Ticket">
      <Form layout="vertical">
        <Form.Item label="Title" name="title" rules={[{ required: true, min: 3, max: 100 }]}>
          <Input placeholder="Коротко опишите проблему" />
        </Form.Item>

        <Form.Item label="Category" name="categoryId" rules={[{ required: true }]}>
          <Select
            placeholder="Выберите категорию (stub)"
            options={[
              { value: 1, label: 'UI' },
              { value: 2, label: 'Auth' }
            ]}
          />
        </Form.Item>

        <Form.Item label="Priority" name="priority" rules={[{ required: true }]}>
          <Select
            placeholder="Выберите приоритет (stub)"
            options={[
              { value: 'Low', label: 'Low' },
              { value: 'Medium', label: 'Medium' },
              { value: 'High', label: 'High' }
            ]}
          />
        </Form.Item>

        <Form.Item label="Description" name="description" rules={[{ required: true, min: 10, max: 2000 }]}>
          <Input.TextArea rows={6} placeholder="Подробное описание проблемы" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit (stub)
        </Button>

        <Typography.Paragraph style={{ marginTop: 12, marginBottom: 0, opacity: 0.7 }}>
          ЛР2: сохранение на сервер будет в ЛР5.
        </Typography.Paragraph>
      </Form>
    </Card>
  )
}
