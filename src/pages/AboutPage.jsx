import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* HERO */}
      <Title className="about-title">Skorpio Importwagen</Title>

      <Paragraph className="about-subtitle">
        Importación premium de vehículos desde Europa a España. Trabajamos
        principalmente con el mercado alemán ofreciendo un servicio completo,
        transparente y seguro en cada etapa del proceso.
      </Paragraph>

      {/* TRUST BLOCK */}
      <Row gutter={[20, 20]} className="about-grid">
        {[
          {
            title: "Empresa registrada",
            text: "SKORPIO SAMICA SL es una empresa legalmente constituida en España, inscrita en el Registro Mercantil de Málaga.",
          },
          {
            title: "Transparencia total",
            text: "Proporcionamos toda la documentación oficial de cada vehículo y acompañamos al cliente durante todo el proceso.",
          },
          {
            title: "Experiencia europea",
            text: "Especialistas en importación desde Alemania y otros países de la UE con enfoque en calidad y ahorro.",
          },
        ].map((item) => (
          <Col xs={24} md={8} key={item.title}>
            <Card className="about-card">
              <Title level={4} className="about-card-title">
                {item.title}
              </Title>
              <Paragraph>{item.text}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {/* HISTORY */}
      <Row gutter={[24, 24]} className="history-block">
        <Col xs={24} md={10}>
          <img
            src="/about/history.jpg"
            alt="Nuestra historia"
            className="about-img"
          />
        </Col>

        <Col xs={24} md={14}>
          <Title level={3}>Nuestra historia</Title>

          <Paragraph>
            Skorpio Importwagen nació con la misión de acercar al mercado
            español vehículos premium procedentes de Europa.
          </Paragraph>

          <Paragraph>
            Desde 2020 hemos construido una red de proveedores fiables y
            expertos en inspección técnica.
          </Paragraph>

          <Paragraph>
            Nuestro crecimiento ha sido orgánico basado en confianza y
            transparencia.
          </Paragraph>
        </Col>
      </Row>

      {/* LEGAL */}
      <Row gutter={[24, 24]} className="legal-block">
        <Col xs={24} md={12}>
          <Title level={3}>Sobre la empresa</Title>

          <Paragraph>
            Operamos bajo <b>SKORPIO SAMICA SL</b>, NIF <b>B01712199</b>.
          </Paragraph>

          <Paragraph>
            Especialistas en importación de vehículos premium desde la UE.
          </Paragraph>
        </Col>

        <Col xs={24} md={12}>
          <Card className="about-card">
            <Title level={4}>Datos legales</Title>
            <Paragraph>
              SKORPIO SAMICA SL <br />
              B01712199 <br />
              Málaga, España <br />
              2020
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* WHY TRUST */}
      <Row gutter={[20, 20]} className="trust-grid">
        {[
          ["Garantía legal", "Empresa registrada con NIF válido en España."],
          [
            "Vehículos verificados",
            "Selección rigurosa de coches con historial comprobado.",
          ],
          [
            "Acompañamiento completo",
            "Desde la búsqueda hasta la matriculación.",
          ],
          ["Ahorro inteligente", "Mejores precios en el mercado europeo."],
        ].map(([title, text]) => (
          <Col xs={24} sm={12} md={6} key={title}>
            <Card className="about-card">
              <Title level={5} className="about-card-title">
                {title}
              </Title>
              <Paragraph>{text}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {/* STATS */}
      <Card className="stats-card">
        <Title level={4}>Resultados</Title>
        <Paragraph>
          Más de 100 coches importados, más de 50 clientes satisfechos, operando
          desde 2020.
        </Paragraph>
      </Card>

      {/* ================= STYLES ================= */}
      <style>
        {`
.about-page {
  padding: 60px 40px;
}

/* ================= MOBILE ================= */
@media (max-width: 768px) {
  .about-page {
    padding: 30px 16px; /* ✅ FIX */
  }
}

/* ================= HERO ================= */

.about-title {
  font-size: 42px !important;
  margin-bottom: 10px;
}

.about-subtitle {
  font-size: 18px;
  max-width: 800px;
  color: #555;
}

/* MOBILE */
@media (max-width: 768px) {
  .about-title {
    font-size: 26px !important;
  }

  .about-subtitle {
    font-size: 15px;
  }
}

/* ================= CARDS ================= */

.about-card {
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  height: 100%;
}

.about-card-title {
  color: #ff1a1a !important;
}

/* ================= IMAGE ================= */

.about-img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  object-fit: cover;
}

/* ================= SECTIONS ================= */

.history-block,
.legal-block,
.trust-grid {
  margin-top: 80px;
}

/* MOBILE spacing fix */
@media (max-width: 768px) {
  .history-block,
  .legal-block,
  .trust-grid {
    margin-top: 40px;
  }
}

/* ================= STATS ================= */

.stats-card {
  margin-top: 80px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}

/* MOBILE */
@media (max-width: 768px) {
  .stats-card {
    margin-top: 40px;
  }
}
        `}
      </style>
    </div>
  );
}
