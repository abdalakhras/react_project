import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useContext } from 'react';
import ChartContext from './chartContext';
import TaskDateContext from './taskDateContext';



export default function BasicPie() {

  const {checkedValue} = useContext(ChartContext)
  const{transTask,setTransTask} = useContext(TaskDateContext)
  const[updatedTransTask,setUpdatedTransTask]=React.useState([])
  
  
  React.useEffect(()=>{

console.log('transTask-Original',transTask)
transTask.map((n)=>{

 setUpdatedTransTask([...updatedTransTask,{id:n.transTaskId,value:checkedValue[n.transTaskId],label:n.transTaskName}])
  

})


  },[checkedValue])
  
  console.log('transTask-Updated',updatedTransTask)

  return (
    <PieChart
    
      series={[
        { 
         
          data: [
            { id: 0, value: checkedValue, label: 'series A' },
            { id: 1, value: 20, label: 'series B' },
            // { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={200}
      height={200}
    />
  );
}
