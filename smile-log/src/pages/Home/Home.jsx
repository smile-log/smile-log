import React, { Component } from 'react'
import NavList from '@/components/NavLeft/NavLeft'
// import Center from "@/components/Center/Center";
import Footer from '@/components/Footer/Footer'
import Header from "@/components/Header/Header"
import './Home.less'
export class Home extends Component {
   // componentDidMount(){
   //    console.log(this.props.router.match.params.id)
   //    this.$axios.get('/abc')
   //    .then((res)=>{
   //       console.log(res)
   //    })
   // }
  render() {
    return (
       <div>
          <div className="home">
            <div className="left">
               <NavList></NavList>
            </div>
            <div className="right">
               <Header router={this.props.router}></Header>
               {/* <Center></Center> */}
               <div>
                  {this.props.children}
               </div>
               <Footer></Footer>
            </div>
         </div>
       </div>
    )
  }
}

export default Home
