import React, { Component } from 'react';
import axios from 'axios';
import Button from 'components/atoms/Buttons/Button';
import styled from 'styled-components';
import { Textarea } from 'components/atoms/Inputs/';
import path from '../../../path';

const StyleWrapper = styled.div`
  width: 100%;
  height: calc(100% -15px);
  border: 1px solid red;
  margin: 15px;
`;

// const confidentialText = {
//   title: 'Klauzula poufności 2019',
//   description: `Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu tej oraz przyszłych rekrutacji (zgodnie z ustawą z
//     dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady
//     (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego
//     przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)`,
// };

class Confidential extends Component {
  state = {
    confidential: '',
    isEdit: true,
  };

  componentDidMount() {
    console.log('component did mount');
    console.log(Object.entries(this.state.confidential).length === 0);
    this.handleDataSend();
  }

  setData = response => {
    this.setState({
      confidential: response,
    });
  };

  handleChange = e => {
    console.log('handle change', this.state);
    const { value } = e.target;
    this.setState({
      confidential: value,
    });
  };

  handleDataSend = () => {
    console.log('data send');
    axios({
      method: 'post',
      url: `${path.cors}http://www.maciejf.pl/cv-builder/data.php`,
    })
      .then(response => this.setData(response.data.confidential))
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.confidential);
    console.log(Object.entries(this.state.confidential).length === 0);

    const { isEdit } = this.state;
    return (
      <StyleWrapper>
        <h1>Confidential component</h1>
        {isEdit && (
          <form>
            <Textarea
              id="confidential"
              value={this.state.confidential}
              onChange={this.handleChange}
            />
            <Button type="submit">wyślij</Button>
          </form>
        )}
        {!isEdit && 'edit'}
        <Button type="button" onClick={this.handleDataSend}>
          get data
        </Button>
        <Button type="button" onClick={() => this.setState({ isEdit: !isEdit })}>
          edit
        </Button>
      </StyleWrapper>
    );
  }
}
export default Confidential;
