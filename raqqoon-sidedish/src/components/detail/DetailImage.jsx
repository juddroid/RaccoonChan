import styled from 'styled-components';
import ImageData from 'components/detail/ImageData';
import { LOCATION_TOP, LOCATION_THUMB } from 'const';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

const DetailImage = ({ top_image, thumb_images }) => {
  const [activeTopImage, setActiveTopImage] = useState(null);
  const [activeBorder, setActiveBorder] = useState(false);

  useEffect(() => {
    setActiveTopImage(top_image);
  }, [top_image]);

  const emptyImageList = new Array(5 - thumb_images.length).fill(null);

  return (
    <DetailImgBox>
      <LargeImgBoxDiv>
        <ImageData location={LOCATION_TOP} img={activeTopImage} />
      </LargeImgBoxDiv>
      <SmallImgBoxDiv>
        {thumb_images.map((img) => (
          <ImageData
            location={LOCATION_THUMB}
            img={img}
            key={uuidv4()}
            {...{ setActiveTopImage, activeBorder, setActiveBorder }}
          />
        ))}
        {emptyImageList.map((img) => (
          <ImageData
            location={LOCATION_THUMB}
            img={img}
            key={uuidv4()}
            {...{ setActiveTopImage, activeBorder, setActiveBorder }}
          />
        ))}
      </SmallImgBoxDiv>
    </DetailImgBox>
  );
};

export default DetailImage;

const DetailImgBox = styled.div`
  width: fit-content;
`;

const LargeImgBoxDiv = styled.div``;

const SmallImgBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;
