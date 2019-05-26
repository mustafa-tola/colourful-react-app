import React from "react"

class Green extends React.Component{
    getAlert = () => {
       alert('green')
    }
    
    render(){
        return(
            <div className='Green' onClick={this.getAlert}>Green</div>
        )
    }
}

export default Green;