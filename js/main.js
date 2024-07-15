// =========================== Variabels ======================
var closeBtn = document.querySelector('.close-btn')
var openBtn = document.querySelector('.icon-open')
var sidebar = document.querySelector('.sidebar')
var row = document.querySelector('.row')
var rowDesc = document.querySelector('#rowDesc')
var item = document.querySelector('.item')
var allData = []

var loader = document.querySelector('.loader')




//========================== sidebar ===============================

closeBtn.addEventListener('click',function(e){
    sidebar.style.cssText = `transform: translateX(-260px); `
    setTimeout(() => {
        openBtn.classList.replace('d-none','d-block')
        openBtn.style.color = 'white'
      }, "10");
})

openBtn.addEventListener('click',function(e){
    sidebar.style.cssText = `transform: translateX(0); `
    setTimeout(() => {
        openBtn.style.color = 'white'
        openBtn.classList.replace('d-block','d-done')
      }, "1000")
    
})

// ======================================= start section home ===================================
var Detelis = document.getElementById('desc')
var homeSection = document.getElementById('home')



   async function getAllMeals(){
        loader.classList.remove('d-none')
        const allmeals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        const Response = await allmeals.json()
        allData = Response.meals
        console.log(allData)
        display()
    }

    getAllMeals()

function display(){
    var box = ``

    for (var i = 0; i < allData.length; i++) {
        box += `
           
                <div class="col-md-3 ">
                    <div class="item mt-4">
                        <img class="w-100 rounded-4" src=${allData[i].strMealThumb} alt="">

                        <div class="item-caption rounded-4 d-flex align-items-center px-3">
                        <h3>${allData[i].strMeal}</h3>
                    </div>
                    </div>
                </div>
              
        `
        
    }

    row.innerHTML= box 

    document.querySelectorAll('.item').forEach((item) => {
        item.addEventListener('click',function(e){
            console.log(e.target)
            Detelis.classList.remove('d-none')
            homeSection.classList.add('d-none')
        })
    })
}


// ======================================= end section home ===================================
// ======================================= start section Desc ===================================


function dataDesc(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then((Response) => Response.json())
    .then((finalRes) => {
        allData = finalRes.meals
        console.log(allData)
    })
}



dataDesc()

function displayDesc(){
    var box = ``

    for (var i = 0; i < allData.length; i++) {
        box += `
           
                <div class="col-md-4">
                <div class="desc-item">
                    <img class="w-100 rounded-4" src="${allData[i].strMealThumb}" alt="">
                    <h3 class="px-2">${allData[i].strMeal}</h3>
                </div>
            </div>
            <div class="col-md-8">
                <div class="text-desc">
                    <h2>Instructions</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit numquam reiciendis fugiat natus alias.</p>
                    <p>Area : <span>Turkish</span></p>
                    <p>Category  : <span>Side</span></p>
                    <p>Recipes  : <br></p>

                </div>
            </div>
              
        `
        
    }

    rowDesc.innerHTML= box 
}

displayDesc()

// ======================================= end section Desc ===================================

// ======================================= start section sidenave ===================================

var li = document.querySelectorAll('li').forEach(link => {
    link.addEventListener('click',function(e){
        
        var list = this.dataset.list 

        console.log(list)


    })

    
    
})


// ======================================= end section sidenave ===================================

// ======================================= start section search ===================================




// ======================================= end section search ===================================

// ======================================= start section category ===================================
var category = document.querySelector('.category')
var allcategory = []
var rowCategory = document.querySelector('#rowCategory')
//https://www.themealdb.com/api/json/v1/1/categories.php
//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood


function Category(){
    
    async function getCategory(){
        const category = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        const Response = await category.json()
        allcategory = Response.categories
        console.log(allcategory)
        displayCategory()
    }
    
    

function displayCategory(){
    var box = ``

    for (var i = 0; i < allcategory.length; i++) {
        box += `
           
                <div class="col-md-3 mt-5">
                    <div class="item-category ">
                        <img class="w-100 rounded-4" src="${allcategory[i].strCategoryThumb}" alt="">
                        <div class="caption-category text-center rounded-4">
                             <h3 class='mt-1'>${allcategory[i].strCategory}</h3>
                             <p class='px-3'>${allcategory[i].strCategoryDescription}</p>
                        </div>
                    </div>
                 </div>
              
        `
        
    }
    
    rowCategory.innerHTML= box 
}

getCategory()
}
  
