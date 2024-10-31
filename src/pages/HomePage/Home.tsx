import Image from "next/image"
import { StarFilled, ThunderboltFilled } from "@ant-design/icons"
import { Typography, Space, Card, Row, Col, Avatar } from "antd"
import styles from './Home.module.css'

const { Title, Paragraph } = Typography

export default function Component() {
    <div className="home-container">
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #f0f2f5, #ffffff)" }}>
      <div className="hero-section">
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Mountain landscape with solar panels"
          fill
          style={{ objectFit: "cover" }}
          priority
        <div className="overlay" />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.2)" }} />
        
        <div className="text-overlay">
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Title style={{ fontSize: "12rem", fontWeight: "bold", color: "rgba(255, 255, 255, 0.8)", userSelect: "none" }}>
            SOLAR
          </Title>
        </div>

        <div className="content-container">
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "32px 16px" }}>
          <Space direction="vertical" size="large" style={{ maxWidth: 600 }}>
            <Title level={1} style={{ color: "white", fontSize: "3rem", lineHeight: 1.2 }}>
              Harness the Power<br />of the Sun
            </Title>
            <Paragraph style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.125rem" }}>
              Eco-friendly, Cost-effective and Reliable Solar Solutions for your Home
              and Business. Discover our Premium Solar Products.
            <a href="#" className="explore-button">
            }}>
              <ThunderboltFilled style={{ marginRight: 8 }} />
              Explore Products
            </a>
          </Space>

          {/* Stats */}
          <Row gutter={16} style={{ marginTop: 80, maxWidth: 600 }}>
            <Col span={12}>
              <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: 16 }}>
                <Title level={2} style={{ marginBottom: 0 }}>30%</Title>
                <Paragraph>Reduced Carbon Footprint</Paragraph>
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: 16 }}>
                <Title level={2} style={{ marginBottom: 0 }}>20%</Title>
                <Paragraph>Reduced Energy Bills</Paragraph>
              </Card>
            </Col>
          </Row>

          {/* Testimonials */}
          <Card style={{ marginTop: 32, backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: 16, display: "inline-flex", alignItems: "center" }}>
            <Space>
              <Avatar.Group>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Avatar key={i} src={`/placeholder.svg?height=40&width=40`} />
                ))}
              </Avatar.Group>
              <Space>
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarFilled key={i} style={{ color: "#fadb14" }} />
                ))}
              </Space>
              <Paragraph style={{ margin: 0, fontWeight: "medium" }}>10K+ Worldwide Users</Paragraph>
            </Space>
          </Card>
        </div>
      </div>
    </div>
  )
}