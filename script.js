const speakers = {
    one: {
        image: 'images/Crosby.0368d0d0.png',
        title: 'Niall Crosby',
        decription: 'CEO / Founder',
        descriptioninfo: 'Providing a library that supports multiple frameworks is a huge challenge. Having spent years working on this problem, my team an I came up with a way for our grid component to support all frameworks,',
    },
    two: {
        image: 'images/Maran.e0be23bd.png',
        title: 'Nivetha Maran',
        decription: 'Software Engineer Pro',
        descriptioninfo: 'In this talk, we will learn all about the react hooks. Starting from what are the main advantages of react hooks, different type of hooks, and how we can replace redux with react hooks in most of the applications with live examples.',
    },
    three: {
        image: 'images/Hawkins.d3e858f0.png',
        title: 'Tyler Hawkins',
        decription: 'Senior Software Engineer',
        descriptioninfo: 'Test-driven development, or TDD, is a programming paradigm in which you write your tests first and your source code second. TDD is perfect when you’re writing code that has clear inputs and outputs, like pure functions',
    },

    four: {
        image: 'images/Derks.99bf843a.png',
        title: 'Roy Derks',
        decription: 'Developer Experience',
        descriptioninfo: 'Type systems like TypeScript are important when developing JavaScript applications. They make sure that your props are passed in the correct form and shape throughout your application. Together with GraphQLs query ,',
    },

    five: {
        image: 'images/Rakowski.317b77c2.png',
        title: 'Filip Rakowski',
        decription: 'Co-founder @ CTO',
        descriptioninfo: ' Co-founder & CTO of Vue Storefront, biggest Open Source eCommerce frontend project, co-organizer of Wrocław Vue.js.Learn PRPL Pattern and how to use it with React 4,  and dealing with common performance bottlenecks.',
    },
    six: {
        image: 'images/Kehl.6d83b400.png',
        title: 'Griffin Kehl',
        decription: 'Developer Advocate',
        descriptioninfo: 'React has made development intuitive for developers of all skill levels with UI kits. This way, different products can develop a plug and play solution that abstracts away the complicated parts of their SDKs, to improve developers.',
    }

}
    


const body = document.querySelector('#feature_section');

const main = document.createElement('div');

body.appendChild(main);
main.innerHTML = ` 
<div class="feature_title">
<h1>Feature Speakers</h1>
</div>
<div class="feature_hr_con">
<hr class="feature_hr">
</div>
<div class="feature_main_container">
<div class="feature_sub">
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
</div>
<div class="feature_sub">
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
        <img src="${speakers.five.image}" alt="">
    </div>
    <div class="feature_sub_item">
    <h2>${speakers.five.title}</h2>
    <h3>${speakers.five.decription}</h3>
    <div class="feature_sub_hr">
        <hr class="feature-hr">
    </div>
    <h4>${speakers.five.descriptioninfo}</h4>
</div>
</div>
</div>
<div class="feature_sub">
<div class="feature_container">
    <div class="feature_item">
        <img src="${speakers.four.image}" alt="">
    </div>
    <div class="feature_sub_item">
    <h2>${speakers.four.title}</h2>
    <h3>${speakers.four.decription}</h3>
    <div class="feature_sub_hr">
        <hr class="feature-hr">
    </div>
    <h4>${speakers.four.descriptioninfo}</h4>
</div>
</div>
<div class="feature_container ">
    <div class="feature_item">
        <img src="${speakers.six.image}" alt="">
    </div>
    <div class="feature_sub_item">
    <h2>${speakers.six.title}</h2>
    <h3>${speakers.six.decription}</h3>
    <div class="feature_sub_hr">
        <hr class="feature-hr">
    </div>
    <h4>${speakers.six.descriptioninfo}</h4>
</div>
</div>
 </div>

</div>

</div>

`;

























