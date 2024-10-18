// 加載彈跳視窗內容
async function loadHTML(file, elementId) {
  try {
    const response = await fetch(file);
    if (!response.ok)
      throw new Error(`Error loading ${file}: ${response.status}`);
    const content = await response.text();
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = content;
    } else {
      console.error(`Element with ID ${elementId} not found.`);
    }
  } catch (error) {
    console.error(error);
  }
}

const works = 90; // Total number of works

for (let i = 1; i <= works; i++) {
  const file = `svg/works${i}.html`;
  const elementId = `works${i}`;
  loadHTML(file, elementId);
}