// ======================================= end section category ===================================

// ======================================= start section Area ===================================

var area = document.querySelector('.area')
var allArea = []
var rowArea = document.querySelector('#rowArea')
//https:\\www.themealdb.com/api/json/v1/1/list.php?a=list
//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood



function Area(){

    async function getArea(){
        const area = await fetch(`https:\\www.themealdb.com/api/json/v1/1/list.php?a=list`)
        const Response = await area.json()
        allArea = Response.meals
        console.log(allArea)
        displayArea()
    }
    
    
    function displayArea(){
        var box = ``
        
        for (var i = 0; i < allArea.length; i++) {
            box += `
            
            <div class="col-md-3 mt-5 d-flex justify-content-center">
                <div class="item-area">
                    <i class="fa-solid fa-house-laptop"></i>
                    <h3>${allArea[i].strArea}</h3>
                </div>
            </div>
            
            `
            
        }
        
        rowArea.innerHTML= box 
    }
    
    getArea()
  }

// ======================================= end section Area ===================================

// ======================================= start section Ingredients ===================================

var ingredients = document.querySelector('.ingredients')
var allIngredients = []
var rowallIngredients = document.querySelector('#rowIngredients')
//https:\\www.themealdb.com/api/json/v1/1/list.php?i=list
//www.themealdb.com/api/json/v1/1/filter.php?c=Seafood



function ingredient(){

    async function getIngredients(){
        const ingredients = await fetch(`https:\\www.themealdb.com/api/json/v1/1/list.php?i=list`)
        const Response = await ingredients.json()
        allIngredients = Response.meals
        console.log(allIngredients)
        displayIngredients()
    }
    
    
    function displayIngredients(){
        var box = ``
        
        for (var i = 0; i < allIngredients.length ; i++) {
            
            if(allIngredients[i].strDescription != null && allIngredients[i].strDescription !== ''){
                box += `
            
                <div class="col-md-3 mt-5">
                    <div class="item-ingredients text-center ">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${allIngredients[i].strIngredient}</h3>
                        <p>${allIngredients[i].strDescription.split(" ").splice(0,20).join(" ")}</p>
                    </div>
                </div>
            
            `
            }
            if(allIngredients[i].idIngredient == '25'){
                break
            }
        }
        
        rowallIngredients.innerHTML= box 
    }
    
    getIngredients()
  }

// ======================================= end section Area ===================================

// ======================================= start section contact us ===================================


// ======================================= end section contact us ===================================
var contact = document.querySelector('.contact')
var rowContactUs = document.querySelector('rowContactUs')

var nameInput = document.querySelector('nameInput')
var emailInput = document.querySelector('emailInput')
var phoneInput = document.querySelector('phoneInput')
var ageInput = document.querySelector('ageInput')
var passwordInput = document.querySelector('passwordInput')
var repasswordInput = document.querySelector('repasswordInput')




function contactUs(){

    contact.classList.remove('d-none')
    contact.classList.add('d-block')
    console.log('ok')
    

}
function validationContactInput(element){
    // console.log(element.id)
    var regex = {
        nameInput: /^[a-zA-Z]{3,20}$/,
        emailInput: /^[a-zA-a0-9_\-\.]{5,15}(@)[a-z]{5,7}\.[a-z]{3,4}$/,
        phoneInput: /^(002)?01[0-25][0-9]{8}$/,
        ageInput: /^[1-9]{1}[0-9]{1}$/,
        passwordInput: /^[A-Z]?[a-z0-9]{5,20}$/,
        repasswordInput: /^[A-Z]?[a-z0-9]{5,20}$/,
    }
    
    if(regex[element.id].test(element.value) == true){
        console.log('match')
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
    }else{
        console.log('not match')
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')

    }
    

        
}














