function getVal() {
  // Add div.container using javascript to HTML body
  const body = document.body
  const div = document.createElement('div');
  div.classList.add('container');
  body.append(div);
  const container = document.querySelector('.container');

  let val = document.querySelector('input').value;
  // Add grid items to container div
  val = (val = (typeof val === 'undefined') ? 256 : val**2);
  let htmlElements = "";
  for (let i = 0; i < val; i++) {
    htmlElements += '<div class="grid-item"></div>';
  }
  document.querySelector('.container').innerHTML = htmlElements;

  // select multiple element and run foreach method to be able to modify all the griditems
  document.querySelectorAll('.grid-item').forEach(gridItem => {
    gridItem.addEventListener('mousemove', () => {
      gridItem.style.backgroundColor = "red";
    })
  })

}
