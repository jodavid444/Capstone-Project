const speakers = {
    one: {
        image: 'images/speaker_05.png',
        title: 'Joseph David',
        decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
        descriptioninfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
    },
    two: {
        image: 'images/speaker_05.png',
        title: 'Joseph David',
        decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
        descriptioninfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
    },
    three: {
        image: 'images/speaker_05.png',
        title: 'Joseph David',
        decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
        descriptioninfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
    },

    four: {
        image: 'images/speaker_05.png',
        title: 'Joseph David',
        decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
        descriptioninfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
    },

    five: {
        image: 'images/speaker_05.png',
        title: 'Joseph David',
        decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
        descriptioninfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
    },

    six: {
        image: 'images/speaker_05.png',
        title: 'Joseph David',
        decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
        descriptioninfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos? dipisicing elit. Quos?',
    }

}
    


const body = document.querySelector('#feature_section');

const main = document.createElement('div');

body.appendChild(main);
main.innerHTML = ` 
<div class="feature_title">
<h1>Feature Lorem</h1>
</div>
<div class="feature_hr_con">
<hr class="feature_hr">
</div>
<div class="feature_main_container">
<div class="feature_container ">
    <div class="feature_item">
        <img src="${speakers.one.image}" alt="">
    </div>
    <div class="feature_sub_item">
    <h2>${speakers.one.title}</h2>
    <h3>${speakers.one.decription}</h3>
    <div class="feature_sub_hr">
        <hr class="feature-hr">
    </div>
    <h4>${speakers.one.descriptioninfo}</h4>
</div>
</div>
<div class="feature_container ">
    <div class="feature_item">
        <img src="${speakers.two.image}" alt="">
    </div>
    <div class="feature_sub_item">
    <h2>${speakers.two.title}</h2>
    <h3>${speakers.two.decription}</h3>
    <div class="feature_sub_hr">
        <hr class="feature-hr">
    </div>
    <h4>${speakers.two.descriptioninfo}</h4>
</div>
</div>
<div class="feature_container ">
    <div class="feature_item">
        <img src="${speakers.three.image}" alt="">
    </div>
    <div class="feature_sub_item">
    <h2>${speakers.three.title}</h2>
    <h3>${speakers.three.decription}</h3>
    <div class="feature_sub_hr">
        <hr class="feature-hr">
    </div>
    <h4>${speakers.three.descriptioninfo}</h4>
</div>
</div>
<div class="feature_container ">
    <div class="feature_item">
        <img src="${speakers.two.image}" alt="">
    </div>
    <div class="feature_sub_item">
    <h2>${speakers.two.title}</h2>
    <h3>${speakers.two.decription}</h3>
    <div class="feature_sub_hr">
        <hr class="feature-hr">
    </div>
    <h4>${speakers.two.descriptioninfo}</h4>
</div>
</div>
<div class="feature_container ">
    <div class="feature_item">
        <img src="${speakers.two.image}" alt="">
    </div>
    <div class="feature_sub_item">
    <h2>${speakers.two.title}</h2>
    <h3>${speakers.two.decription}</h3>
    <div class="feature_sub_hr">
        <hr class="feature-hr">
    </div>
    <h4>${speakers.two.descriptioninfo}</h4>
</div>
</div>
<div class="feature_container ">
    <div class="feature_item">
        <img src="${speakers.two.image}" alt="">
    </div>
    <div class="feature_sub_item">
    <h2>${speakers.two.title}</h2>
    <h3>${speakers.two.decription}</h3>
    <div class="feature_sub_hr">
        <hr class="feature-hr">
    </div>
    <h4>${speakers.two.descriptioninfo}</h4>
</div>
</div>

</div>

`;

























