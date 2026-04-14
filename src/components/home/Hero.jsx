import "./hero.css";
import { Button, Typography } from "antd";


const { Title, Paragraph } = Typography;

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <Title style={{ color: "white", fontSize: 48, fontWeight: 700 }}>
          Importación de coches desde la UE a España — fácil y rentable
        </Title>

        <Paragraph style={{ color: "#ddd", fontSize: 20, marginTop: 20 }}>
          Traemos cualquier vehículo de Alemania y otros países de la UE por encargo o como inversión
        </Paragraph>

        <Button
          size="large"
          style={{
            background: "#ff1a1a",
            border: "none",
            height: 50,
            padding: "0 40px",
            marginTop: 30,
            fontSize: 18,
          }}
        >
          Calcular el coste
        </Button>
      </div>
    </div>
  );
}
