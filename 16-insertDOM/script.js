let caja1 = document.getElementById("caja1");

let fragment = document.createDocumentFragment();

let p = document.createElement("p");
p.innerHTML =`
<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, incidunt, quas et harum a doloribus laudantium illo totam corporis, laborum doloremque quod amet earum assumenda quo sed sequi tempora rerum!</span>
<span>Quam asperiores quasi esse numquam quidem necessitatibus amet id voluptates, veniam, harum soluta, minima excepturi quod corporis illum dicta adipisci porro fuga! Culpa vel, totam quae quos est fugit nesciunt.</span>
<span>Optio eos architecto assumenda iste possimus, modi tempore. Magnam quo suscipit eius et perferendis quos eaque est recusandae. Aliquam esse iusto mollitia ea delectus corporis quisquam commodi, odio iste voluptatem?</span>`;

fragment.append(p);
caja1.prepend(fragment);

