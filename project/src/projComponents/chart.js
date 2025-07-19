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

const seen = new Set();
  const result = [];
  for (let i = transTask.length - 1; i >= 0; i--) { //loops backward to find the latest update
    const item = transTask[i];
    console.log('item :',item)
     if (!seen.has(item.transTaskId)) {
      seen.add(item.transTaskId);
      console.log('seen :',seen)
      result.unshift(item)
      console.log('result arr: ',result)
     }
  }

result.map((n)=>{

  

 setUpdatedTransTask([...updatedTransTask,{id:n.transTaskId,value:n.transValue,label:n.transTaskName}])
  
console.log('itm.checkedValue',n.transValue)
})


  },[checkedValue])
  
  console.log('transTask-Updated',updatedTransTask)
  // console.log(checkedValue)

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
