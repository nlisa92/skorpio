import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function TrustBlock() {
  const brands = [
    { name: "Volkswagen" },
    { name: "BMW" },
    { name: "TÜV" },
    { name: "Allianz" },
  ];

  return (
    <div style={{ padding: "80px 40px", background: "#fff" }}>
      <Title
        level={2}
        style={{
          fontSize: 36,
          textAlign: "center",
          fontWeight: 600,   
          letterSpacing: 0,  
        }}
      >
        Confían en nosotros
      </Title>

      <Paragraph
        style={{
          textAlign: "center",
          color: "#666",
          marginTop: 10,
          fontSize: 16,
        }}
      >
        Colaboramos con marcas y organizaciones reconocidas en toda Europa.
      </Paragraph>

      <Row gutter={[40, 40]} style={{ marginTop: 50 }} justify="center">
        {brands.map((brand) => (
          <Col xs={12} sm={8} md={6} key={brand.name}>
            <div className="brand-card">
              <div className="car-line" />
              <div className="brand-name">{brand.name}</div>
            </div>
          </Col>
        ))}
      </Row>

      <style>{`
        .brand-card {
          height: 150px;
          border: 1px solid #ddd;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          background: #fff;
          cursor: pointer;
        }

        .brand-card:hover {
          border-color: #000;
          transform: translateY(-4px);
        }

        .car-line {
          width: 80px;
          height: 40px;
          position: relative;
        }

        .car-line::before,
        .car-line::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: #000;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .car-line::before {
          top: 10px;
          width: 80%;
          margin: 0 auto;
          transform: skewX(-20deg);
        }

        .car-line::after {
          bottom: 10px;
          width: 100%;
        }

        .brand-card:hover .car-line::before,
        .brand-card:hover .car-line::after {
          background: #ff1a1a;
        }

        .brand-name {
          margin-top: 15px;
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }
      `}</style>
    </div>
  );
}
