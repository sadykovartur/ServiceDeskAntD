import { Button, Card, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

export function RegisterPage() {
  return (
    <Card style={{ maxWidth: 420, marginInline: 'auto' }}>
      <Typography.Title level={3} style={{ marginTop: 0 }}>
        Register
      </Typography.Title>

      <Form layout="vertical">
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input placeholder="student@uni.edu" />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, min: 6 }]}>
          <Input.Password placeholder="минимум 6 символов" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Create account (stub)
        </Button>
      </Form>

      <Typography.Paragraph style={{ marginTop: 12, marginBottom: 0 }}>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </Typography.Paragraph>
    </Card>
  )
}
