// JavaScript 滾差效果邏輯
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  // 根據滾動位置調整背景圖片位置
  let parallaxSections = document.querySelectorAll(".parallax-section");
  parallaxSections.forEach((section) => {
    section.style.backgroundPositionY = scrollPosition * 0.5 + "px"; // 調整滾差速度
  });
});

//   --------------------------------------------------------------------------

// 使用 JavaScript 加載 header 模組
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

// 使用 JavaScript 加載 about 模組
async function about() {
  const response = await fetch("./main/about.html");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();
  console.log(data);
  document.getElementById("about").innerHTML = data;
}

about();

//   --------------------------------------------------------------------------

// 使用 JavaScript 加載 service 模組
async function service() {
  const response = await fetch("./main/service.html");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();
  console.log(data);
  document.getElementById("service").innerHTML = data;
  click_service();
}

service();

//   --------------------------------------------------------------------------

// 使用 JavaScript 加載 work 模組
async function work() {
  const response = await fetch("./main/work.html");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();
  console.log(data);
  document.getElementById("work").innerHTML = data;
}

work();

//   --------------------------------------------------------------------------

// 使用 JavaScript 加載 contact 模組
async function contact() {
  const response = await fetch("./main/contact.html");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.text();
  console.log(data);
  document.getElementById("contact").innerHTML = data;
  up();
}

contact();

//   --------------------------------------------------------------------------

// 使用 JavaScript 加載 footer 模組
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

// 跑馬燈效果
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

// service
function click_service() {
  // 選取所有的選單項目和內容
  const menuItems = document.querySelectorAll(".menu-item");
  const menuContents = document.querySelectorAll(".menu-content");

  // 為每個選單項目添加點擊事件
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const targetContent = document.querySelector(
        this.getAttribute("data-target")
      );

      // 如果當前內容顯示，就隱藏它；否則顯示
      if (targetContent.style.display === "block") {
        targetContent.style.display = "none";
      } else {
        // 首先隱藏所有內容
        menuContents.forEach((content) => {
          content.style.display = "none";
        });
        // 然後顯示當前點擊的內容
        targetContent.style.display = "block";
      }
    });
  });
}

//   --------------------------------------------------------------------------

function up() {
  // 獲取所有錨點連結
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // 點擊按鈕後平滑滾動到頂部
  scrollToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("click");
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滾動
    });
  });
}

//   --------------------------------------------------------------------------

// 漢堡選單＿禁止滾動
function menu_0() {
  const hamburgerBtn = document.getElementById("menu_img");
  const menu = document.getElementById("menu_img_text");
  const closeMenu = document.getElementById("menu_img_text");

  // 開啟選單並禁止滾動
  hamburgerBtn.addEventListener("click", () => {
    menu.style.display = "block";
    document.body.style.overflow = "hidden"; // 禁止滾動
  });

  // 關閉選單並恢復滾動
  closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    document.body.style.overflow = "auto"; // 允許滾動
  });
}

//   --------------------------------------------------------------------------
