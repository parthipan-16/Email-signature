function changeName() {
    document.getElementById("displayName").textContent =
      document.getElementById("name-input").value;
  }
  
  function changeDesignation() {
    document.getElementById("displayDesignation").textContent =
      document.getElementById("job-input").value;
  }
  
  function changeMobile() {
    document.getElementById("displayMobile").textContent =
      document.getElementById("mobile-input").value;
  }
  
  function changeEmail() {
    document.getElementById("displayEmail").textContent =
      document.getElementById("email-input").value;
  }
  
  function updateProfileImage(event) {
    const file = event.target.files[0]; // Get the selected file
  
    if (file) {
      const reader = new FileReader(); // Create a FileReader object
  
      // Define what happens when the file is read
      reader.onload = function (e) {
        const profileImage = document.getElementById("profileImageInline");
        profileImage.src = e.target.result; // Update the image src to the file result
      };
  
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }
  
  function updateUserInfo(userDetails) {
    // Update UI with user details
    let jobTitle = userDetails.jobTitle.split('-');
    document.getElementById('displayName').innerText = `${userDetails.displayName}`;
    document.getElementById('displayEmail').innerText = `${userDetails.email}`;
    document.getElementById('displayDesignation').innerText = `${jobTitle[0]}`;
    document.getElementById('displayMobile').innerText = `${userDetails.mobilePhone}`;
  
    document.getElementById("name").value = `${userDetails.displayName}`;
    document.getElementById("designation").value = `${jobTitle[0]}`;
    document.getElementById("mobileNumber").value = `${userDetails.mobilePhone}`;
    document.getElementById("email").value = `${userDetails.email}`;
  }
  
  function copyContent() {
    const range = document.createRange();
        const selection = window.getSelection();
        const container = document.querySelector('.containers');
  
        range.selectNodeContents(container);
        selection.removeAllRanges();
        selection.addRange(range);
  
        try {
          document.execCommand('copy')
          alert('Content copied to clipboard')
        } catch (err) {
          alert('Failed to Copy Content');
        }
  
        selection.removeAllRanges()
      }