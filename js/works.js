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

// 加載 專案作品 模組
async function project_works_works() {
  const response = await fetch("./main/works.html");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();
  console.log(data);
  document.getElementById("works").innerHTML = data;
  project_works();
  works_menu();
}

project_works_works();

//   --------------------------------------------------------------------------

// 加載 彈跳內容 模組
async function project_sloan() {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();
  console.log(data);
  document.getElementById("works").innerHTML = data;
  marquee_myModal
}

project_sloan(); // Pass a value for 'i'

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

// 下拉選單

function menuButton() {
  const menu = document.getElementById("dropdownMenu");

  // Check current display status and toggle between 'block' and 'none'
  if (menu.style.display === "block") {
    menu.style.display = "none"; // Hide the menu
    menu.style.transition = "display 0s ease, height 0s ease";
  } else {
    menu.style.display = "block"; // Show the menu
    menu.style.transition = "display 2s ease, height2s ease";
  }
}

//   --------------------------------------------------------------------------

// 專案作品_摋選
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

//   --------------------------------------------------------------------------

// 作品_滾動菜單

function works_menu() {
  const slideInContent = document.getElementById("slideInContent");
  const triggerHeight = 50; // 設置觸發浮出效果的滾動高度
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    // 當滾動超過觸發高度時，內容浮出
    if (currentScrollY > triggerHeight) {
      // 判斷滾動方向，向下滾動顯示內容
      if (currentScrollY > lastScrollY) {
        slideInContent.classList.add("show");
        slideInContent.classList.remove("hide");
      }
      // 向上滾動隱藏內容
      else {
        slideInContent.classList.remove("show");
        slideInContent.classList.add("hide");
      }
    } else {
      // 滾回到觸發高度之上時隱藏內容
      slideInContent.classList.remove("show");
      slideInContent.classList.add("hide");
    }

    lastScrollY = currentScrollY;
  });
}

//   --------------------------------------------------------------------------

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

marquee_myModal();


