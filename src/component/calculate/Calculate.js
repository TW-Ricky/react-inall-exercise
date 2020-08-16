import React from 'react';
import { NavLink } from 'react-router-dom';
import './calculate.less';
import { Row, Col, Input, Button } from 'antd';
import 'antd/dist/antd.css';    

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      option: '',
    }
  }

  handleNumber = (event) => {
    if (this.state.option === '') {
        this.setState({
            first: this.state.first + event.target.value
        });
    } else {
        this.setState({
            second: this.state.second + event.target.value
        });
    }
  }

  handleOption = (event) => {
      this.setState({
          option: event.target.value
      });
  }

  handleClear = () => {
    this.setState({
        first: '',
        second: '',
        option: '',
    })
  }

  handleEqual = () => {
      const {first, option, second} = this.state;
      let result = 0;
      switch (option) {
            case '+':
                result = Number(first) + Number(second);
                break;
            case '-':
                result = Number(first) - Number(second);
                break;
            case '*':
                result = Number(first) * Number(second);
                break;
      }
      this.setState({
          first: result,
          option: '',
          second: ''
      })
  }
  render() {
    return (
      <div className="calculate">
        <h1>在线计算器</h1>
        <div className="calculator">
            <div className="result">
                <Input value = {[this.state.first,this.state.option,this.state.second].join(' ')}/>
            </div>
            <div className="buttons">
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                    <button style={{background: '#ffec3d'}} onClick={this.handleOption} value='+'> + </button>
                    </Col>
                    <Col span={8}>
                    <button style={{background: '#ffec3d'}} onClick={this.handleOption} value='-'> - </button>
                    </Col>
                    <Col span={8}>
                    <button style={{background: '#ffec3d'}} onClick={this.handleOption} value='*'> x </button>
                    </Col>
                </Row>
                <Row  gutter={[16, 16]}>
                    <Col span={8}>  
                    <button style={{background: '#fcc04e'}} onClick={this.handleNumber} value='7'> 7 </button>
                    </Col>
                    <Col span={8}>
                    <button style={{background: '#fcc04e'}} onClick={this.handleNumber} value='8'> 8 </button>
                    </Col>
                    <Col span={8}>
                    <button style={{background: '#fcc04e'}} onClick={this.handleNumber} value='9'> 9 </button>
                    </Col>
                </Row>
                <Row  gutter={[16, 16]}>
                    <Col span={8}>
                    <button style={{background: '#fcc04e'}} onClick={this.handleNumber} value='4'> 4 </button>
                    </Col>
                    <Col span={8}>
                    <button style={{background: '#fcc04e'}} onClick={this.handleNumber} value='5'> 5 </button>
                    </Col>
                    <Col span={8}>
                    <button style={{background: '#fcc04e'}} onClick={this.handleNumber} value='6'> 6 </button>
                    </Col>
                </Row>
                <Row  gutter={[16, 16]}>
                    <Col span={8}>
                    <button style={{background: '#fcc04e'}} onClick={this.handleNumber} value='1'> 1 </button>
                    </Col>
                    <Col span={8}>
                    <button style={{background: '#fcc04e'}} onClick={this.handleNumber} value='2'> 2 </button>
                    </Col>
                    <Col span={8}>
                    <button style={{background: '#fcc04e'}} onClick={this.handleNumber} value='3'> 3 </button>
                    </Col>
                </Row>
                <Row  gutter={[16, 16]}>
                    <Col span={8}>
                    <button style={{background: '#fcc04e'}} onClick={this.handleNumber} value='0'> 0 </button>
                    </Col>
                    <Col span={8}>
                    <button style={{background: '#ffbefe'}} onClick={this.handleClear}> Clear </button>
                    </Col>
                    <Col span={8}>
                    <button style={{background: '#ff8010'}} onClick={this.handleEqual}> = </button>
                    </Col>
                </Row>
            </div>
            
        </div>
        <div className="back-home"><NavLink to='/'>返回主页</NavLink></div>
      </div>
    )
  }
}

export default Calculate;