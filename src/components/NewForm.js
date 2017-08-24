import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // eslint-disable-line

const Form = styled.form`
  width: 400px;
  margin: 26px auto;
  position: relative;
  background: #f3f3f3;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.5);
`;

const FormHeader = styled.div`
  padding: 40px 30px 30px 30px;

  & h1 {
    font-weight: 300;
    font-size: 28px;
    line-height: 34px;
    color: #414848;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 1);
    margin-bottom: 10px;
  }

  & span {
    font-size: 11px;
    line-height: 16px;
    color: rgb(125,158,141);
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 1);
  }
`;

const InputContainer = styled.div`
  padding: 0 30px 25px 30px;
  color: #7f7f7f;

  & input {
    width: 290px;
    padding: 15px 25px;
    margin-bottom: 20px;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #9d9e9e;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 1);
    background: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);
  }
`;

const Footer = styled.div`
  padding: 25px 30px 40px 30px;
  overflow: auto;
  background: #d4dedf;
  border-top: 1px solid #fff;
  box-shadow: inset 0 1px 0 rgba(0,0,0,0.15);
  text-align: center;

  & input {
    padding: 11px 25px;
    font-weight: 300;
    font-size: 18px;
    color: #fff;
    text-shadow: 0px 1px 0 rgba(0,0,0,0.25);
    background: #8eb37f;
    border: 1px solid #86af75;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const InputText = styled.input.attrs({ type: 'text' })`
  padding: 11px 25px;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  text-shadow: 0px 1px 0 rgba(0,0,0,0.25);
  background: #56c2e1;
  border: 1px solid #46b3d3;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: inset 0 0 2px rgba(255, 255, 255, 0.75);
`;

const Select = styled.select`
  margin: 7px 0px 20px 0px;
  width: 100%;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  text-shadow: 0px 1px 0 rgba(0,0,0,0.25);
  background: #b3d199;
  border: 1px solid #9cc48c;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: inset 0 0 2px rgba(255, 255, 2)
`;

const MultiSelect = styled.select`
  width: 88%;
  height: 150px;
  padding: 13px 25px;
  margin: 20px;
  font-family: "HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #9d9e9e;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);
`;

const Close = styled.div`
  position: absolute;
  right: -10px;
  top: -15px;
  background: white;
  border: 1px solid #8290a1;
  border-radius: 18px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
`;

class NewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProgramType: '',
      ProgramName: '',
      DefaultCapacity: '',
      AllowOnlineScheduling: false,
      Type: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(e) {
    const value = !e.target.multiple
      ? e.target.value
      : [...e.target.selectedOptions].map(
        option => option.value,
      );

    this.setState({ [e.target.name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createNewProgram(this.state);
    this.resetForm();
  }

  resetForm() {
    this.setState({
      ProgramType: '',
      ProgramName: '',
      DefaultCapacity: '',
      AllowOnlineScheduling: false,
      Type: [],
    });
  }

  closeForm() {
    this.props.closeForm();
    this.resetForm();
  }

  render() {
    if (this.props.isVisible) {
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <FormHeader>
              <Close onClick={this.closeForm}>X</Close>
              <h1>New Program</h1>
              <span>Add a new program to your organization and keep track of your sales.</span>
            </FormHeader>

            <InputContainer>
              <label htmlFor="ProgramType">Program Type</label>
              <Select
                name="ProgramType"
                value={this.state.ProgramType}
                onChange={this.handleChange}
              >
                <option value="Count Series">Count Series</option>
                <option value="Time Series">Time Series</option>
                <option value="Membership">Membership</option>
              </Select>

              <InputText
                name="ProgramName"
                type="text"
                placeholder="Program Name"
                value={this.state.ProgramName}
                onChange={this.handleChange}
              />
              <InputText
                name="DefaultCapacity"
                type="number"
                placeholder="Default capacity"
                value={this.state.DefaultCapacity}
                onChange={this.handleChange}
              />
              <input
                style={{
                  width: '10px',
                  margin: '0px 10px',
                  boxShadow: 'none',
                }}
                name="AllowOnlineScheduling"
                type="checkbox"
                value={this.state.AllowOnlineScheduling}
                onChange={this.handleChange}
              /> Allow Online Scheduling

              <MultiSelect
                name="Type"
                value={this.state.Type}
                onChange={this.handleChange}
                multiple
              >
                <option value="Classes">Classes</option>
                <option value="Appointments">Appointments</option>
                <option value="Workshops">Workshops</option>
                <option value="Outside">Outside</option>
                <option value="Inside">Inside</option>
                <option value="Gym">Gym</option>
              </MultiSelect>
            </InputContainer>

            <Footer>
              <input type="submit" name="submit" value="Submit" />
            </Footer>
          </Form>
        </div>
      );
    }

    return null;
  }
}

NewForm.propTypes = {
  createNewProgram: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default NewForm;
