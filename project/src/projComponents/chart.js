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

const seenId = new Set();
  const updatedTaskResult = [];
  for (let i = transTask.length - 1; i >= 0; i--) { //loops backward to find the latest update
    const item = transTask[i];
    console.log('item :',item)
     if (!seenId.has(item.transTaskId)) {
      seenId.add(item.transTaskId);
      console.log('seenId :',seenId)
      updatedTaskResult.unshift(item)
      console.log('updatedTaskResult arr: ',updatedTaskResult)
     }
  }

updatedTaskResult.map((n)=>{

  

 setUpdatedTransTask(updatedTaskResult)
  
// console.log('itm.checkedValue',n.transValue)
})


  },[checkedValue])
  
  console.log('transTask-Updated',updatedTransTask)
  // console.log(checkedValue)

  return (
    <PieChart
    
      series={[
        { 
         
          data: updatedTransTask.map((m)=>({
            id : m.transTaskId,
            label : m.transTaskName , 
            value : m.transValue,
          })),
        },
      ]}
      width={200}
      height={200}
    />
  );
}
