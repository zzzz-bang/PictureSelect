import React,{useState} from 'react'
import PictureSelect from './views/PictureSelect';

export default function App() {
  const pictures = [
    {
      id: '1',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
  ];
  const [value,setValue] = useState(['1'])
  console.log(value)
  return (
    <div>
      <PictureSelect pictures={pictures} value={value} onChange={(action) => {
        let {type,data} = action
        let newValue = [...value]
        if(type === "danselect"){
          var index =  value.findIndex(item=>{
            return item === data
          })
          if(index === -1){
            newValue.push(data)
            setValue(newValue)
          }else{
            newValue.splice(index,1)
            setValue(newValue)
          }
        }else{
          if(data){
            setValue(['1','2','3'])
          }else{
            setValue([])
          }
        }
      }} />
    </div>
  )
}
