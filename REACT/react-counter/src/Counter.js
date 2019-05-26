import React, {Component} from 'react';
import ButtonPanel from './ButtonPanel';
import SetValuePanel from './SetValuePanel';

class Counter extends Component {

    constructor(props) {
        super(props);
        // super to właściwość która wyciąga z wyższej klasy

        this.state = {
            counterValue: this.props.initValue
        }
    }

    initValue = () => {
        this.setState({counterValue: this.props.initValue});
        
    };


    clearValue = () => {
        this.setState ({ counterValue: 0 });
    };

    changeValue = () => {

        console.log('test');
        this.setState( prevValue => {
            return {
                counterValue: prevValue.counterValue + 1
            };
        });
    };

    setValue = (newValue) => {
        this.setState({counterValue: newValue});
    }

  render() {
      console.log(this);
    return (
      <div className="counter">

          Licznik: {this.state.counterValue}
        
            <ButtonPanel changeCounterValue={this.changeValue} clearCounter={this.clearValue} initValue={this.initValue} />

            <SetValuePanel setCounter={this.setValue}/>

        </div>
        );
    }
}

export default Counter;
