fetch('./data/menu.json')
  .then(response => response.json())
  .then(data => {
    displayMenuItems(data);
});
let dropDowns = `<div class="flex items-center">
                    <div class="text-left menu-item">
                        <div>
                            <button type="button" onclick="handleMenuOpen('dropDownValyutaMob')" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                ₼
                                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div id="dropDownValyutaMob" class="absolute hidden z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">₼</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">$</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button type="button" onclick="handleMenuOpen('dropDownDilMob')" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <img alt="az" loading="lazy" width="24" height="16" decoding="async" data-nimg="1" class="w-6 h-4 object-cover" src="https://sayt.az/images/az.png" style="color: transparent;">
                                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div id="dropDownDilMob" class="absolute hidden z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">₼</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">$</a>
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
                  <div id="${menuId}_${item.id}" class="absolute hidden z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <div class="py-1" role="none">
                          ${subMenuTxt}
                      </div>
                  </div>
              </div>
          `;
      });
      
      return Txt; // Geri döndür
}






