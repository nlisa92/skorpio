import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function AboutBlock() {
  return (
    <div style={{ padding: "80px 40px", background: "#fff" }}>
      <Title level={2} style={{ fontSize: 36 }}>Sobre nosotros</Title>

      <Paragraph style={{ maxWidth: 700, fontSize: 18, color: "#555" }}>
        Skorpio Importwagen está especializada en la importación de vehículos desde los países de la UE a España,
        principalmente desde Alemania.
      </Paragraph>

      <Row gutter={40} style={{ marginTop: 40 }}>
        {[
          "Sin aranceles aduaneros",
          "Transparencia jurídica",
          "Inspección previa a la compra",
          "Servicio integral",
        ].map((item) => (
          <Col span={6} key={item}>
            <div style={{ fontSize: 18, fontWeight: 600 }}>{item}</div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
