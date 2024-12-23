
 const container = document.getElementById("blogs-container");

const blogs = [
  { 
    image: "imgs/photo_2024-12-02_01-39-57.jpg", 
    title: "Karen Salmansohn ", 
    description: "Healthy eating is not a die it's a lifestyle that nourishes the body, fuels the mind, and inspires a balanced, vibrant life" 
  },
  { 
    image: "imgs/photo_2024-12-02_01-51-09.jpg", 
    title: "Robin Sharma ", 
    description: "Time management is life management. By effectively managing your time, you also manage your life and your destiny" 
  },
  { 
    image: "imgs/thomas.jpg", 
    title: "Thomas Edison ", 
    description: "The mind is like a motor; it needs the right fuel to run properly. We must nourish our minds with continuous learning, innovation"
  },
];


for (let i=0 ; i<blogs.length ; i++){
    //انشاء div لل card
    const blogcard =document.createElement('div');
    blogcard.classList.add('card');
    blogcard.style="width: 12rem";
    blogcard.style="margin-right: 20px";
    // وضع الصورة
    const cardimg = document.createElement('img');
    cardimg.src = blogs[i].image;
    cardimg.classList.add('card-img-top')
    blogcard.appendChild(cardimg)
    //انشاء body البطاقة
    const cardbody = document.createElement('div')
    cardbody.classList.add('card-body');
    //العنوان
    const cardtitle = document.createElement('h4');
    cardtitle.textContent = blogs[i].title;
    cardbody.appendChild(cardtitle);
    cardtitle.classList.add('title');

    const desc = document.createElement('card-text');
    desc.textContent = blogs[i].description;
    desc.classList.add('card-text');

    cardbody.appendChild(desc);
    blogcard.appendChild(cardbody);

   container.appendChild(blogcard);
}
