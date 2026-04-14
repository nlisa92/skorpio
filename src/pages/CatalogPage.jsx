import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Typography,
  Card,
  Select,
  InputNumber,
  Button,
  Pagination,
} from "antd";

const { Title, Paragraph } = Typography;

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [filters, setFilters] = useState({
    brand: null,
    min: null,
    max: null,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    fetch("/data/cars.json")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setFiltered(data);
      });
  }, []);

  const applyFilters = () => {
    let result = cars;

    if (filters.brand) {
      result = result.filter((c) => c.brand === filters.brand);
    }

    if (filters.min) {
      result = result.filter((c) => c.price >= filters.min);
    }

    if (filters.max) {
      result = result.filter((c) => c.price <= filters.max);
    }

    setFiltered(result);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters({ brand: null, min: null, max: null });
    setFiltered(cars);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const carsToShow = filtered.slice(startIndex, startIndex + pageSize);

  return (
    <div style={{ padding: "60px 40px", background: "#fff" }}>
      <Title style={{ fontSize: 42, marginBottom: 30 }}>
        Catálogo de vehículos
      </Title>

      <Row gutter={40}>
        {/* SIDEBAR */}
        <Col span={6}>
          <Card
            style={{
              padding: 20,
              borderRadius: 12,
              border: "1px solid #ddd",
            }}
          >
            <Title level={4} style={{ marginBottom: 20 }}>
              Filtros
            </Title>

            <div style={{ marginBottom: 20 }}>
              <label>Marca</label>
              <Select
                placeholder="Seleccionar"
                style={{ width: "100%", marginTop: 5 }}
                value={filters.brand}
                onChange={(value) => setFilters({ ...filters, brand: value })}
                allowClear
              >
                <Select.Option value="BMW">BMW</Select.Option>
                <Select.Option value="Audi">Audi</Select.Option>
                <Select.Option value="Mercedes">Mercedes</Select.Option>
              </Select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label>Precio mín.</label>
              <InputNumber
                placeholder="Desde"
                style={{ width: "100%", marginTop: 5 }}
                value={filters.min}
                onChange={(value) => setFilters({ ...filters, min: value })}
              />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label>Precio máx.</label>
              <InputNumber
                placeholder="Hasta"
                style={{ width: "100%", marginTop: 5 }}
                value={filters.max}
                onChange={(value) => setFilters({ ...filters, max: value })}
              />
            </div>

            <Button
              block
              style={{
                background: "#444",
                border: "none",
                color: "#fff",
                marginBottom: 10,
              }}
              onClick={applyFilters}
            >
              Aplicar filtros
            </Button>

            <Button block onClick={resetFilters}>
              Resetear
            </Button>
          </Card>
        </Col>

        {/* CATALOG */}
        <Col span={18}>
          <Row gutter={24}>
            {carsToShow.map((car) => (
              <Col span={8} key={car.id}>
                <Card
                  style={{
                    background: "#fafafa",
                    border: "1px solid #eee",
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                  hoverable
                  cover={
                    <div
                      style={{
                        height: 180,
                        background: "#f0f0f0",
                        borderBottom: "3px solid #ccc",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={car.image || "/cars/fallback.png"}
                        alt={car.model}
                        onError={(e) =>
                          (e.currentTarget.src = "/cars/fallback.png")
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  }
                >
                  <Title level={4}>
                    {car.brand} {car.model}
                  </Title>
                  <Paragraph style={{ color: "#666" }}>{car.year}</Paragraph>
                  <Paragraph
                    style={{
                      color: "#444",
                      fontSize: 20,
                      fontWeight: 600,
                    }}
                  >
                    {car.price.toLocaleString()} €
                  </Paragraph>

                  <Button
                    block
                    style={{
                      background: "#444",
                      border: "none",
                      marginTop: 10,
                      height: 40,
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    Reservar
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

          {/* PAGINATION */}
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filtered.length}
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
