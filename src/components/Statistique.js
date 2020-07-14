import React, { component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import options from './options'

class Statistique extends React.Component {
    render() {
        return (
            <div className="page-wrapper">
                <div class="page-container">
                    {/*<!-- MAIN CONTENT-->*/}
                    <div class="main-content">
                        <div class="section__content section__content--p30">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="m-2">
                                            <HighchartsReact
                                                highcharts={Highcharts}
                                                options={options.op1}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="m-2">
                                            <HighchartsReact
                                                highcharts={Highcharts}
                                                options={options.op2}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="m-2">
                                            <HighchartsReact
                                                highcharts={Highcharts}
                                                options={options.op3}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="m-2">
                                            <HighchartsReact
                                                highcharts={Highcharts}
                                                options={options.op4}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- END MAIN CONTENT-->*/}
                </div>
            </div>
        )
    }
}
export default Statistique