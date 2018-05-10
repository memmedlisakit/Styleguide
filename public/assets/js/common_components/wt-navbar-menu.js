import React from 'react';

class Item extends React.Component {
   render() {
       if (this.props.dropStatus) {
           return (
               <li className="menu-item" onClick={this.openDropdown.bind(this)}>
                   {this.props.itemName}
                   <i className="fas fa-caret-right"></i>
                   <ul className="dropdown_menu">
                       {this.props.dropStatus.map((drop, index) => {
                           return (
                               <a key={index} href={drop.link}> <li  >{drop.linkName}</li></a>
                           );
                       })}
                   </ul>
               </li>
           );
       } else {
           return ( 
               <li className="menu-item" onClick={this.openDropdown.bind(this)}>
                   <a href={this.props.link}>
                       {this.props.itemName}
                   </a>
               </li>

           );
       }

   }
   openDropdown(e) { 
       var dropdowns = document.querySelectorAll(".dropdown_menu");
       for (var a = 0; a < dropdowns.length; a++) {
           dropdowns[a].removeAttribute("style");
       }
       try {
           var dropdownItem = e.target.children[1];
           var height = (dropdownItem.children.length * 40); 
           if (dropdownItem.offsetHeight <= 0) {
               dropdownItem.style.height = height + "px";
               dropdownItem.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.2)";
               dropdownItem.style.marginTop = "5px";
           } else {
               dropdownItem.removeAttribute("style");
           }
       } catch (e) {

       }
   }
}
export default class Navbar extends React.Component {
   constructor() {
       super();
       this.state = {
           checking: true
       }
   }
   render() {
       return (
           <div id="navbar_wrapper" style={this.props.style}>
               <div className="bars">
                   <i className="fas fa-bars" onClick={this.handleBarClick.bind(this)}></i>
               </div>
               <nav id="wt-navbar">
                   <ul>
                       {
                           this.props.menuList.map((menu, index) => {
                               return <Item key={index} itemName={menu.name} link={menu.link} dropStatus={menu.dropdown} />
                           })
                       }
                   </ul>
               </nav>
           </div>
       );
   }
   handleBarClick(e) {
       var element = e.target.parentNode.nextElementSibling;
       var height = (element.children[0].children.length * 50); 
       if (this.state.checking) {
           element.style.height = height + "px";
           element.style.overflow = "initial";
           this.setState({
               checking: !this.state.checking
           })
       } else {
           element.style.height = "0px";
           element.style.overflow = "hidden";
           this.setState({
               checking: !this.state.checking
           })
       } 
   }
}

