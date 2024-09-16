export function displayMenuItems( menuItems ){
    const desktopMenu = document.querySelector('#desktopMenu');
    const mobMenu = document.querySelector('#mobMenu');
    let menuTxt = '';
    menuItems.forEach(item => {
        let subMenuTxt = '';
        item.subMenu.forEach(subItem => {
            subMenuTxt += `<a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">${subItem.header}</a>`
        });
        menuTxt += `
        <div class="relative inline-block text-left menu-item">
  <div>
    <button type="button" onclick="handleMenuOpen('menuItem_${item.id}')" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      ${item.name}
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  <div id="menuItem_${item.id}" class="absolute hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
      ${subMenuTxt}
    </div>
  </div>
</div>

        `
    })
    desktopMenu.innerHTML = menuTxt;
}
export function displayMobMenuItems( menuItems ){
}
export function displayStartUps( startUps ){
}
export function displayTeamMembers(members) {
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
export function displayProjects(projects) {
    projects.forEach(project => {
    });
}
export function displayComments(comments) {
    comments.forEach(comment => {
    });
}
export function handleMenu(){
    const mobMenu = document.querySelector('#mobMenu');
    mobMenu.classList.toggle('hidden');
    mobMenu.classList.toggle('flex');
}

