const foodMenu = [
    {
        name:"Nehari",
        price:"Price:500",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdc0gsWstc5SFyaJfbPFVPokHRY-VU8pi2yw&s",
        type:"lunch",
    },
    {
        name:"biryani",
        price:"Price:400",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrzxb50qx_ti-Lh5fJ8DHfELFrDrMK6NG1w&s",
        type:"lunch",
    },
    {
        name:"Halwa Puri",
        price:"Price:150",
        img:"https://img-global.cpcdn.com/recipes/c57cc0dbdf577f2d/1200x630cq70/photo.jpg",
        type:"breakFast",
    },
    {
        name:"Maska bun",
        price:"Price:120",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVnciILo0RPNgxbZ5TzJ2kKNvzsUVO-fQGQ&s",
        type:"breakFast",
    },
    {
        name:"Anda Paratha",
        price:"Price:120",
        img:"https://i.ytimg.com/vi/pbIu7LxuAQM/maxresdefault.jpg",
        type:"breakFast",
    },
    {
    name:"Chai Paratha",
    price:"Price:100",
    img:"https://images.deliveryhero.io/image/fd-pk/Products/7602297.jpg?width=%s",
    type:"breakFast", 
    },
    {
        name:"Chicken karahi",
        price:"Price:1500",
        img:"https://satyamskitchen.com/wp-content/uploads/2021/03/Chicken-Karahi.jpg",
        type:"lunch",
    },
    {
        name:"korma",
        price:"Price:800",
        img:"https://i.ndtvimg.com/i/2016-10/chicken-korma_650x400_51475662188.jpg",
        type:"lunch",
    },
    {
        name:"Paaye",
        price:"Price:1000",
        img:"https://i.ytimg.com/vi/QAiJ_1Ypt40/maxresdefault.jpg",
        type:"dinner",
    },
    {
        name:"Seekh Kabab",
        price:"Price:700",
        img:"https://c.ndtvimg.com/2020-01/a39okhfk_620_625x300_21_January_20.jpg",
        type:"dinner",
    },
    {
        name:"Chicken Tikka",
        price:"Price:900",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--a-wg8SSwtuACNGsDlvzIdb5yf4awHvkHw&s",
        type:"dinner",
    },
    {
        name:"Pizza",
        price:"Price:2000",
        img:"https://www.allrecipes.com/thmb/aefJMDXKqs42oAP71dQuYf_-Qdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg",
        type:"dinner",
    }
]

const buttons = [
    {
        title:"Dinner",
        fn:"dinner()"
    },
    {
        title:"Lunch",
        fn:"lunch()",
    },
    {
        title:"BreakFast",
        fn:"breakFast()",
    },
    {
        title:"All",
        fn:"All()",
    }
]

buttons.forEach( function (btn){
    const button = document.createElement("button")
    button.innerText = btn.title
    button.classList.add("button")
    button.setAttribute("onClick",btn.fn)
    document.querySelector(".btn").prepend(button)
})

foodMenu.forEach(function (item){
    const menuItem = document.createElement('div')
    menuItem.setAttribute("class",item.name)
    menuItem.classList.add("main","mains")
    menuItem.innerHTML = `
    <div class="mainss">
    <div class="mains">
    <div class="main">
            <div class="image">
                <img src="${item.img}" alt="">
                <h2 class="heading">${item.name}<br>${item.price}</h2>
            </div>
    </div>        
    </div>       
    </div> 
    `
    document.querySelector('.mains').appendChild(menuItem)

})

function breakFast(){
    document.querySelector(".mains").innerHTML = ``
    foodMenu
    .filter(function (item){
        return item.type == "breakFast"
    })
    .forEach(function (item){
        const menuItem = document.createElement('div')
        menuItem.classList.add("mains","main")
        menuItem.innerHTML = `
        <div class="mains">
        <div class="main">
                <div class="image">
                    <img src="${item.img}" alt="">
                    <h2 class="heading">${item.name}<br>${item.price}</h2>
                </div>
        </div>        
        </div>       
        `
        document.querySelector('.mains').appendChild(menuItem)
    
    })
}

function lunch(){
    document.querySelector(".mains").innerHTML = ``
    foodMenu
    .filter(function (item){
        return item.type == "lunch"
    })
    .forEach(function (item){
        const menuItem = document.createElement('div')
        menuItem.classList.add("mains","main")
        menuItem.innerHTML = `
        <div class="mains">
        <div class="main">
                <div class="image">
                    <img src="${item.img}" alt="">
                    <h2 class="heading">${item.name}<br>${item.price}</h2>
                </div>
        </div>        
        </div>
        `
        document.querySelector('.mains').appendChild(menuItem)
    
    })
}

function dinner(){
    document.querySelector(".mains").innerHTML = ``
    foodMenu
    .filter(function (item){
        return item.type == "dinner"
    })
    .forEach(function (item){
        const menuItem = document.createElement('div')
        menuItem.classList.add("mains","main")
        menuItem.innerHTML = `
        <div class="mains">
        <div class="main">
                <div class="image">
                    <img src="${item.img}" alt="">
                    <h2 class="heading">${item.name}<br>${item.price}</h2>
                </div>
        </div>        
        </div>
        `
        document.querySelector('.mains').appendChild(menuItem)
    
    })
}

function All(){
    document.querySelector(".mains").innerHTML = ``
    foodMenu.forEach(function (item){
            const menuItem = document.createElement('div')
            menuItem.classList.add("mains","main")
            menuItem.innerHTML = `
            <div class="mains">
            <div class="main">
                    <div class="image">
                        <img src="${item.img}" alt="">
                        <h2 class="heading">${item.name}<br>${item.price}</h2>
                    </div>
            </div>        
            </div>
            `
            document.querySelector('.mains').appendChild(menuItem)
        
        })
}