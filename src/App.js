import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Avatar } from 'antd';
import 'antd/dist/reset.css';
import { UserOutlined } from '@ant-design/icons';
import Toggle from './menu';
const { Meta } = Card;

function App() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then(response => response.json())
      .then(data => setProfiles(data.slice(0, 6))); // Get only the first 6 profiles for this example
  }, []);

  return (
  
    <Container className="App">
        <Toggle/>
        <p style={{margin:"20px"}}></p>
      <header className="App-header" >
        <Row>
          {profiles.map(profile => (
            <Col key={profile.id} xs={12} sm={6} md={4}>
              <Card
                hoverable
                style={{
                  marginBottom: '20px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backgroundColor:"red"
                                }}
                cover={
                  <img
                    alt="example"
                    src={`https://via.placeholder.com/300?text=Profile+${profile.id}`}
                    style={{ objectFit: 'cover', height: '150px',backgroundColor:"blue" }}
                  />
                }
                bodyStyle={{ padding: '15px', backgroundColor: '#f9f9f9' }}
              >
                <Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={profile.name}
                  description={
                    <div>
                      <p><strong>Email:</strong> {profile.email}</p>
                      <p>{profile.body}</p>
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
