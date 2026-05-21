const toggle = document.getElementById("menu-toggle");

const nav = document.getElementById("nav");

toggle.addEventListener("click", function(){

  nav.classList.toggle("active");

});



function addCourse(){

  const courseContainer = document.getElementById("courses");

  const div = document.createElement("div");

  div.classList.add("course-box");

  div.innerHTML = `

    <input type="text" placeholder="Course Title">

    <input type="number" placeholder="Unit" class="unit">

    <select class="grade">

      <option value="5">A</option>
      <option value="4">B</option>
      <option value="3">C</option>
      <option value="2">D</option>
      <option value="1">E</option>
      <option value="0">F</option>

    </select>

  `;

  courseContainer.appendChild(div);

}


function calculateGPA(){

  const units = document.querySelectorAll(".unit");

  const grades = document.querySelectorAll(".grade");

  let totalUnits = 0;

  let totalPoints = 0;

  for(let i = 0; i < units.length; i++){

    const unit = Number(units[i].value);

    const grade = Number(grades[i].value);

    totalUnits += unit;

    totalPoints += unit * grade;

  }

  const gpa = totalPoints / totalUnits;

  document.getElementById("gpa").innerText = gpa.toFixed(2);

}



const topBtn = document.getElementById("backToTop");

window.onscroll = function(){

  if(document.documentElement.scrollTop > 200){

    topBtn.style.display = "block";

  }else{

    topBtn.style.display = "none";

  }

};

topBtn.addEventListener("click", function(){

  window.scrollTo({

    top:0,
    behavior:"smooth"

  });

});









