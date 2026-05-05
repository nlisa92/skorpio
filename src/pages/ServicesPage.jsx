import { Typography, Row, Col, Card } from "antd";
import {
  CarOutlined,
  ShoppingOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function ServicesPage() {
  const services = [
    {
      icon: <CarOutlined />,
      title: "Importación y venta",
      text: "Importación de coches desde la UE y venta en España. Listos para matricular.",
    },
    {
      icon: <ShoppingOutlined />,
      title: "Importación por encargo",
      text: "Buscamos el coche ideal, lo revisamos y lo entregamos matriculado.",
    },
    {
      icon: <DollarOutlined />,
      title: "CLUB DE INVERSORES",
      text: "Invierte en nuestra compañía dentro de un entorno privado de inversión estructurado.",
    },
  ];

  return (
    <div className="services-page">
      {/* HERO */}
      <Title className="services-title">Nuestros servicios</Title>

      <Paragraph className="services-subtitle">
        Importación de vehículos desde la UE, búsqueda personalizada e
        inversión.
      </Paragraph>

      {/* CARDS */}
      <Row gutter={[24, 24]} className="services-grid">
        {services.map((s) => (
          <Col xs={24} md={8} key={s.title}>
            <Card className="service-card">
              <div className="icon">{s.icon}</div>

              <Title level={3} className="service-card-title">
                {s.title}
              </Title>

              <Paragraph className="service-text">{s.text}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {/* INVEST SECTION */}
      <section className="investment">
        <Title level={3}>Inversiones en automóviles</Title>

        <Paragraph>
          Invierte en el coche de tus sueños. Lo importamos, lo usas y luego se
          vende.
        </Paragraph>

        <Paragraph>
          Recuperas capital + 50% beneficio si existe plusvalía.
        </Paragraph>

        <Paragraph>
          <strong>Ventaja fiscal:</strong> inversión deducible al 100%.
        </Paragraph>

        <Card className="info-card">
          Casos reales y contratos — en desarrollo.
        </Card>
      </section>

      {/* ================= STYLE ================= */}
      <style>
        {`
.services-page {
  padding: 60px 40px;
}

/* MOBILE padding fix */
@media (max-width: 768px) {
  .services-page {
    padding: 30px 16px;
  }
}

/* ================= TITLE ================= */

.services-title {
  font-size: 42px !important;
  margin-bottom: 10px;
}

.services-subtitle {
  font-size: 18px;
  max-width: 700px;
  color: #555;
}

/* MOBILE typography fix */
@media (max-width: 768px) {
  .services-title {
    font-size: 26px !important;
  }

  .services-subtitle {
    font-size: 15px;
  }
}

/* ================= CARD ================= */

.service-card {
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  height: 100%;
}

/* ICON */
.icon {
  font-size: 40px;
  color: #ff1a1a;
  margin-bottom: 10px;
}

/* TITLE */
.service-card-title {
  margin-top: 10px !important;
}

/* TEXT */
.service-text {
  color: #555;
}

/* ================= INVEST ================= */

.investment {
  margin-top: 80px;
}

.info-card {
  margin-top: 20px;
}

/* MOBILE spacing */
@media (max-width: 768px) {
  .investment {
    margin-top: 40px;
  }
}
        `}
      </style>
    </div>
  );
}
