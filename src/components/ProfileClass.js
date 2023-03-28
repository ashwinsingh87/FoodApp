import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state={
        name:'Ashwin',
      }
    }
  }
  componentDidMount(){
    this.setState({name:this.props.name})
    console.log(this.state.name + " from component did mount");
    this.timer = setInterval(()=>{
      console.log("we're in the setInterval")
    },2000);
     
  }
  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("Component will unmount")
  }
  
  render() {
    return (
      <>
        <h1>Profile Class Based Component.</h1>
        <h3>name: {this.state.name}</h3>
{        console.log(this.state.name + " from render")
}        
        <button type="submit" >count</button>
      </>
    );
  }
}
export default ProfileClass;
