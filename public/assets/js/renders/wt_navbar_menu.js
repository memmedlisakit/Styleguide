import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../common_components/wt-navbar-menu';


 
var list = [
    {
        name: "Header",
        link:"#Header"
    },
    {
        name: "Buttons",
        link:"#",
        dropdown:[
            {
                linkName:"Basic Examples",
                link:"#Basic"
            },
            {
                linkName:"Dropdowns",
                link:"#Dropdowns"
            }
        ]
    } ,
    {
        name:"Form",
        link:"#",
        dropdown:[
            {
                linkName:"Textinputs",
                link:"#Inputs"
            },
            {
                linkName:"Textarea",
                link:"#Textarea"
            },
            {
                linkName:"Checkbox",
                link:"#Checkbox"
            },
            {
                linkName:"Radio",
                link:"#Radio"
            },
        ]
    },
    {
        name:"Common",
        link:"#",
        dropdown:[
            {
                linkName:"Modal",
                link:"#Modal"
            }, 
            {
                linkName:"Notifications",
                link:"#Notifications"
            },  
            {
                linkName:"Pagination",
                link:"#Pagination"
            }, 
            {
                linkName:"Typography",
                link:"#Typography"
            }, 
            {
                linkName:"Grid",
                link:"#Grid"
            }, 
            {
                linkName:"Colors",
                link:"#Colors"
            }, 
            {
                linkName:"Icons",
                link:"#Icons"
            }, 
            {
                linkName:"Footer",
                link:"#Footer"
            }, 
        ]
    },
    {
        name:"React Components",
        link:"#",
        dropdown:[
            {
                linkName:"React button",
                link:"#React_button"
            }, 
            {
                linkName:"React dropdown",
                link:"#React_dropdown"
            },  
            {
                linkName:"React inputs",
                link:"#React_input"
            }, 
            {
                linkName:"React textarea",
                link:"#React_textarea"
            },
            {
                linkName:"React checkbox",
                link:"#React_checkbox"
            }, 
            {
                linkName:"React radio",
                link:"#React_radio"
            },
            {
                linkName:"React notification",
                link:"#React_notification"
            },
            {
                linkName:"React modal",
                link:"#React_modal"
            },
        ]
    },
]
 
ReactDOM.render(<Navbar  menuList = {list}/>, document.querySelector(".react_navbar_menu"));

