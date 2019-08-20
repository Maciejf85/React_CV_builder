import React, { Component } from 'react';
import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 100%;
  height: calc(100% -15px);
  border: 1px solid red;
  margin: 15px;
`;

const confidentialText = {
  title: 'Klauzula poufności 2019',
  description: `Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu tej oraz przyszłych rekrutacji (zgodnie z ustawą z
    dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady    
    (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego    
    przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)`,
};

class Confidential extends Component {
  componentDidMount() {
    console.log('component did mount');
  }

  handleDataSend = () => {
    console.log('data send');
    axios({
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/http://www.maciejf.pl/cv-builder/data.php',
      data: {
        type: 'file',
        name: 'Maciej Fiałkowski',
        age: 34,
        confidential: JSON.stringify(confidentialText.description),
      },
    })
      .then(response => console.log(response))
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <StyleWrapper>
        <h1>Confidential component</h1>
        {/* <h4>{confidentialText.title}</h4> */}
        {/* <p>{confidentialText.description}</p> */}
        <Button type="button" onClick={this.handleDataSend}>
          Send data
        </Button>
      </StyleWrapper>
    );
  }
}
export default Confidential;
