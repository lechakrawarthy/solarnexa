import React from 'react';
import { Card, Button, Statistic, Avatar, Typography } from 'antd';
import { ArrowRightOutlined, StarFilled } from '@ant-design/icons';

const { Title, Text } = Typography;

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="https://solarbotanictrees.com/wp-content/uploads/2024/09/Car-Charge.jpg"
          alt="Green landscape with solar energy installations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 p-4">
          <Title className="text-[3rem] md:text-[6rem] font-extrabold text-[#c8ff00]">
            Green Energy <span className="text-white">Solutions</span>
          </Title>
          <Title level={2} className="text-2xl md:text-4xl font-light text-white">
            for a Sustainable Future
          </Title>
          <Text className="text-lg md:text-xl text-white/90 max-w-xl mx-auto">
            We offer high-quality solar energy systems that go beyond being just an investment in your property.
          </Text>
          <Button
            type="primary"
            className="bg-[#c8ff00] border-none hover:bg-[#b3e600] px-8 py-4 text-lg font-bold rounded-full"
            icon={<ArrowRightOutlined />}
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { value: 1200, title: "Hectare total area" },
            { value: 84, title: "Years of Industry Experience" },
          ].map((stat, index) => (
            <Card key={index} bordered={false} className="shadow-lg">
              <Statistic title={stat.title} value={stat.value} className="text-center" />
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <Card className="text-center shadow-lg p-8">
          <div className="flex justify-center -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <Avatar
                key={i}
                src={`/avatar-${i}.jpg`}
                size="large"
                style={{ border: "2px solid white" }}
              />
            ))}
          </div>
          <div className="flex justify-center space-x-1 mt-4">
            {Array.from({ length: 5 }, (_, i) => (
              <StarFilled key={i} style={{ color: i < 4 ? "#faad14" : "#e4e4e4" }} />
            ))}
          </div>
          <Text className="font-medium text-lg mt-2">10K+ Worldwide Users</Text>
        </Card>

        {/* Recent Project Preview Section */}
        <Card className="shadow-lg max-w-md mx-auto p-6 text-center">
          <img
            src="https://treeplantation.com/images/pine-tree-solar.jpeg"
            alt="Recent wind turbine project"
            className="w-full h-auto rounded-lg mb-6"
          />
          <a href="#" className="inline-flex items-center text-blue-600 font-bold hover:underline">
            Discover our recent project <ArrowRightOutlined className="ml-1" />
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Home;
