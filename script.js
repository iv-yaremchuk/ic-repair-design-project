const projectsAdmiral = {
  images: [
    './img/projects/projects-admiral-first.jpg',
    './img/projects/projects-admiral-second.jpg',
    './img/projects/projects-admiral-third.jpg',
  ],
  city: 'Rostov-on-Don <br> LCD admiral',
  area: '81 m2',
  time: '3.5 months',
};

const projectsThieves = {
  images: [
    './img/projects/projects-thieves-first.jpg',
    './img/projects/projects-thieves-second.jpg',
    './img/projects/projects-thieves-third.jpg',
  ],
  city: 'Sochi <br> Thieves',
  area: '105 m2',
  time: '4 months',
};

const projectsPatriotic = {
  images: [
    './img/projects/projects-patriotic-first.jpg',
    './img/projects/projects-patriotic-second.jpg',
    './img/projects/projects-patriotic-third.jpg',
  ],
  city: 'Rostov-on-Don <br> Patriotic',
  area: '93 m2',
  time: '3 months',
};

const sliderImages = document.querySelector('.projects-content-slider');
const sliderNavigation = document.querySelector('.projects-slider-nav');
const sliderPaginationBullets = document.querySelector(
  '.projects-slider-pagination__wrap'
);
const sliderOptions = {
  pagination: true,
  autoplay: false,
  autoplayInterval: 5000,
};

document.addEventListener('DOMContentLoaded', () => {
  initProjectsSection();
  initSlider(projectsAdmiral.images, sliderOptions);
});

function initSlider(content, options) {
  if (!content || !content.length) return;

  options = options || {
    titles: false,
    pagination: true,
    autoplay: false,
  };

  initSliderImages();
  initSliderBtns();

  if (options.pagination) {
    initSliderPagination();
  }

  if (options.autoplay) {
    initAutoplay();
  }

  function initSliderImages() {
    content.forEach((image, index) => {
      let img = `<img class="projects-content-image img-${index} ${
        index === 0 ? 'is-active' : ''
      }" src="${content[index]}" data-index="${index}"></img>`;
      sliderImages.innerHTML += img;
    });
  }

  function initSliderBtns() {
    let sliderBtnPrev = `<button class="btn projects-slider-nav__btn prev">
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="14" viewBox="0 0 42 14" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63807 13.2761L2.29917e-05 6.63808L6.63807 3.80641e-05L7.58563 0.947606L1.89516 6.63808L7.58563 12.3286L6.63807 13.2761Z" fill="white"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.947579 5.96828L41.4556 5.96829L41.4556 7.30835L0.947578 7.30834L0.947579 5.96828Z" fill="white"></path>
    </svg>
  </button>`;
    let sliderBtnNext = `<button class="btn projects-slider-nav__btn next">
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="14" viewBox="0 0 42 14" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M35.0451 0L41.6831 6.63804L35.0451 13.2761L34.0975 12.3285L39.788 6.63804L34.0975 0.947567L35.0451 0Z" fill="white"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M40.7356 7.30784L0.227569 7.30784L0.22757 5.96777L40.7356 5.96778L40.7356 7.30784Z" fill="white"></path>
    </svg>
  </button>`;

    sliderNavigation.insertAdjacentHTML('afterbegin', sliderBtnPrev);
    sliderNavigation.insertAdjacentHTML('beforeend', sliderBtnNext);

    sliderNavigation
      .querySelectorAll('.projects-slider-nav__btn')
      .forEach((btn) => {
        btn.addEventListener('click', function () {
          let currentImg =
            +sliderImages.querySelector('.is-active').dataset.index;
          let nextImg;
          if (btn.classList.contains('prev')) {
            nextImg = currentImg === 0 ? content.length - 1 : currentImg - 1;
          } else {
            nextImg = currentImg === content.length - 1 ? 0 : currentImg + 1;
          }
          moveSliderImages(nextImg);
        });
      });
  }

  function initSliderPagination() {
    content.forEach((image, index) => {
      let bullet = `<button class="btn slider-pagination-bullet img-${index} ${
        index === 0 ? 'is-active' : ''
      }" data-index="${index}"></button>`;
      sliderPaginationBullets.innerHTML += bullet;
    });
    sliderPaginationBullets
      .querySelectorAll('.slider-pagination-bullet')
      .forEach((blt) => {
        blt.addEventListener('click', function () {
          moveSliderImages(this.dataset.index);
        });
      });
  }

  function moveSliderImages(num) {
    sliderImages.querySelector('.is-active').classList.remove('is-active');
    sliderImages.querySelector('.img-' + num).classList.add('is-active');
    if (options.pagination) {
      sliderPaginationBullets
        .querySelector('.is-active')
        .classList.remove('is-active');
      sliderPaginationBullets
        .querySelector('.img-' + num)
        .classList.add('is-active');
    }
  }

  function initAutoplay() {
    setInterval(() => {
      let currentImg = +sliderImages.querySelector('.is-active').dataset.index;
      let nextImg = currentImg === content.length - 1 ? 0 : currentImg + 1;

      moveSliderImages(nextImg);
    }, options.autoplayInterval);
  }
}

