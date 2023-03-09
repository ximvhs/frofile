function noti(){
    alert("Cảm ơn bạn!!")
 }
 
 
  // open modal
  //Tìm tất cả các class có tên để lắng nghe tiếng click
  const regBtns = document.querySelectorAll('.js_modal')
  const modal = document.querySelector('.js_modal-show')
  function showModal() { //hàm thêm open vào class được đặt tên là js_modal-show
      modal.classList.add('open')
      modal1.classList.remove('open')
  }
  for (const regBtn of regBtns) { //lấy nhiều nút cùng thực hiện một chức năng là show modal
      regBtn.addEventListener('click', showModal)
  }
  
  
  // nút close
  const closeBtns = document.querySelectorAll('.js-close')
  function hideBtn(){
      modal.classList.remove('open')
  }
 //  closeBtns.addEventListener('click', hideBtn)
  for (const closeBtn of closeBtns) {
    closeBtn.addEventListener('click', hideBtn)
 }
  
  // close khi click vào vùng ngoài modal
  const authForms = document.querySelectorAll('.js-auth-form')
  modal.addEventListener('click', hideBtn)
  for (const authForm of authForms ) { 
      authForm.addEventListener('click', function (event) {
          event.stopPropagation()
      })
  }
 
 