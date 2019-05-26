import React from "react"

class DeepPink1 extends React.Component{
    getAlert = () => {
        alert('Deep pink')
    } 
    
    render(){
        return(
            <div className='DeepPink1' onClick = {this.getAlert}>DeepPink1</div>
        )
    }
}

export default DeepPink1;