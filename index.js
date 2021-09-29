$(document).ready(() => {
  const files = [
    { id: 1, name: '1.pdf' },
    { id: 2, name: '2.pdf' },
    { id: 3, name: '3.pdf' }
  ];
  const baseUrlPrefix = 'pdf/';
  let selectedTabId = 0;
  
  // Open file
  const openFile = () => {
    // Get file url by selected id.
    let file = files.find((f) => {
      return Number(f.id) === Number(selectedTabId);
    });

    // full file url
    let fileUrl = baseUrlPrefix + file.name;
    
    // Open file.
    window.PDFViewerApplication.open(fileUrl);

    // Change the tab title as file name
    $('.tab.active').html(file.name).prop('title', file.name);
  };

  $('.tab').on('click', (e) => {
    // Clicked tab
    const target = $(e.target);
    // Change the tab status and color
    $('.tab').removeClass('active');
    target.addClass('active');

    let id = Number(target.data('id'));
    if (id === selectedTabId) return;
    selectedTabId = id;

    // Open file
    openFile();
  });

  // Open file when load page.
  $('.tab.active').click();
});