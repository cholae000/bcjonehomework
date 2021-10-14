//Start Header
//for navbuttons phone screen
const navbuttons = document.querySelector('.navbuttons');
navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));
// End Header 

// Start Shop Section 
const shopcontainer = document.querySelector('.shop-container');

const left = document.querySelector('.left'),
    right = document.querySelector('.right');

left.addEventListener('mouseenter',()=>shopcontainer.classList.add('hover-left'));
left.addEventListener('mouseleave',()=>shopcontainer.classList.remove('hover-left'));

right.addEventListener('mouseenter',()=>shopcontainer.classList.add('hover-right'));
right.addEventListener('mouseleave',()=>shopcontainer.classList.remove('hover-right'));
// End Shop Section 

// Start Trainer Section
const trainers = document.querySelectorAll('.trainers');

trainers.forEach(trainer=>{

    trainer.addEventListener('mouseenter',()=>{
        
        removetraineractive();

        trainer.classList.add('traineractive');
    });
    trainer.addEventListener('mouseleave',()=>trainer.classList.remove('traineractive'));
});

function removetraineractive(){
    trainers.forEach(trainer=>trainer.classList.remove('traineractive'));
}
// End Trainer Section 

// Start Aboutus Section 
const gallerylists = document.querySelectorAll('.gallerylists');
const filterall = document.querySelectorAll('.filters');

const rooms = document.querySelectorAll('.room');
const foods = document.querySelectorAll('.food');
const activities = document.querySelectorAll('.activities');

//  console.log(filterall);

gallerylists.forEach(gallerylist=>{
    let datafilter = gallerylist.getAttribute('data-filters');

    gallerylist.addEventListener('click',(e)=>{

        // console.log(gallerylist);

        removeactiveitem();
        e.target.classList.add('activeitems');

        if(datafilter === 'all'){

            filterall.forEach(filter=>filter.style.display = 'inline-block');

        }else if(datafilter === 'room'){

            rooms.forEach(room=>room.style.display = 'inline-block');

            foods.forEach(food=>food.style.display = 'none');

            activities.forEach(activity=>activity.style.display = 'none');

        }else if(datafilter === 'food'){

            foods.forEach(food=>food.style.display = 'inline-block');

            rooms.forEach(room=>room.style.display = 'none');

            activities.forEach(activity=>activity.style.display = 'none');

        }else if(datafilter === 'activities'){

            activities.forEach(activity=>activity.style.display = 'inline-block');

            foods.forEach(food=>food.style.display = 'none');

            rooms.forEach(room=>room.style.display = 'none');

        }
    });
});

function removeactiveitem(){
    gallerylists.forEach(gallerylist=>{
        gallerylist.classList.remove('activeitems');
    })
}
// End Aboutus Section 

// Start Pricing Section 
const checkbox = document.getElementById('toggle');
const slider = document.querySelector('.slider');

const standard = document.querySelector('.standard');
const vip = document.querySelector('.vip');
const vvip = document.querySelector('.vvip');

slider.addEventListener('click',()=>{
    if(checkbox.checked){
        standard.innerText = 25000;
        vip.innerText = 45000;
        vvip.innerText = 75000;
    }else{
        standard.innerText = 300000;
        vip.innerText = 500000;
        vvip.innerText = 900000;
    }
})
// End Pricing Section

// Start Footer 
const year = document.querySelector('.year');

let getyear = new Date().getUTCFullYear();
year.innerText = getyear;
// End Footer

// For Member Button 
const memberbtns = document.querySelectorAll('.memberbtn');
const membermodal = document.querySelector('.membermodal');
const memberbody = document.querySelector('memberbody');
const btnclose = document.querySelector('.btnclose');
const btnapply = document.querySelector('.btnapply');
const deletediv = document.querySelector('.deletediv');


memberbtns.forEach(memberbtn => memberbtn.addEventListener('click',()=> membermodal.classList.toggle('hide')));


btnclose.addEventListener('click',()=> membermodal.classList.add('hide'));

btnapply.addEventListener('click',()=>{
    const thankletter = document.createElement('div');

    thankletter.innerHTML =`
           <div class='thankletter'>
                <button class="btnclosee"><i class="fas fa-times fa-2x"></i></button>
                <i class="far fa-check-circle"></i>
                <p>Thanks for your registration!!!</p>
           </div>
        `;


    deletediv.remove();

    membermodal.appendChild(thankletter);

    const btnclosee = thankletter.querySelector('.btnclosee');

    btnclosee.addEventListener('click',()=> membermodal.classList.add('hide'));

    
})