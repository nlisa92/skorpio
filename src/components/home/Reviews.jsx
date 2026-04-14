import { Card, Row, Col, Typography, Avatar, Carousel } from "antd";
import { StarFilled, UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Reviews() {
  const reviews = [
    {
      name: "Anna M.",
      text: "¡Servicio excelente! Trajeron el coche rápido y sin complicaciones.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Igor K.",
      text: "Enfoque profesional, muy satisfecho con la compra.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Maria L.",
      text: "Proceso transparente y comunicación perfecta. ¡Muy recomendable!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div style={{ padding: "80px 40px", background: "#f8f8f8" }}>
      <Title level={2} style={{ fontSize: 36, textAlign: "center" }}>
        Opiniones de clientes
      </Title>

      <Carousel autoplay dots style={{ marginTop: 40 }}>
        {reviews.map((r) => (
          <div key={r.name}>
            <Row justify="center">
              <Col span={12}>
                <Card
                  style={{
                    padding: 30,
                    borderRadius: 12,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    background: "white",
                    textAlign: "center",
                  }}
                >
                  {/* Аватар */}
                  <Avatar
                    size={80}
                    src={r.avatar}
                    icon={<UserOutlined />}
                    style={{ marginBottom: 20 }}
                  />

                  {/* Имя */}
                  <Title level={4} style={{ marginBottom: 10 }}>
                    {r.name}
                  </Title>

                  {/* Рейтинг */}
                  <div style={{ marginBottom: 15 }}>
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <StarFilled
                        key={i}
                        style={{ color: "#ff1a1a", fontSize: 22, marginRight: 4 }}
                      />
                    ))}
                  </div>

                  {/* Текст */}
                  <Paragraph style={{ fontSize: 16, color: "#555" }}>
                    {r.text}
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
