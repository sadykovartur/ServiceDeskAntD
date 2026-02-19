import { Alert, Button, Card, Form, Input, Typography } from 'antd'
import { Link } from 'react-router-dom'

export function LoginPage() {
  const showError = false

  return (
    <Card style={{ maxWidth: 420, marginInline: 'auto' }}>
      <Typography.Title level={3} style={{ marginTop: 0 }}>
        Login
      </Typography.Title>

      {showError && <Alert type="error" message="Ошибка авторизации (stub)" style={{ marginBottom: 16 }} />}

      <Form layout="vertical">
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input placeholder="student@uni.edu" />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="••••••••" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Sign in (stub)
        </Button>
      </Form>

      <Typography.Paragraph style={{ marginTop: 12, marginBottom: 0 }}>
        Нет аккаунта? <Link to="/register">Регистрация</Link>
      </Typography.Paragraph>
    </Card>
  )
}
