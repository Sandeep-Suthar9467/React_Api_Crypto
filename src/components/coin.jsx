import React from 'react';
import './coin.css';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
const { Panel } = Collapse;
const { Text } = Typography;

const Coin = ({ rank,name, image, symbol, price, volume, marktcap }) => (
  <Col span={24}>
  <Collapse>
    <Panel
      key={rank}
      showArrow={false}
      header={(
        <Row key={rank}>
          <Col span={4}>
            <Text><strong>{rank}.</strong></Text>
            <Avatar className="exchange-image" src={image} />
           
          </Col>
          <Col span={4}> <Text><strong>{name}</strong></Text></Col>
          <Col span={4}>{symbol}</Col>
          <Col span={4}>{price}</Col>
          {  volume <0 ?
       ( <Col className='red' span={4}>{volume}</Col>):
       (<Col  className='green' span={4}>{volume}</Col>)
       }
          <Col span={4}>{marktcap}</Col>
        
        </Row>
        )}
    >
    </Panel>
    </Collapse>
</Col>
    );

export default Coin;
