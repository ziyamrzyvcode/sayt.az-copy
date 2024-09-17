fetch('./data/menu.json')
  .then(response => response.json())
  .then(data => {
    displayMenuItems(data);
});
fetch('./data/startup.json')
    .then(response => response.json())
    .then(data => {
        displayStartUps(data);
    });
fetch('./data/members.json')
    .then(response => response.json())
    .then(data => {
        displayTeamMembers(data.teamMembers);
    });
fetch('./data/projects.json')
    .then(response => response.json())
    .then(data => {
        displayProjects(data.projects);
    });
fetch('./data/comments.json')
        .then(response => response.json())
        .then(data => {
            displayComments(data.comments);
        });
let dropDowns = `<div class="flex items-center">
                    <div class="text-left menu-item">
                        <div>
                            <button type="button" onclick="handleMenuOpen('dropDownValyutaMob')" class="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                ₼
                                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div id="dropDownValyutaMob" class="absolute hidden z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none drpItem" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">₼</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">$</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button type="button" onclick="handleMenuOpen('dropDownDilMob')" class="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <img alt="az" loading="lazy" width="24" height="16" decoding="async" data-nimg="1" class="w-6 h-4 object-cover" src="https://sayt.az/images/az.png" style="color: transparent;">
                                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div id="dropDownDilMob" class="absolute hidden z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none drpItem" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                                <div class="my-1"><img alt="az" loading="lazy" width="24" height="16" decoding="async" data-nimg="1" class="w-6 h-4 object-cover" src="https://sayt.az/images/az.png" style="color: transparent;"></div>
                                <div class="my-1"><img alt="az" loading="lazy" width="24" height="16" decoding="async" data-nimg="1" class="w-6 h-4 object-cover" src="https://sayt.az/images/usa.png" style="color: transparent;"></div>   
                            </div>
                        </div>
                    </div>
                </div>
                ` 
let menuButtons = `<div class="items-center flex-shrink-0 lg:flex">
                    <button class="self-center px-8 py-3 rounded">Sign in</button>
                    <button class="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
                </div>`
