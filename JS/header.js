const wideSearchForm = document.querySelector(
  ".wide-header-items-container .wide-search-form"
);
const wideSearchInput = document.querySelector(".wide-search-form input");

wideSearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  wideSearchInput.focus();
});
