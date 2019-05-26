import React from "react"

class Orange extends React.Component{
    getAlert = () => {
        alert('orange')
    }
    
    render(){
        return(
            <div className='Orange' onClick={this.getAlert}>Orange</div>
        )
    }
}

export default Orange;