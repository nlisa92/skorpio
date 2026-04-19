import "./hero.css";
import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <Title className="hero-title">
          Importación de coches desde la UE a España — fácil y rentable
        </Title>

        <Paragraph className="hero-text">
          Traemos cualquier vehículo de Alemania y otros países de la UE por
          encargo o como inversión
        </Paragraph>

        <Button className="hero-btn">Calcular el coste</Button>
      </div>

      {/* ================= STYLES ================= */}
      <style>
        {`
/* ================= HERO ================= */

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 80px;
}

/* ➕ ADD mobile fix */
@media (max-width: 768px) {
  .hero-section {
    padding: 0 16px; /* ✅ FIX */
    text-align: center;
    justify-content: center;
  }
}

/* ================= CONTENT ================= */

.hero-content {
  max-width: 800px;
}

/* ================= TITLE ================= */

.hero-title {
  color: white !important;
  font-size: 48px !important;
  font-weight: 700 !important;
}

/* ➕ ADD mobile */
@media (max-width: 768px) {
  .hero-title {
    font-size: 26px !important; /* ✅ FIX */
    line-height: 1.3;
  }
}

/* ================= TEXT ================= */

.hero-text {
  color: #ddd !important;
  font-size: 20px !important;
  margin-top: 20px;
}

/* ➕ ADD mobile */
@media (max-width: 768px) {
  .hero-text {
    font-size: 15px !important; /* ✅ FIX */
    margin-top: 12px;
  }
}

/* ================= BUTTON ================= */

.hero-btn {
  background: #ff1a1a !important;
  border: none !important;
  height: 50px;
  padding: 0 40px;
  margin-top: 30px;
  font-size: 18px;
  color: #fff !important;
}

/* ➕ ADD mobile */
@media (max-width: 768px) {
  .hero-btn {
    width: 100%; /* ✅ FIX */
    height: 46px;
    font-size: 16px;
  }
}
        `}
      </style>
    </div>
  );
}
