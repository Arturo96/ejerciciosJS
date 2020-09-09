const iconTheme = document.getElementById("dark-light");

export const changeTheme = () => {
	iconTheme.classList.toggle("fa-moon");
	iconTheme.classList.toggle("fa-sun");
	document.body.classList.toggle("dark");
};
