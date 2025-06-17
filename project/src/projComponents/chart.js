import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useContext } from 'react';
import ChartContext from './chartContext';



export default function BasicPie() {

  const {checkedValue} = useContext(ChartContext)

  const x = 30-checkedValue
  console.log(checkedValue)
  console.log (x)

  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: checkedValue, label: 'series A' },
            { id: 1, value: x, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={200}
      height={200}
    />
  );
}
