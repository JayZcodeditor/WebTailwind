function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdown-menu');

  // Toggle visibility of the dropdown menu
  dropdownMenu.classList.toggle('hidden');

  // Toggle aria-expanded attribute
  const expanded = dropdownMenu.classList.contains('hidden');
  document.getElementById('menu-button').setAttribute('aria-expanded', !expanded);
}