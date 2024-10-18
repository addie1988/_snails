// 開啟彈跳視窗
function openModal(id) {
  const modals = document.querySelectorAll(".modal");

  // 如果彈跳視窗不存在，不執行任何動作
  if (!modals.length) return;

  // 先隱藏所有彈跳視窗
  modals.forEach((modal) => {
    modal.classList.remove("modal-active"); // 隱藏 modal
  });

  // 顯示指定的彈跳視窗
  const targetModal = document.getElementById(`modal-${id}`);
  if (targetModal) {
    targetModal.classList.add("modal-active"); // 顯示 modal
  }
}

// 關閉彈跳視窗
function closeModal() {
  const modals = document.querySelectorAll(".modal");

  // 如果彈跳視窗不存在，不執行任何動作
  if (!modals.length) return;

  modals.forEach((modal) => {
    modal.classList.remove("modal-active"); // 隱藏 modal
  });
}