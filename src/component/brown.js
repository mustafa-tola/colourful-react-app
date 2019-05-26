import React from "react";

class Brown extends React.Component {
  getAlert = () => {
    alert("brown");
  };

  //   function getAlert(){
  //     alert("brown");
  //   }

  render() {
    return (
      <div onClick={this.getAlert} className="Brown">
        Brown
      </div>
    );
    // return (
    //   <div onClick={this.getAlert} className="Brown">
    //     Brown
    //   </div>
    // );
    // return <div onclick="getAlert()" className="Brown">Brown</div>;
  }
}

export default Brown;
