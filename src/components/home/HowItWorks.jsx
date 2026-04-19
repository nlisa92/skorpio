import { Steps, Typography } from "antd";
import "./how.css";

const { Title } = Typography;

export default function HowItWorks() {
  return (
    <div className="how-section">

      <Title className="how-title">
        Cómo funciona
      </Title>

      <Steps
        className="how-steps"
        direction="horizontal"
        items={[
          { title: "Selección del vehículo" },
          { title: "Inspección y compra" },
          { title: "Transporte y documentación" },
          { title: "Entrega o venta" },
        ]}
      />

    </div>
  );
}