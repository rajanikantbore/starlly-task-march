import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import configObj from '../utils/configObj';

function Chart() {
  return (
    <div className='chart-main'>
        <HighchartsReact
                 highcharts={Highcharts}
                 options={configObj}
        />
    </div>
  )
}

export default Chart
