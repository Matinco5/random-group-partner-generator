let members = [
    {
        name : "Emmauel Olusegun Emmix",
        YOE: "6 months",
        Role: "Front-end Developer",
        Technologies: "HTML,CSS,JS",
        nickname: "Emmix",
         img: "emmix.jpg"
    },

    {
        name : "Marvelous Ilesanmi Martols",
        YOE: "6 months",
        Role: "Front-end Developer",
        Technologies: "HTML,CSS,JS,REACT.JS.",
        nickname:"Martols",
        img: "Tolu.jpg"
    },

    {
        name : "Nurudeen Surajudeen Suray",
        YOE: "6 months",
        Role: "Front-end Developer",
        Technologies: "HTML,CSS,JS.",
        nickname: "Suray",
        img: "Suray.jpg"
    },

    {
        name : "Matthew Opeyemi Senator",
        YOE: "6 months",
        Role: "Front-end Developer",
        Technologies: "HTML,CSS,JS",
        nickname: "senator",
        img: "matthews.jpg"

    }
]

let searchBtn = document.querySelector(".search-btn")
let recheckBtn = document.querySelector(".recheck-btn")
let searchInput = document.querySelector("input")
let bodyContent = document.querySelector(".body-content")

let memberImages = document.querySelector(".body-content img")
let memberName = document.querySelector(".name")
let memberRole = document.querySelector(".role")
let memberTech = document.querySelector(".Tech")
let memberYOE = document.querySelector(".YOE")


function eventListeners(){
    searchBtn.addEventListener("click", showPartner)
    recheckBtn.addEventListener("click", recheck)
    }

eventListeners()


//Validation of the data gotten from the input field.
//Each member of the Coding generals community is validated via their nickname

function memberValidation(){
    //Here, we are creating empty array 
    let membersNicknames =[];
    //The input value gotten from the input field
    let searchInput = document.querySelector("input")

    //looping through the datas of the community members to extract their nickname
    members.forEach((member)=>{
        let singleMemberNickName = member.nickname

        //pushing each nickname into the empty array created above
        membersNicknames.push(singleMemberNickName.toLocaleLowerCase())
        
    })
        //checking if the input value from the input field is present in the arrays of nickname created
    if(membersNicknames.includes(searchInput.value.toLocaleLowerCase())){
        console.log(searchInput.value)
        return true  
    } else{
        return false
    }
}



//generation of random numbers not exceeding the number of members we have in our community
function randomNum(){
    return( Math.floor(Math.random() * members.length) )
}

function showPartner(){

    if(searchInput.value === "" ){
        alert("You can't leave the space blank")
    }
    else{
        if(!memberValidation()){
            alert("Sorry, you are not a member of our community")
            
        }
        else{
            let codingGenerals = members[randomNum()];
            memberName.textContent = codingGenerals.name
            memberRole.textContent = codingGenerals.Role
            memberYOE.textContent = codingGenerals.YOE
            memberTech.textContent = codingGenerals.Technologies
            memberImages.src = codingGenerals.img 
        
            recheckBtn.style.display = "block"
            bodyContent.style.display = "block"
            searchBtn.style.display = "none";
            searchInput.style.display = "none";
            
            //Checking if the random partner generated is the person enterin his/details

            if(searchInput.value.toLocaleLowerCase() === codingGenerals.nickname.toLocaleLowerCase()){
                alert("oops! Try again you can't partner yourself")
                recheck()
            }
            else{
            alert(searchInput.value + " congratulations your Partner is " + codingGenerals.nickname + ". Press ok to view his profile")
            }

        }
    }

    }

  //Incase a user gets himself as a partner, this function affords him the opportunity to check for another available partner  
function recheck() {
    recheckBtn.style.display = "none"
    bodyContent.style.display = "none"
    searchBtn.style.display = "block";
    searchInput.style.display = "block";

    searchInput. value =""
}




