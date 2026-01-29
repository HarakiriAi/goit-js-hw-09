const formData = {
    email: "",
    message: "",
};

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

const data = localStorage.getItem(STORAGE_KEY);
if (data) {
    const parsedData = JSON.parse(data);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("input", (event) => {
    const { name, value } = event.target;

    if (!name) {
        return;
    }

    formData[name] = value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Plesae fill all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    form.reset();

    formData.email = "";
    formData.message = "";
});
