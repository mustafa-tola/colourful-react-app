import React from "react"

class DeepPink extends React.Component{
    getAlert = () => {
        alert('Deep pink')
    }
    
    render(){
        return(
            <div className='Deeppink' onClick={this.getAlert}>Deep Pink</div>
        )
    }
}

export default DeepPink;