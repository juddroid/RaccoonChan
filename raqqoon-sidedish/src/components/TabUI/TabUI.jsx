import styled from 'styled-components';
import TabBody from 'components/tabUI/TabBody';
import TabHeader from 'components/tabUI/TabHeader';

const TabUI = () => {
  return (
    <TabUIBoxSection>
      <TabHeader />
      <TabBody />
    </TabUIBoxSection>
  );
};

export default TabUI;

const TabUIBoxSection = styled.section`
  width: 1280px;
`;