// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


/* drop drag
const dropzone = document.querySelector('.dropzone');
const fileInput = dropzone.querySelector('input[type="file"]');
const submitBtn = document.getElementById('submitBtn');
const previewContainer = document.querySelector('.img-container');
const previewImg = previewContainer.querySelector('.preview-img');
let selectedFile = null;

dropzone.addEventListener('click', () => fileInput.click());

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    selectedFile = files[0];
    displayFilePreview(selectedFile);
    enableSubmitButton();
  }
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    selectedFile = e.target.files[0];
    displayFilePreview(selectedFile);
    enableSubmitButton();
  }
});

const exampleImages = document.querySelectorAll('.example-img');
exampleImages.forEach(img => {
  img.addEventListener('dragstart', (e) => {
    selectedFile = img.src;
    displayFilePreview(selectedFile, true);
    enableSubmitButton();
  });
});

function enableSubmitButton() {
  if (selectedFile) {
    submitBtn.disabled = false;
  }
}

function displayFilePreview(file, isExampleImage = false) {
  const fileNameDisplay = document.createElement('p');
  fileNameDisplay.textContent = `Selected file: ${isExampleImage ? 'Example Image' : file.name}`;
  fileNameDisplay.className = 'file-name';

  const imagePreview = document.createElement('img');
  imagePreview.className = 'preview-img';

  if (isExampleImage) {
    imagePreview.src = file;
  } else {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Clear previous content
  while (previewContainer.firstChild) {
    previewContainer.removeChild(previewContainer.firstChild);
  }

  previewContainer.appendChild(fileNameDisplay);
  previewContainer.appendChild(imagePreview);
}

submitBtn.addEventListener('click', () => {
  if (selectedFile) {
    // Process the selected file (upload or handle as needed)
    console.log('Submitting', selectedFile);
    // Enable other buttons if needed
    document.getElementById('downloadBpmnBtn').disabled = false;
    document.getElementById('downloadDrawioBtn').disabled = false;
  }
});**/
const dropzone = document.querySelector('.dropzone');
const fileInput = dropzone.querySelector('input[type="file"]');
const submitBtn = document.getElementById('submitBtn');
const previewContainer = document.querySelector('.img-container');
const previewImg = previewContainer.querySelector('.preview-img');
const dropzoneLabel = dropzone.querySelector('p');
const downloadBpmnBtn = document.getElementById('downloadBpmnBtn');
const downloadDrawioBtn = document.getElementById('downloadDrawioBtn');
let selectedFile = null;

dropzone.addEventListener('click', () => fileInput.click());

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    selectedFile = files[0];
    displayFilePreview(selectedFile);
    dropzoneLabel.textContent = `Dropped file: ${selectedFile.name}`;
    enableButtons();
  }
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    selectedFile = e.target.files[0];
    displayFilePreview(selectedFile);
    dropzoneLabel.textContent = `Selected file: ${selectedFile.name}`;
    enableButtons();
  }
});

const exampleImages = document.querySelectorAll('.example-img');
exampleImages.forEach(img => {
  img.addEventListener('dragstart', (e) => {
    selectedFile = img.src;
    displayFilePreview(selectedFile, true);
    dropzoneLabel.textContent = `Selected file: Example Image`;
    enableButtons();
  });
});

function enableButtons() {
  submitBtn.disabled = false;
  downloadBpmnBtn.disabled = false;
  downloadDrawioBtn.disabled = false;
}

submitBtn.addEventListener('click', () => {
  if (selectedFile) {
    // Process the selected file (upload or handle as needed)
    console.log('Submitting', selectedFile);
    // Example action: reset state after submission
    resetState();
  }
});

downloadBpmnBtn.addEventListener('click', () => {
  if (selectedFile) {
    // Example action: initiate download of BPMN XML
    console.log('Downloading BPMN XML for', selectedFile);
    // Example action: reset state after download
    resetState();
  }
});

downloadDrawioBtn.addEventListener('click', () => {
  if (selectedFile) {
    // Example action: initiate download of draw.io (beta) file
    console.log('Downloading draw.io (beta) for', selectedFile);
    // Example action: reset state after download
    resetState();
  }
});

function displayFilePreview(file, isExampleImage = false) {
  const fileNameDisplay = document.createElement('p');
  fileNameDisplay.textContent = `Selected file: ${isExampleImage ? 'Example Image' : file.name}`;
  fileNameDisplay.className = 'file-name';

  const imagePreview = document.createElement('img');
  imagePreview.className = 'preview-img';

  if (isExampleImage) {
    imagePreview.src = file;
  } else {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Clear previous content
  while (previewContainer.firstChild) {
    previewContainer.removeChild(previewContainer.firstChild);
  }

  previewContainer.appendChild(fileNameDisplay);
  previewContainer.appendChild(imagePreview);
}

function resetState() {
  // Reset selected file and disable buttons
  selectedFile = null;
  submitBtn.disabled = true;
  downloadBpmnBtn.disabled = true;
  downloadDrawioBtn.disabled = true;

  // Clear preview and label
  while (previewContainer.firstChild) {
    previewContainer.removeChild(previewContainer.firstChild);
  }
  dropzoneLabel.textContent = 'Drop file here or click to browse';
}













/////
