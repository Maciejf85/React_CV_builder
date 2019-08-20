import React from 'react';
import styled from 'styled-components';

import Panel from 'components/molecules/MainPagePanel/Panel';

const StyleWrapper = styled.div`
  width: 100%;
  margin: 15px;
`;

// const confidentialText = {
//   title: 'Klauzula poufności 2019',
//   description: `Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu tej oraz przyszłych rekrutacji (zgodnie z ustawą z
//     dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady
//     (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego
//     przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)`,
// };

const Confidential = () => {
  return (
    <StyleWrapper>
      <Panel />
    </StyleWrapper>
  );
};

export default Confidential;
