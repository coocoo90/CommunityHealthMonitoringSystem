import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import {CHMSIndexFoodChart} from './charts';
import {CHMSIndexBarChart} from './charts';


export default class CHMSIndexShow extends React.Component {

    componentDidMount() {
        (window.$('.indexKnobOuter')).knob({
            angleOffset: -110,
            angleArc: 220,
            fgColor: "#6495ED",
            height: 135,
            width: 200,
            thickness: .2,
            displayInput: false
        });
        (window.$('.indexKnobInner')).knob({
            angleOffset: -110,
            angleArc: 220,
            fgColor: "#FF69B4",
            height: 135,
            width: 160,
            thickness: .3,
            displayInput: false
        });
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={8} md={6} lg={7} lgPush={1}>
                        <h2 className="">Sport Analysis</h2>
                        <p className="lead">This histogram shows the difference about the frequency that several kinds
                            of sports are mentioned by the different genders.</p>
                    </Col>
                    <Col xs={4} md={5} lg={2}>
                        <CHMSIndexBarChart />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={4} md={6} lg={2} lgPush={1}>
                        <CHMSIndexFoodChart />
                    </Col>
                    <Col xs={8} md={6} lg={7}>
                        <h2 className="">Food Analysis</h2>
                        <p className="lead">This is a spider web which shows the average nutrition content of the food
                            about male and female.</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={8} md={8} lg={7} lgPush={1}>
                        <h2 className="">Sentimental Analysis</h2>
                        <p className="lead">This is the knob about sentimental level for two types of genders.
                             </p>
                    </Col>
                    <Col xs={4} lg={3} lgPush={1}>
                        <div style={{position:"relative",height:135,margin:'auto'}}>

                            <div style={{position:"absolute",left:"10px",top:"10px"}}>
                                <input className="knob indexKnobOuter" value="57" readOnly/>
                            </div>
                            <div style={{position:"absolute",left:"30px",top:"30px"}}>
                                <input className="knob indexKnobInner" value="68" readOnly/>
                            </div>
                            <div style={{position:"absolute",left:"87px",top:"100px"}}>
                                <input type="text" className="knob" value="57/68" readOnly style={{width:'50px'}}/>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Grid>

        );
    }

}

