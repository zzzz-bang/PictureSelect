import React from 'react'

export default function PictureSelect(props) {
   
    const imgStyle = {
        position : "relative",
        float : "left",
        marginLeft : "10px"
    }
    const checkbox = {
        position : "absolute",
        background : "#fff"
    }
    return (
        <div>
           <div>
           <label>
               <input type="checkbox" checked={
                  props.value.length === 3?true : false
               } onChange={ev=>{
                    props.onChange({
                        type : "allselect",
                        data : ev.target.checked
                    })
               }}/>
               已经选中三个文件
           </label>
           <br/>
           {
                props.pictures.length ? 
                props.pictures.map((item,index)=>(
                    <div style={imgStyle} key={item.id}>
                        <input 
                        checked={
                            props.value.some(value=>{
                                return value === item.id
                            })
                        } 
                        onChange={_=>{
                            props.onChange({
                                type : "danselect",
                                data : props.pictures[index].id
                            })
                        }} style={checkbox} type="checkbox"/>
                        <img  alt="" src={item.url}/>
                    </div>
                ))
                :
                null
            }
           </div>
        </div>
    )
}
