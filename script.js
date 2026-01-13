const plant = document.getElementById("plant");

let stage = 0;

plant.addEventListener("click", () => {
  stage++;

  plant.classList.remove("bud", "grow", "dead");

  if (stage === 1) {
    plant.classList.add("bud");
  } 
  else if (stage === 2) {
    plant.classList.add("grow");
  } 
  else if (stage === 3) {
    plant.classList.add("dead");
  } 
  else {
    stage = 1;
    plant.classList.add("bud");
  }
});
