import React, {Component} from 'react';
import ButtonPanel from './ButtonPanel';
import SetValuePanel from './SetValuePanel';
import SetStepPanel from './SetStepPanel';

class Counter extends Component {

    constructor(props) {
        super(props);
        // super to właściwość która wyciąga z wyższej klasy

        this.state = {
            counterValue: this.props.initValue
        };
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

    setValue = newValue => {
        this.setState({counterValue: newValue});
    }

    setStepValue = newStep => {
        console.log(newStep);
        this.setState({stepValue: newStep});

    };

    valuePlusTrzy = () => {
        console.log("dodaj trzy");
        this.setState(prevValue => {
            return {
                counterValue: prevValue.counterValue +3
            };
        })
    }

    nextStep = () => {
        console.log("Zwiększ o X");
        this.setState((prevValue, stepValue) => {
            return {
                counterValue: prevValue.counterValue + this.state.stepValue
            }
        })
    };


  render() {
      console.log(this);
    return (
      <div className="counter">

          Licznik: {this.state.counterValue}
        
            <ButtonPanel 
            changeCounterValue={this.changeValue} 
            clearCounter={this.clearValue} 
            initValue={this.initValue}
            plustrzy={this.valuePlusTrzy}
            nextStep={this.nextStep}
            setName={this.setName} />

            <br/>

            <SetValuePanel setCounter={this.setValue}/>

            Krok: {this.state.stepValue}

            <SetStepPanel setStep={this.setStepValue}/>

        </div>
        );
    }
}

export default Counter;
