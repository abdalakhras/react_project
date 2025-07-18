import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useContext } from 'react';
import ChartContext from './chartContext';
import TaskDateContext from './taskDateContext';



export default function BasicPie() {

  const {checkedValue} = useContext(ChartContext)
  const{transTask,setTransTask,taskId} = useContext(TaskDateContext)
  const[updatedTransTask,setUpdatedTransTask]=React.useState([])
  
  
  React.useEffect(()=>{

console.log('transTask-Original',transTask)

transTask.map((n)=>{

  

 setUpdatedTransTask([...updatedTransTask,{id:n.transTaskId,value:n.transValue,label:n.transTaskName}])
  
console.log('itm.checkedValue',n.transValue)
})


  },[checkedValue])
  
  console.log('transTask-Updated',updatedTransTask)

  return (
    <PieChart
    
      series={[
        { 
         
          data: updatedTransTask.map((m)=>({
            id : m.id,
            label : m.label , 
            value : m.value,
          })),
        },
      ]}
      width={200}
      height={200}
    />
  );
}
