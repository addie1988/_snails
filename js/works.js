// 滾差效果
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  // 根據滾動位置調整背景圖片位置
  let parallaxSections = document.querySelectorAll(".parallax-section");
  parallaxSections.forEach((section) => {
    section.style.backgroundPositionY = scrollPosition * 0.5 + "px"; // 調整滾差速度
  });
});

//   --------------------------------------------------------------------------

// 加載 header 模組
async function header() {
  const response = await fetch("./main/header.html");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();
  console.log(data);
  document.getElementById("header").innerHTML = data;
  marquee_myModal();
}

header();

//   --------------------------------------------------------------------------

// 加載 footer 模組
async function footer() {
  const response = await fetch("./main/footer.html");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();
  console.log(data);
  document.getElementById("footer").innerHTML = data;
}

footer();

//   --------------------------------------------------------------------------

// 使用 JavaScript 加載 eye_svg 模組
async function eye_svg() {
  const response = await fetch("svg/eye.html");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();
  console.log(data);
  document.getElementById("eye").innerHTML = data;
}

eye_svg();

//   --------------------------------------------------------------------------

// 漢堡選單
function toggleMenu() {
  const menu = document.getElementById("menu_img_text");
  menu.style.display = "block";
  document.body.style.overflow = "hidden"; // 禁止滾動
}

function closure() {
  const closure = document.getElementById("menu_img_text");
  closure.style.display = "none";
  document.body.style.overflow = "auto"; // 允許滾動
}

//   --------------------------------------------------------------------------

// 專案作品_選單
function project_works() {
  // 取得所有篩選按鈕和作品項目
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // 為每個按鈕添加點擊事件
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter"); // 取得篩選類別

      // 根據篩選條件顯示或隱藏作品
      galleryItems.forEach((item) => {
        if (filter === "all") {
          item.classList.remove("hidden"); // 顯示所有作品
        } else {
          if (item.getAttribute("data-category") === filter) {
            item.classList.remove("hidden"); // 顯示匹配類別的作品
          } else {
            item.classList.add("hidden"); // 隱藏不匹配的作品
          }
        }
      });
    });
  });
}

project_works();

//   --------------------------------------------------------------------------

// 作品_滾動菜單
function works_menu() {
  const slideInMenu = document.querySelector(".works_menu");
const triggerHeight = 50; // 設定觸發顯示選單的滾動高度
let lastScrollY = window.scrollY;
let menuVisible = false;

window.addEventListener("scroll", function () {
  const currentScrollY = window.scrollY;

  if (currentScrollY > triggerHeight && window.innerWidth > 0) {
    if (currentScrollY > lastScrollY && !menuVisible) {
      // 向下滾動且超過觸發高度時，顯示選單
      slideInMenu.classList.add("show");
      slideInMenu.style.transform = "translateX(0)"; // 選單滑入視窗
      menuVisible = true;
    } else if (currentScrollY < lastScrollY && menuVisible) {
      // 向上滾動時隱藏選單
      slideInMenu.style.transform = "translateX(100%)"; // 選單滑出視窗
      menuVisible = false;
    }
  } else {
    // 滾回到觸發高度以上時隱藏選單
    slideInMenu.style.transform = "translateX(100%)";
    menuVisible = false;
  }

  lastScrollY = currentScrollY;
});
}

works_menu();

//   --------------------------------------------------------------------------

//  跑馬燈效果
function marquee_myModal() {
  const marquees = document.querySelectorAll("[name='marquee_myModal']");
  marquees.forEach((marquee) => {
    let speed = 1; // Control scrolling speed
    let marqueeWidth = marquee.offsetWidth;
    let position = 0;

    function scrollMarquee() {
      position -= speed;

      // Reset to the right side if it scrolls out of view
      if (position <= -marqueeWidth) {
        position = position + marqueeWidth;
      }
      // Update the position of the marquee text
      marquee.style.transform = `translateX(${position}px)`;

      // Use requestAnimationFrame for smooth scrolling
      requestAnimationFrame(scrollMarquee);
    }

    // Start the marquee effect
    scrollMarquee();
  });
}

//   --------------------------------------------------------------------------

// 彈跳視窗內容
function menuItemWithMarquee() {
  // 取得選單項目和彈窗相關元素
  const menuItems = document.querySelectorAll(".menu-item");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const closeBtn = document.querySelector(".close-btn");

  // 當點擊選單項目時顯示彈窗，並加載對應的 HTML 文件
  menuItems.forEach((item) => {
    item.addEventListener("click", async () => {
      const filePath = item.getAttribute("data-content"); // 獲取 data-content 中的 HTML 路徑

      try {
        const response = await fetch(filePath); // 發送請求加載 HTML 文件
        if (!response.ok)
          throw new Error(`Error loading ${filePath}: ${response.status}`);

        const content = await response.text(); // 獲取 HTML 文件的內容
        modalContent.innerHTML = content; // 將 HTML 插入到彈窗內容區域
        modal.classList.add("show"); // 顯示彈窗

        // 初始化滾動效果
        initMarquee();
      } catch (error) {
        console.error(error);
        modalContent.innerHTML = "<p>內容加載失敗，請稍後再試。</p>";
      }
    });
  });

  // 當點擊關閉按鈕時關閉彈窗
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}

function initMarquee() {
  const marquees = document.querySelectorAll("[name='marquee_myModal']");
  marquees.forEach((marquee) => {
    let speed = 1; // 控制滾動速度
    let marqueeWidth = marquee.offsetWidth;
    let position = 0;

    function scrollMarquee() {
      position -= speed;

      // 當滾動出視圖時重置到右側
      if (position <= -marqueeWidth) {
        position += marqueeWidth;
      }

      // 更新滾動文本的位置
      marquee.style.transform = `translateX(${position}px)`;

      // 使用 requestAnimationFrame 確保平滑滾動
      requestAnimationFrame(scrollMarquee);
    }

    // 啟動滾動效果
    scrollMarquee();
  });
}

// 啟動主功能
menuItemWithMarquee();