function displayMenuItems(menuItems) {
      const desktopMenu = document.querySelector('#desktopMenu');
      const mobMenu = document.querySelector('#mobMenu');
  
      let desktopMenuHtml = '';
      let mobMenuHtml = '';
  
      desktopMenuHtml = handleDisplayMenuItems(menuItems, 'menuItem');
      mobMenuHtml = `<div class="w-[100%] h-[25px] relative text-black"><i class="fa-solid fa-x absolute right-0 " onclick="handleMenu()"></i></div>` + handleDisplayMenuItems(menuItems, 'mobMenuItem') + dropDowns + menuButtons;
  
      desktopMenu.innerHTML = desktopMenuHtml;
      mobMenu.innerHTML = mobMenuHtml;
}
function handleDisplayMenuItems(menuItems, menuId) {
      let Txt = ''; // Tanımla ve başlat
      menuItems.forEach(item => {
          let subMenuTxt = '';
          item.subMenu.forEach(subItem => {
              subMenuTxt += `<a href="#" class="block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">${subItem.header}</a>`;
          });
          Txt += `
              <div class="relative text-left menu-item text-mobMenuTxt">
                  <div>
                      <button type="button" onclick="handleMenuOpen('${menuId}_${item.id}')" class="inline-flex w-full  gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                          ${item.name}
                          <svg class="-mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                          </svg>
                      </button>
                  </div>
                  <div id="${menuId}_${item.id}" class="absolute hidden z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none drpItem" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <div class="py-1" role="none">
                          ${subMenuTxt}
                      </div>
                  </div>
              </div>
          `;
      });
      
      return Txt; // Geri döndür
}
function countDown(){
    const targetDate = new Date('2024-09-29T23:59:59').getTime();
    const now = new Date().getTime();
    const timeDifference = targetDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const countDownSec = document.querySelector('#countDownSec');
    let countTxt = '';

    countTxt = `
        <div class="flex items-center gap-x-3 ">
            <div class="flex flex-col items-center gap-y-1">
                <div class="text-3xl bg-card-border rounded-xl font-bold w-[70px] h-[70px] flex justify-center items-center text-white">${days}</div>
                <div class="text-xs">Days</div>
            </div>
            <span class="inline-block -mt-5">:</span>
            <div class="flex flex-col items-center gap-y-1">
                <div class="text-3xl bg-card-border rounded-xl font-bold w-[70px] h-[70px] flex justify-center items-center text-white">${hours}</div>
                <div class="text-xs">Hours</div>
            </div>
            <span class="inline-block -mt-5">:</span>
            <div class="flex flex-col items-center gap-y-1">
                <div class="text-3xl bg-card-border rounded-xl font-bold w-[70px] h-[70px] flex justify-center items-center text-white">${minutes}</div>
                <div class="text-xs">Minutes</div>
            </div>
            <span class="inline-block -mt-5">:</span>
            <div class="flex flex-col items-center gap-y-1">
                <div class="text-3xl bg-card-border rounded-xl font-bold w-[70px] h-[70px] flex justify-center items-center text-white">${seconds}</div>
                <div class="text-xs">Seconds</div>
            </div>
        </div>
    `;
    if (timeDifference < 0) {
        clearInterval(countdownInterval); // Sayaçı durdur
        document.getElementById('countdown').innerHTML = "Geri Sayım Tamamlandı!";
    }
    
    countDownSec.innerHTML = countTxt;
}
const countdownInterval = setInterval(countDown, 1000)
countDown()
function displayStartUps(startUps) {
    const startUp = document.querySelector('#startUps');
    let startUpTxt = '';
    
    // StartUps dizisini karıştır ve ilk 3'ünü al
    const randomStartUps = startUps
        .sort(() => Math.random() - 0.5) // Rastgele karıştır
        .slice(0, 3); // İlk 3 öğeyi al

    randomStartUps.forEach(startUp => {
        startUpTxt += `
            <div class="md:w-[30%]">
                <img src="${startUp.image}" alt="${startUp.name}" class="object-cover rounded-lg h-[200px]">
                <div class="mt-3">
                    <h3 class="text-lg font-semibold">${startUp.name}</h3>
                    <p class="text-sm text-gray-500">${startUp.description}</p>
                </div>
            </div>`;
    });
    
    startUp.innerHTML = startUpTxt;
}
function displayTeamMembers(members) {
    const ourTeam = document.querySelector('#ourTeam');
    let teamText = '';
    members.forEach(member => {
      teamText += `<div class="p-[15px] m-[10px] relative border-2 border-card-border rounded-[20px] max-w-fit">
                    <div><img src="${member.image}" class="rounded-[14px] object-cover w-[196px] h-[230px]" /> </div>
                    <div class="text-center w-[196px] rounded-[14px] m-auto absolute bottom-[10px] bg-white">
                      <h3 class="text-xl font-bold text-card-header">${member.name}</h3>
                      <p class="text-sm font-bold text-card-footer">${member.position}</p>
                    </div>
                    </div>`
    });
    ourTeam.innerHTML = teamText;
}
function displayProjects(projects) {
    const project = document.querySelector('#projects');
    let projectText = '';
    projects.forEach(project => {
        projectText += `<div class="w-[45%]">
                          <img src="${project.image}" alt="${project.name}" class="object-cover rounded-lg">
                          <div class="mt-3">
                              <h3 class="text-lg font-semibold">${project.name}</h3>
                          </div>
                      </div>`;
    });
    project.innerHTML = projectText;
}

function displayComments(comments) {
    const comment = document.querySelector('#slideItems');
    let commentText = '';
    comments.forEach(comment => {
        commentText += ` <div class="swiper-slide !flex flex-col !justify-center !items-center px-[50px] text-center">
                            <h5>${comment.name}</h5>
                            <p>${comment.position}</p>
                            <p>${comment.comment}</p>
                        </div>    
                        `;
    });
    comment.innerHTML = commentText + `...`;
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}









