import { Col, Row, Image } from "antd";

export const HomeGrid = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Image
            src={"/images/gallery/13_2.jpg"}
            alt={`Image }`}
            className="collage-image"
            preview={false}
          />
        </Col>
        <Col span={4} offset={1}>
          <Image
            src={"/images/gallery/13_2.jpg"}
            alt={`Image }`}
            className="collage-image"
            preview={false}
          />
        </Col>
        <Col span={5} offset={1}>
          <Image
            src={"/images/gallery/IMG_1600frame.jpg"}
            alt={`Image }`}
            className="collage-image"
            preview={false}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={4} offset={6}>
          <Image
            src={"/images/gallery/13_2.jpg"}
            alt={`Image }`}
            className="collage-image"
            preview={false}
          />
        </Col>
        <Col span={4} offset={6}>
          <Image
            src={"/images/gallery/3895.jpg"}
            alt={`Image }`}
            className="collage-image"
            preview={false}
          />
        </Col>
      </Row>
    </>
  );
};
