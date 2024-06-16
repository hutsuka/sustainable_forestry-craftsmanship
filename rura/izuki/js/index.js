
// 慣性スクロール

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// 横スクロール

window.addEventListener("load", function() {
  gsap.registerPlugin(ScrollTrigger);

  const area  = document.querySelector(".js-area");
  const wrap  = document.querySelector(".js-wrap");
  const items = document.querySelectorAll(".js-item");
  const num   = items.length;

  gsap.set(wrap,  { width: `${num * 50}%` });
  gsap.set(items, { width: `${100 / num}%` });

  gsap.to(items, {
    xPercent: -100 * (num - 1),
    ease: "none",
    scrollTrigger: {
      trigger: area,
      start: "top top",
      end: "+=4000",
      pin: true,
      scrub: true,
    }
  });
});



// shop用アニメーション
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.shop__image-set img');
    const textBlocks = document.querySelectorAll('.shop__images-item');
    let currentSelected = document.querySelector('.shop__image-set');

    function updateSelection(newSelection) {
        if (currentSelected) {
            currentSelected.classList.remove('selected');
        }
        currentSelected = newSelection;
        currentSelected.classList.add('selected');
    }

    images.forEach((image, index) => {
        image.addEventListener('mouseover', () => {
            textBlocks.forEach(block => {
                block.classList.remove('active', 'show');
            });
            textBlocks[index].classList.add('active');
            setTimeout(() => {
                textBlocks[index].classList.add('show');
            }, 100);

            images.forEach((img) => {
                img.parentElement.classList.remove('hover');
            });
            image.parentElement.classList.add('hover');
            updateSelection(image.parentElement);
        });

        image.addEventListener('mouseout', () => {
            image.parentElement.classList.remove('hover');
        });
    });
});




// ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const navItems = document.querySelectorAll('.nav__item a');
  const menuText = hamburger.querySelector('span');

  menuText.textContent = 'menu';

  hamburger.addEventListener('click', function() {
      if (this.classList.contains('open')) {
          fadeText(menuText, 'menu');
          navItems.forEach((item, index) => {
              setTimeout(() => {
                  item.classList.remove('show');
              }, index * 100);
          });
      } else {
          fadeText(menuText, 'close');
          setTimeout(() => {
              navItems.forEach((item, index) => {
                  setTimeout(() => {
                      item.classList.add('show');
                  }, index * 100);
              });
          }, 200);
      }
      this.classList.toggle('open');
      nav.classList.toggle('open');
  });

  navItems.forEach(item => {
      item.addEventListener('click', function() {
          hamburger.classList.remove('open');
          nav.classList.remove('open');
          navItems.forEach((navItem, index) => {
              setTimeout(() => {
                  navItem.classList.remove('show');
              }, index * 100);
          });
          fadeText(menuText, 'menu');
      });
  });

  function fadeText(element, newText) {
      element.classList.add('fade-out');
      setTimeout(() => {
          element.textContent = newText;
          element.classList.remove('fade-out');
          element.classList.add('fade-in');
      }, 300);
      setTimeout(() => {
          element.classList.remove('fade-in');
      }, 1000);
  }
});

// hover
const stalker = document.getElementById('mouse-stalker');
let hovFlag = false;

document.addEventListener('mousemove', function(e) {
    stalker.style.transform = 'translate(' + (e.clientX - stalker.offsetWidth / 8) + 'px, ' + (e.clientY - stalker.offsetHeight / 6) + 'px)';
});

const linkElem = document.querySelectorAll('.hover-stalker-item');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function(e) {
        hovFlag = true;
        stalker.classList.add('is_active');
    });
    linkElem[i].addEventListener('mouseout', function(e) {
        hovFlag = false;
        stalker.classList.remove('is_active');
    });
}


// contact
var modal = document.getElementById("contactModal");


var btn = document.querySelector(".contact__title");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




//960px以下の場合にid="project"を追加
window.addEventListener('resize', function() {
  var projectDiv = document.querySelector('.responsive-fixed-area');
  if (window.innerWidth <= 960 && !projectDiv.id.includes("project")) {
      projectDiv.id = "project";
  } else if (window.innerWidth > 960 && projectDiv.id === "project") {
      projectDiv.removeAttribute("id");
  }
});

// 再読み込み時TOPに戻る
window.history.scrollRestoration = 'manual';




