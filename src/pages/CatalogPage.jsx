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
  Modal,
  Form,
  Input,
  message,
} from "antd";

import { supabase } from "../lib/supabaseClient";

const { Title, Paragraph } = Typography;

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    brand: null,
    min: null,
    max: null,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const [submitting, setSubmitting] = useState(false);

  const [form] = Form.useForm();

  const pageSize = 6;

  useEffect(() => {
    async function loadCars() {
      setLoading(true);

      const { data, error } = await supabase
        .from("cars")
        .select("*");

      if (error) {
        console.error(error);
        message.error("Error loading cars");
        setLoading(false);
        return;
      }

      setCars(data || []);
      setFiltered(data || []);
      setLoading(false);
    }

    loadCars();
  }, []);

  const applyFilters = () => {
    let result = [...cars];

    if (filters.brand) {
      result = result.filter(
        (c) => c.brand === filters.brand
      );
    }

    if (filters.min) {
      result = result.filter(
        (c) => c.price >= filters.min
      );
    }

    if (filters.max) {
      result = result.filter(
        (c) => c.price <= filters.max
      );
    }

    setFiltered(result);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters({
      brand: null,
      min: null,
      max: null,
    });

    setFiltered(cars);
    setCurrentPage(1);
  };

  const handleReserve = async (values) => {
    if (!selectedCar) return;

    setSubmitting(true);

    const { error } = await supabase
      .from("reservations")
      .insert([
        {
          car_id: selectedCar.id,
          car_name: `${selectedCar.brand} ${selectedCar.model}`,
          name: values.name,
          phone: values.phone,
          email: values.email,
          message: values.message,
        },
      ]);

    setSubmitting(false);

    if (error) {
      console.error(error);
      message.error("Error sending reservation");
      return;
    }

    message.success("Reservation sent!");

    setOpen(false);
    form.resetFields();
  };

  const startIndex =
    (currentPage - 1) * pageSize;

  const carsToShow = filtered.slice(
    startIndex,
    startIndex + pageSize
  );

  const fallbackImage = `${import.meta.env.BASE_URL}cars/fallback.png`;

  const FilterContent = (
    <Card loading={loading} className="filter-card">
      <Title level={4}>Filtros</Title>

      <div className="filter-item">
        <label>Marca</label>

        <Select
          placeholder="Seleccionar"
          value={filters.brand}
          onChange={(v) =>
            setFilters({
              ...filters,
              brand: v,
            })
          }
          allowClear
          className="filter-control"
        >
          <Select.Option value="BMW">
            BMW
          </Select.Option>

          <Select.Option value="Audi">
            Audi
          </Select.Option>

          <Select.Option value="Mercedes">
            Mercedes
          </Select.Option>
        </Select>
      </div>

      <div className="filter-item">
        <label>Precio mín.</label>

        <InputNumber
          value={filters.min}
          onChange={(v) =>
            setFilters({
              ...filters,
              min: v,
            })
          }
          className="filter-control"
        />
      </div>

      <div className="filter-item">
        <label>Precio máx.</label>

        <InputNumber
          value={filters.max}
          onChange={(v) =>
            setFilters({
              ...filters,
              max: v,
            })
          }
          className="filter-control"
        />
      </div>

      <Button
        block
        onClick={applyFilters}
        className="btn-primary"
      >
        Aplicar filtros
      </Button>

      <Button
        block
        onClick={resetFilters}
      >
        Resetear
      </Button>
    </Card>
  );

  return (
    <div className="catalog-page">
      {/* HEADER */}
      <div className="catalog-header">
        <Title className="catalog-title">
          Catálogo de vehículos
        </Title>

        {/* MOBILE FILTER BUTTON */}
        <Button
          className="mobile-filter-btn"
          onClick={() =>
            setFilterOpen(true)
          }
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
            {loading
              ? Array.from({ length: 6 }).map(
                  (_, i) => (
                    <Col
                      xs={24}
                      sm={12}
                      lg={8}
                      key={i}
                    >
                      <Card
                        loading
                        className="car-card"
                      />
                    </Col>
                  )
                )
              : carsToShow.map((car) => (
                  <Col
                    xs={24}
                    sm={12}
                    lg={8}
                    key={car.id}
                  >
                    <Card
                      className="car-card"
                      hoverable
                      cover={
                        <div className="car-image">
                          <img
                            src={
                              car.image ||
                              fallbackImage
                            }
                            alt={car.model}
                            onError={(e) => {
                              e.target.src =
                                fallbackImage;
                            }}
                          />
                        </div>
                      }
                    >
                      <Title level={4}>
                        {car.brand} {car.model}
                      </Title>

                      <Paragraph>
                        {car.year}
                      </Paragraph>

                      <Paragraph className="price">
                        {car.price?.toLocaleString()} €
                      </Paragraph>

                      <Button
                        block
                        className="btn-primary"
                        onClick={() => {
                          setSelectedCar(car);
                          setOpen(true);
                        }}
                      >
                        Reservar
                      </Button>
                    </Card>
                  </Col>
                ))}
          </Row>

          {!loading && (
            <div className="pagination">
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={filtered.length}
                onChange={(p) =>
                  setCurrentPage(p)
                }
              />
            </div>
          )}
        </Col>
      </Row>

      {/* MOBILE FILTER DRAWER */}
      <Drawer
        open={filterOpen}
        onClose={() =>
          setFilterOpen(false)
        }
        placement="left"
      >
        {FilterContent}
      </Drawer>

      {/* RESERVATION MODAL */}
      <Modal
        open={open}
        onCancel={() =>
          setOpen(false)
        }
        footer={null}
        title="Reservar vehículo"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleReserve}
        >
          <Form.Item
            name="name"
            label="Nombre"
            rules={[
              {
                required: true,
                message:
                  "Ingrese su nombre",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Teléfono"
            rules={[
              {
                required: true,
                message:
                  "Ingrese su teléfono",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="message"
            label="Mensaje"
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Button
            htmlType="submit"
            block
            className="btn-primary"
            loading={submitting}
          >
            Enviar reserva
          </Button>
        </Form>
      </Modal>

      {/* STYLES */}
      <style>
        {`
.catalog-page {
  padding: 60px 40px;
}

/* MOBILE */
@media (max-width: 768px) {
  .catalog-page {
    padding: 20px 12px;
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

/* FILTER ITEM */
.filter-item {
  margin-bottom: 16px;
}

.filter-control {
  width: 100%;
  margin-top: 5px;
}

/* CAR CARD */
.car-card {
  background: #fafafa;
  border-radius: 12px;
}

/* CAR IMAGE */
.car-image {
  height: 180px;
  overflow: hidden;
}

.car-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* PRICE */
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

