let jsonArr = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]
    
const container = document.querySelector(".container");

for ( let i = 0; i < jsonArr.length; i++ ){
let obj = jsonArr[i];
const card = document.createElement("div");
card.classList.add("card");
let image = document.createElement("img");
image.src = obj["imageSrc"];
card.appendChild(image);
const type = document.createElement("p");
type.innerText = obj["type"];
if(obj["type"] == "veg"){
    card.classList.add("veg");
}
else{
    card.classList.add("non-veg");
}
type.classList.add("mute-text");
card.appendChild(type);
let item = document.createElement("div");
item.classList.add("item");
let itemname = document.createElement("p");
itemname.classList.add("item-name");
itemname.innerText = obj["name"];
item.appendChild(itemname);
let rating = document.createElement("p");
rating.innerHTML = `<span><i class="fa-solid fa-star" style="color: #ecbb09;"></i></span>  ${obj["rating"]}`;
rating.classList.add("rating");
if(obj["rating"] >= 4.5){
    card.classList.add("high-rate");
}
else{
    card.classList.add("low-rate");
}
item.appendChild(rating);
card.appendChild(item);
let other = document.createElement("div");
other.classList.add("other");
let time = document.createElement("p");
time.classList.add("time");
time.innerText = obj["time"];
other.appendChild(time);
let likeComment = document.createElement("div");
likeComment.classList.add("like-comment");
let like = document.createElement("button");
let comment = document.createElement("button");
like.innerHTML = `<i class="fa-regular fa-heart"></i>`;
comment.innerHTML = `<i class="fa-regular fa-comment"></i>`;
like.classList.add("like");
comment.classList.add("comment");
like.addEventListener("click", onLike);
likeComment.appendChild(like);
likeComment.appendChild(comment);
other.appendChild(likeComment);
card.appendChild(other);
container.appendChild(card);
}

function onLike(event){
    let btn = event.target.parentNode;
    btn.classList.toggle("like-press");
}