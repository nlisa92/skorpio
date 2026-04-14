import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;

export default function AboutPage() {
  return (
    <div style={{ padding: "60px 40px" }}>
      {/* HERO */}
      <Title style={{ fontSize: 42, marginBottom: 10 }}>
        Skorpio Importwagen
      </Title>
      <Paragraph style={{ fontSize: 18, maxWidth: 800, color: "#555" }}>
        Importación premium de vehículos desde Europa a España. Trabajamos
        principalmente con el mercado alemán ofreciendo un servicio completo,
        transparente y seguro en cada etapa del proceso.
      </Paragraph>

      {/* TRUST BLOCK */}
      <Row gutter={24} style={{ marginTop: 50 }}>
        <Col xs={24} md={8}>
          <Card
            bordered={false}
            style={{
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <Title level={4} style={{ color: "#ff1a1a" }}>
              Empresa registrada
            </Title>
            <Paragraph>
              SKORPIO SAMICA SL es una empresa legalmente constituida en España,
              inscrita en el Registro Mercantil de Málaga.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            bordered={false}
            style={{
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <Title level={4} style={{ color: "#ff1a1a" }}>
              Transparencia total
            </Title>
            <Paragraph>
              Proporcionamos toda la documentación oficial de cada vehículo y
              acompañamos al cliente durante todo el proceso.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            bordered={false}
            style={{
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <Title level={4} style={{ color: "#ff1a1a" }}>
              Experiencia europea
            </Title>
            <Paragraph>
              Especialistas en importación desde Alemania y otros países de la
              UE con enfoque en calidad y ahorro.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* NUESTRA HISTORIA */}
      <Row gutter={40} style={{ marginTop: 80, alignItems: "center" }}>
        <Col xs={24} md={6}>
          <img
            src="/about/history.jpg"
            alt="Nuestra historia"
            style={{
              width: "100%",
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              objectFit: "cover",
            }}
          />
        </Col>

        <Col xs={24} md={18}>
          <Title level={3}>Nuestra historia</Title>
          <Paragraph style={{ fontSize: 16, color: "#555" }}>
            Skorpio Importwagen nació con la misión de acercar al mercado
            español vehículos premium procedentes de Europa, especialmente
            Alemania, donde la calidad y el mantenimiento suelen ser
            superiores.
          </Paragraph>
          <Paragraph style={{ fontSize: 16, color: "#555" }}>
            Desde 2020 hemos construido una red de proveedores fiables,
            concesionarios oficiales y expertos en inspección técnica para
            garantizar que cada coche cumpla los estándares más altos.
          </Paragraph>
          <Paragraph style={{ fontSize: 16, color: "#555" }}>
            Nuestro crecimiento ha sido orgánico, basado en la confianza,
            recomendaciones y un servicio personalizado que prioriza la
            transparencia y la seguridad jurídica.
          </Paragraph>
        </Col>
      </Row>

      {/* ABOUT SECTION */}
      <Row gutter={40} style={{ marginTop: 80 }}>
        <Col xs={24} md={12}>
          <Title level={3}>Sobre la empresa</Title>
          <Paragraph>
            Skorpio Importwagen opera bajo la razón social{" "}
            <b>SKORPIO SAMICA SL</b>, con NIF <b>B01712199</b>. La empresa fue
            constituida en Málaga en 2020 y desde entonces se especializa en la
            importación de vehículos de alta calidad desde la Unión Europea.
          </Paragraph>
          <Paragraph>
            Nuestro objetivo es ofrecer a nuestros clientes acceso a vehículos
            premium con total seguridad jurídica y transparencia en cada paso.
          </Paragraph>
        </Col>

        <Col xs={24} md={12}>
          <Card
            style={{
              borderRadius: 16,
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <Title level={4} style={{ color: "#ff1a1a" }}>
              Datos legales
            </Title>
            <Paragraph>
              <b>Razón social:</b> SKORPIO SAMICA SL <br />
              <b>NIF:</b> B01712199 <br />
              <b>Domicilio:</b> C/ Cuarteles 39, 29002 Málaga, España <br />
              <b>Registro:</b> Registro Mercantil de Málaga <br />
              <b>Año de constitución:</b> 2020
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* WHY TRUST US */}
      <div style={{ marginTop: 80 }}>
        <Title level={2}>¿Por qué confiar en nosotros?</Title>

        <Row gutter={24} style={{ marginTop: 30 }}>
          {[
            ["✔ Garantía legal", "Empresa registrada con NIF válido en España."],
            [
              "✔ Vehículos verificados",
              "Selección rigurosa de coches con historial comprobado.",
            ],
            [
              "✔ Acompañamiento completo",
              "Desde la búsqueda hasta la matriculación en España.",
            ],
            ["✔ Ahorro inteligente", "Mejores precios en el mercado europeo."],
          ].map(([title, text], i) => (
            <Col xs={24} md={6} key={i}>
              <Card
                bordered={false}
                style={{
                  borderRadius: 16,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                }}
              >
                <Title level={5} style={{ color: "#ff1a1a" }}>
                  {title}
                </Title>
                <Paragraph>{text}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* STATS */}
      <Card
        style={{
          marginTop: 80,
          borderRadius: 16,
          boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        }}
      >
        <Title level={4} style={{ color: "#ff1a1a" }}>
          Resultados
        </Title>
        <Paragraph>
          Más de 100 coches importados, más de 50 clientes satisfechos, operando
          desde 2020.
        </Paragraph>
      </Card>
    </div>
  );
}
