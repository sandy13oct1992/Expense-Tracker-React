<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Your Profile</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0,0,0);
            background-color: rgba(0,0,0,0.4);
        }
        .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 600px;
        }
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
        .complete-profile-form {
            display: none;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
        }
        .form-group input, .form-group textarea {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
        }
    </style>
</head>
<body>

<div id="incompleteProfileModal" class="modal">
    <div class="modal-content">
        <span class="close" id="closeModal">&times;</span>
        <p>Your profile is incomplete. Please complete your profile.</p>
        <button id="completeProfileBtn">Complete Profile</button>
    </div>
</div>

<div class="complete-profile-form" id="completeProfileForm">
    <h2>Complete Your Profile</h2>
    <form id="profileForm">
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required>
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="bio">Bio</label>
            <textarea id="bio" name="bio" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
</div>

<script>
    // Show the modal when the user logs in
    window.onload = function() {
        var modal = document.getElementById("incompleteProfileModal");
        modal.style.display = "block";
    };

    // Close the modal
    document.getElementById("closeModal").onclick = function() {
        var modal = document.getElementById("incompleteProfileModal");
        modal.style.display = "none";
    };

    // Show the complete profile form
    document.getElementById("completeProfileBtn").onclick = function() {
        var modal = document.getElementById("incompleteProfileModal");
        var form = document.getElementById("completeProfileForm");
        modal.style.display = "none";
        form.style.display = "block";
    };

    // Handle form submission
    document.getElementById("profileForm").onsubmit = function(event) {
        event.preventDefault();
        alert("Profile submitted!");
        // Here you would typically handle the form submission,
        // e.g., send the data to the server via AJAX
    };
</script>

</body>
</html>

import CartContext from "./CartContext";
import { useState,useEffect} from "react";

const CartProvider = (props) => {
    const [Data, setData] =useState('');
    const [FormData, setFormData] =useState([]);
    
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const [emailr, setEmail] = useState('')

    const userIsLoggedIn = !!token;

    const logInHandler = (token) => {
      setToken(token);
      localStorage.setItem('token', token)
    }

    const logOutHandler = () => {
      setToken(null);
      localStorage.removeItem('token');
    }
   
    setTimeout(() => {
      logOutHandler()
    },50000);

    // import { useReducer } from "react";
import { useState } from "react";
import CartContext from "./CartContext";

// const defaultCartState={
//     votername:[],
//     monitorname:[],
//     totalvote:0,
// }

// const cartReducer = (state, action) => {
//     if(action.type=="Add"){
//         const updatedData= [...state.votername, {...action.newdata, id:Math.random().toString() }]
//         state.votername=updatedData;
//         return state;
//     }
//     return defaultCartState;
// }

const CartProvider = (props) => {
    //  const [cartState, setDispatchAction] = useReducer(cartReducer, defaultCartState);
     const [vName, setVoterName]=useState('');
     const [mName, setMonitor] = useState('')
     const [email, setEmail] = useState('');
     const [token, setToken] = useState(null);
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [currentUserEmail, setCurrentUserEmail] = useState('');

     const updateCurrentUserEmail = (email) => {
        setCurrentUserEmail(email);
    };

    // const submitCartHandler =(data) =>{
    //     setVoterName((previousData) => {
    //      return(
    //          [...previousData, vName]
    //      )
    //     })
    // }
     const logInHandler = (token) => {
        setToken(token);
        setIsLoggedIn(true);
     }

     const logOutHandler = () => {
        setIsLoggedIn(false);
        setToken(null);
        setCurrentUserEmail('');
    };

    //  const logOutHandler = () => {
    //     setIsLoggedIn(false);
    //     setCurrentUserEmail('');
        // Remove token from localStorage or manage as needed
    // };
        // Optionally, store the token in local storage for persistence
   
    // const addVoteHandler = (data) => {
    //      setVo({type:"Add", newdata:data})
    // }

    // const deleteVoteHandler = (id) =>{
    //     setDispatchAction({type:"Remove", id:id})
    // }

    // const allData = {
    //     vname:cartState.votername,
    //     mname:cartState.monitorname,
    //     totalvote:0,
    //     AddVote:addVoteHandler,
    //     deletVote:deleteVoteHandler

    

    return(
        <CartContext.Provider value={{logOutHandler, setVoterName,logInHandler, vName,mName,isLoggedIn,currentUserEmail,updateCurrentUserEmail, setVoterName, setMonitor,email, setEmail, logInHandler, logOutHandler}}>{props.children}</CartContext.Provider>
    )
    }

export default CartProvider;
