import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Avatar, Badge } from 'antd';
import 'antd/dist/reset.css';
import { UserOutlined } from '@ant-design/icons';
import Toggle from './menu';
const { Meta } = Card;

const courses = [
  {
    id: 1,
    title: "Course 1",
    description: "This is the description for course 1.",
    image: "https://via.placeholder.com/300?text=Course+1",
    email: "course1@example.com",
    price: "$199",
    discount: "10% OFF"
  },
  {
    id: 2,
    title: "Course 2",
    description: "This is the description for course 2.",
    image: "https://via.placeholder.com/300?text=Course+2",
    email: "course2@example.com",
    price: "$299",
    discount: "20% OFF"
  },
  // Add more course objects here...
  {
    id: 3,
    title: "Course 3",
    description: "This is the description for course 3.",
    image: "https://via.placeholder.com/300?text=Course+3",
    email: "course3@example.com",
    price: "$399",
    discount: "15% OFF"
  },
  {
    id: 4,
    title: "Course 4",
    description: "This is the description for course 4.",
    image: "https://via.placeholder.com/300?text=Course+4",
    email: "course4@example.com",
    price: "$499",
    discount: "25% OFF"
  },
  {
    id: 5,
    title: "Course 5",
    description: "This is the description for course 5.",
    image: "https://via.placeholder.com/300?text=Course+5",
    email: "course5@example.com",
    price: "$199",
    discount: "30% OFF"
  },
  {
    id: 6,
    title: "Course 6",
    description: "This is the description for course 6.",
    image: "https://via.placeholder.com/300?text=Course+6",
    email: "course6@example.com",
    price: "$299",
    discount: "35% OFF"
  },
  {
    id: 7,
    title: "Course 7",
    description: "This is the description for course 7.",
    image: "https://via.placeholder.com/300?text=Course+7",
    email: "course7@example.com",
    price: "$399",
    discount: "40% OFF"
  },
  {
    id: 8,
    title: "Course 8",
    description: "This is the description for course 8.",
    image: "https://via.placeholder.com/300?text=Course+8",
    email: "course8@example.com",
    price: "$499",
    discount: "45% OFF"
  },
  {
    id: 9,
    title: "Course 9",
    description: "This is the description for course 9.",
    image: "https://via.placeholder.com/300?text=Course+9",
    email: "course9@example.com",
    price: "$199",
    discount: "50% OFF"
  },
  {
    id: 10,
    title: "Course 10",
    description: "This is the description for course 10.",
    image: "https://via.placeholder.com/300?text=Course+10",
    email: "course10@example.com",
    price: "$299",
    discount: "55% OFF"
  },
  {
    id: 11,
    title: "Course 11",
    description: "This is the description for course 11.",
    image: "https://via.placeholder.com/300?text=Course+11",
    email: "course11@example.com",
    price: "$399",
    discount: "60% OFF"
  },
  {
    id: 12,
    title: "Course 12",
    description: "This is the description for course 12.",
    image: "https://via.placeholder.com/300?text=Course+12",
    email: "course12@example.com",
    price: "$499",
    discount: "65% OFF"
  },
  {
    id: 13,
    title: "Course 13",
    description: "This is the description for course 13.",
    image: "https://via.placeholder.com/300?text=Course+13",
    email: "course13@example.com",
    price: "$199",
    discount: "70% OFF"
  },
  {
    id: 14,
    title: "Course 14",
    description: "This is the description for course 14.",
    image: "https://via.placeholder.com/300?text=Course+14",
    email: "course14@example.com",
    price: "$299",
    discount: "75% OFF"
  },
  {
    id: 15,
    title: "Course 15",
    description: "This is the description for course 15.",
    image: "https://via.placeholder.com/300?text=Course+15",
    email: "course15@example.com",
    price: "$399",
    discount: "80% OFF"
  }
];

function App() {
  return (
    <Container className="App" style={{backgroundColor:"lightgreen"}}>
      <Toggle />
      <p style={{ margin: "20px" }}></p>
      <header className="App-header">
        <Row>
          {courses.map(course => (
            <Col key={course.id} xs={12} sm={6} md={4}>
              <Card
                hoverable
                style={{
                  marginBottom: '20px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor: "white"
                }}
                cover={
                  <img
                    alt={course.title}
                    src={course.image}
                    style={{ objectFit: 'cover', height: '150px' }}
                  />
                }
                bodyStyle={{ padding: '15px', backgroundColor: '#f9f9f9' }}
              >
                <Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={course.title}
                  description={
                    <div>
                      <p><strong>Email:</strong> {course.email}</p>
                      <p>{course.description}</p>
                      <p style={{ color: '#28a745', fontWeight: 'bold' }}>{course.price}</p>
                      <Badge count={course.discount} style={{ backgroundColor: '#f50' }} />
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </header>
    </Container>
  );
}

export default App;
