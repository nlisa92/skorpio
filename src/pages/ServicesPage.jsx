import { Typography, Row, Col, Card } from "antd";
import {
  CarOutlined,
  ShoppingOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function ServicesPage() {
  return (
    <div style={{ padding: "60px 40px" }}>
      {/* SEO */}
      <Title style={{ fontSize: 42, marginBottom: 10 }}>
        Nuestros servicios
      </Title>
      <Paragraph style={{ maxWidth: 700, fontSize: 18, color: "#555" }}>
        Importación de vehículos desde la Unión Europea, búsqueda personalizada
        y oportunidades de inversión con ventajas fiscales.
      </Paragraph>

      {/* 3 карточки услуг */}
      <Row gutter={32} style={{ marginTop: 40 }}>
        <Col span={8}>
          <Card
            style={{
              padding: 20,
              borderRadius: 12,
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <CarOutlined style={{ fontSize: 40, color: "#ff1a1a" }} />
            <Title level={3} style={{ marginTop: 20 }}>
              Importación y venta
            </Title>
            <Paragraph>
              Importación general de coches procedentes de la Unión Europea y
              venta en España. Vehículos listos para matricular y usar.
            </Paragraph>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            style={{
              padding: 20,
              borderRadius: 12,
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <ShoppingOutlined style={{ fontSize: 40, color: "#ff1a1a" }} />
            <Title level={3} style={{ marginTop: 20 }}>
              Importación por encargo
            </Title>
            <Paragraph>
              Dinos qué marca y modelo deseas. Lo importamos, lo revisamos y te
              lo entregamos matriculado a tu nombre en España.
            </Paragraph>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            style={{
              padding: 20,
              borderRadius: 12,
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <DollarOutlined style={{ fontSize: 40, color: "#ff1a1a" }} />
            <Title level={3} style={{ marginTop: 20 }}>
              Inversiones en automóviles
            </Title>
            <Paragraph>
              Conduce el coche de tus sueños durante 6 meses y participa al 50%
              en la plusvalía. Inversión deducible al 100%.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Inversiones */}
      <section style={{ marginTop: 80 }}>
        <Title level={3}>Inversiones en automóviles</Title>

        <Paragraph>
          Invierte en el coche de tus sueños. Lo importamos, lo conduces hasta 6
          meses y luego lo vendemos. Recuperas tu capital más el 50% de la
          ganancia si hay plusvalía.
        </Paragraph>

        <Paragraph>
          Si no hay ganancia, solo se pagan honorarios. No necesitas transferir
          el coche a tu nombre.
        </Paragraph>

        <Paragraph>
          <strong>Ventaja fiscal:</strong> se considera inversión en capital
          mobiliario, deducible al 100%. Minimiza depreciación y maximiza
          rentabilidad.
        </Paragraph>

        <Card style={{ marginTop: 20 }}>
          <Paragraph>
            Casos reales, contratos y detalles del esquema — en desarrollo.
          </Paragraph>
        </Card>
      </section>
    </div>
  );
}