function initProjectsSection() {
  let projectParamDescr = document.querySelectorAll('.projects-params__descr');
  let projectParamsDescrCity = document.querySelector(
    '.projects-params__descr.city'
  );
  let projectParamsDescrArea = document.querySelector(
    '.projects-params__descr.area'
  );
  let projectParamsDescrTime = document.querySelector(
    '.projects-params__descr.time'
  );

  function resetProjectsSection() {
    sliderImages.innerHTML = '';
    sliderPaginationBullets.innerHTML = '';
    sliderNavigation.firstElementChild.remove();
    sliderNavigation.lastElementChild.remove();
    sliderNavigation.style.opacity = 0;
    projectParamDescr.forEach((descr) => {
      descr.style.opacity = 0;
    });
  }

  let projectChapterBtnAdmiral = document.querySelector(
    '.projects-chapter__btn.admiral'
  );
  let projectChapterBtnThieves = document.querySelector(
    '.projects-chapter__btn.thieves'
  );
  let projectChapterBtnPatriotic = document.querySelector(
    '.projects-chapter__btn.patriotic'
  );

  function activeAdmiralBtn() {
    setTimeout(() => {
      projectParamDescr.forEach((descr) => {
        descr.style.opacity = 1;
      });
      sliderNavigation.style.opacity = 1;
      projectParamsDescrCity.innerHTML = projectsAdmiral.city;
      projectParamsDescrArea.textContent = projectsAdmiral.area;
      projectParamsDescrTime.textContent = projectsAdmiral.time;

      initSlider(projectsAdmiral.images, sliderOptions);
    }, 150);

    projectChapterBtnAdmiral.classList.add('is-active');
    projectChapterBtnAdmiral.setAttribute('tabindex', '-1');
    projectChapterBtnThieves.classList.remove('is-active');
    projectChapterBtnThieves.removeAttribute('tabindex', '-1');
    projectChapterBtnPatriotic.classList.remove('is-active');
    projectChapterBtnPatriotic.removeAttribute('tabindex', '-1');

    projectChapterBtnAdmiral.removeEventListener('click', activeAdmiralBtn);
    projectChapterBtnPatriotic.addEventListener('click', activePatrioticBtn);
    projectChapterBtnThieves.addEventListener('click', activeThievesBtn);

    resetProjectsSection();
  }

  function activeThievesBtn() {
    setTimeout(() => {
      projectParamDescr.forEach((descr) => {
        descr.style.opacity = 1;
      });
      sliderNavigation.style.opacity = 1;
      projectParamsDescrCity.innerHTML = projectsThieves.city;
      projectParamsDescrArea.textContent = projectsThieves.area;
      projectParamsDescrTime.textContent = projectsThieves.time;

      initSlider(projectsThieves.images, sliderOptions);
    }, 150);

    projectChapterBtnThieves.classList.add('is-active');
    projectChapterBtnThieves.setAttribute('tabindex', '-1');
    projectChapterBtnAdmiral.classList.remove('is-active');
    projectChapterBtnAdmiral.removeAttribute('tabindex', '-1');
    projectChapterBtnPatriotic.classList.remove('is-active');
    projectChapterBtnPatriotic.removeAttribute('tabindex', '-1');

    projectChapterBtnThieves.removeEventListener('click', activeThievesBtn);
    projectChapterBtnAdmiral.addEventListener('click', activeAdmiralBtn);
    projectChapterBtnPatriotic.addEventListener('click', activePatrioticBtn);

    resetProjectsSection();
  }

  function activePatrioticBtn() {
    setTimeout(() => {
      projectParamDescr.forEach((descr) => {
        descr.style.opacity = 1;
      });
      sliderNavigation.style.opacity = 1;
      projectParamsDescrCity.innerHTML = projectsPatriotic.city;
      projectParamsDescrArea.textContent = projectsPatriotic.area;
      projectParamsDescrTime.textContent = projectsPatriotic.time;
      initSlider(projectsPatriotic.images, sliderOptions);
    }, 150);

    projectChapterBtnPatriotic.classList.add('is-active');
    projectChapterBtnPatriotic.setAttribute('tabindex', '-1');
    projectChapterBtnThieves.classList.remove('is-active');
    projectChapterBtnThieves.removeAttribute('tabindex', '-1');
    projectChapterBtnAdmiral.classList.remove('is-active');
    projectChapterBtnAdmiral.removeAttribute('tabindex', '-1');

    projectChapterBtnPatriotic.removeEventListener('click', activePatrioticBtn);
    projectChapterBtnAdmiral.addEventListener('click', activeAdmiralBtn);
    projectChapterBtnThieves.addEventListener('click', activeThievesBtn);

    resetProjectsSection();
  }

  projectChapterBtnAdmiral.addEventListener('click', activeAdmiralBtn);
  projectChapterBtnThieves.addEventListener('click', activeThievesBtn);
  projectChapterBtnPatriotic.addEventListener('click', activePatrioticBtn);
}
