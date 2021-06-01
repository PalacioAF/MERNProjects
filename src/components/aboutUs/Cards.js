import { Card,Button } from 'antd';
import { GithubOutlined,LinkedinOutlined} from '@ant-design/icons';

const { Meta } = Card;

const Cards = ({ contact })=>{
  return (
      <Card
        hoverable
        style={{ width: 240  }}
        cover={<img   height="200px" src={contact.img} alt={contact.name} />}
        actions={[
          <Button type="text" href={contact.git} target="_blank" icon={<GithubOutlined />} />,
          <Button type="text" href={contact.linkedin} target="_blank" icon={<LinkedinOutlined />} />
        ]}
      >
    <Meta title={contact.name}  />
    </Card>  
  )
}
  
export default Cards
