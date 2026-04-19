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
  Drawer,
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
  const [filterOpen, setFilterOpen] = useState(false);

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

    if (filters.brand) result = result.filter((c) => c.brand === filters.brand);
    if (filters.min) result = result.filter((c) => c.price >= filters.min);
    if (filters.max) result = result.filter((c) => c.price <= filters.max);

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

  const FilterContent = (
    <Card className="filter-card">
      <Title level={4}>Filtros</Title>

      <div className="filter-item">
        <label>Marca</label>
        <Select
          placeholder="Seleccionar"
          value={filters.brand}
          onChange={(v) => setFilters({ ...filters, brand: v })}
          allowClear
          className="filter-control"
        >
          <Select.Option value="BMW">BMW</Select.Option>
          <Select.Option value="Audi">Audi</Select.Option>
          <Select.Option value="Mercedes">Mercedes</Select.Option>
        </Select>
      </div>

      <div className="filter-item">
        <label>Precio mín.</label>
        <InputNumber
          value={filters.min}
          onChange={(v) => setFilters({ ...filters, min: v })}
          className="filter-control"
        />
      </div>

      <div className="filter-item">
        <label>Precio máx.</label>
        <InputNumber
          value={filters.max}
          onChange={(v) => setFilters({ ...filters, max: v })}
          className="filter-control"
        />
      </div>

      <Button block onClick={applyFilters} className="btn-primary">
        Aplicar filtros
      </Button>

      <Button block onClick={resetFilters}>
        Resetear
      </Button>
    </Card>
  );

  return (
    <div className="catalog-page">
      {/* HEADER */}
      <div className="catalog-header">
        <Title className="catalog-title">Catálogo de vehículos</Title>

        {/* MOBILE FILTER BUTTON */}
        <Button
          className="mobile-filter-btn"
          onClick={() => setFilterOpen(true)}
        >
          Filtros
        </Button>
      </div>

      <Row gutter={[24, 24]}>
        {/* DESKTOP FILTERS */}
        <Col xs={0} md={6}>
          {FilterContent}
        </Col>

        {/* CARS */}
        <Col xs={24} md={18}>
          <Row gutter={[16, 16]}>
            {carsToShow.map((car) => (
              <Col xs={24} sm={12} lg={8} key={car.id}>
                <Card
                  className="car-card"
                  hoverable
                  cover={
                    <div className="car-image">
                      <img
                        src={car.image || "/cars/fallback.png"}
                        alt={car.model}
                      />
                    </div>
                  }
                >
                  <Title level={4}>
                    {car.brand} {car.model}
                  </Title>

                  <Paragraph>{car.year}</Paragraph>

                  <Paragraph className="price">
                    {car.price.toLocaleString()} €
                  </Paragraph>

                  <Button block className="btn-primary">
                    Reservar
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="pagination">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filtered.length}
              onChange={(p) => setCurrentPage(p)}
            />
          </div>
        </Col>
      </Row>

      {/* MOBILE FILTER DRAWER */}
      <Drawer
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        placement="left"
      >
        {FilterContent}
      </Drawer>

      {/* ================= STYLES ================= */}
      <style>
        {`
.catalog-page {
  padding: 60px 40px;
}

/* MOBILE */
@media (max-width: 768px) {
  .catalog-page {
    padding: 20px 12px; /* FIX */
  }
}

/* HEADER */
.catalog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.catalog-title {
  font-size: 42px !important;
}

/* MOBILE */
@media (max-width: 768px) {
  .catalog-title {
    font-size: 24px !important;
  }
}

/* FILTER */
.filter-card {
  padding: 20px;
  border-radius: 12px;
}

.filter-item {
  margin-bottom: 16px;
}

.filter-control {
  width: 100%;
  margin-top: 5px;
}

/* CAR */
.car-card {
  background: #fafafa;
  border-radius: 12px;
}

.car-image {
  height: 180px;
  overflow: hidden;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.price {
  font-size: 20px;
  font-weight: 600;
}

/* BUTTON */
.btn-primary {
  background: #444 !important;
  color: #fff !important;
  border: none !important;
}

/* PAGINATION */
.pagination {
  margin-top: 40px;
  text-align: center;
}

/* MOBILE FILTER BUTTON */
.mobile-filter-btn {
  display: none;
}

@media (max-width: 768px) {
  .mobile-filter-btn {
    display: block;
  }
}
        `}
      </style>
    </div>
  );
}
