export function validateForm() {
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("form");
        const postableContent = document.getElementById("postable-content");
        const fields = form.querySelectorAll("input[required], textarea[required]");
        const sendConfirmation = document.getElementById("send-confirmation");
        const submitBtn = form.querySelector('button[type="submit"]');

        const invalidClasses = ["animate__headShake", "border-red-600", "focus:ring-2", "focus:ring-red-600"];
        const grayBorder = "border-gray-300";
        const enabledClasses = ["text-white", "dark:text-black", "active:text-main", "dark:active:text-white", "bg-black", "dark:bg-main", "cursor-pointer", "fill-white", "dark:fill-black", "active:fill-main", "dark:active:fill-white"];
        const disabledClasses = ["text-gray-400", "active:text-gray-400", "bg-gray-300", "cursor-not-allowed", "fill-gray-400", "active:fill-gray-400"];

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        function isFieldValid(field) {
            const value = field.value.trim();
            const isEmailField = field.id === "email";

            if (isEmailField) {
                return field.validity.valid && emailRegex.test(value)
            }

            return value.length > 0;
        }

        function validateFieldUI(field) {
            const wrapper = field.closest(".field-wrapper");
            const errorMsg = wrapper.querySelector("p");
            const successIcon = wrapper.querySelector("svg");

            const valid = isFieldValid(field);

            if(!valid) {
                field.classList.remove(grayBorder);
                field.classList.add(...invalidClasses);

                errorMsg.classList.remove("invisible");
                successIcon.classList.add("hidden");
            } else {
                field.classList.remove(...invalidClasses);
                field.classList.add(grayBorder);

                errorMsg.classList.add("invisible");
                successIcon.classList.remove("hidden");
            }

            return valid
        }

        function isFormValid() {
            return [...fields].every(isFieldValid);
        }

        function updateButtonState() {
            const valid = isFormValid()

            submitBtn.disabled = !valid;

            if (valid) {
                submitBtn.classList.remove(...disabledClasses);
                submitBtn.classList.add(...enabledClasses);
            } else {
                submitBtn.classList.remove(...enabledClasses);
                submitBtn.classList.add(...disabledClasses);
            }
        }

        function resetFormUI() {
            fields.forEach((field) => {
                field.value = "";

                field.classList.remove(...invalidClasses);
                field.classList.add(grayBorder);

                const wrapper = field.closest(".field-wrapper");
                const errorMsg = wrapper.querySelector("p");
                const successIcon = wrapper.querySelector("svg");

                errorMsg.classList.add("invisible");
                successIcon.classList.add("hidden");
            });

            updateButtonState();
        }

        form.addEventListener("submit", (e) => {
            if (!isFormValid()) {
                e.preventDefault();
                return;
            }

            submitBtn.disabled = true;
            submitBtn.classList.add(...disabledClasses);

            sendConfirmation.classList.remove("invisible");

            postableContent.classList.remove("animate__backInLeft");
            postableContent.classList.add("animate__backOutRight");

            setTimeout(() => {
                form.reset();
                resetFormUI();

                postableContent.classList.remove("animate__backOutRight");
                postableContent.classList.add("animate__backInLeft");
            }, 500);
        });

        fields.forEach((field) => {
            field.addEventListener("focus", () => {
                sendConfirmation.classList.add("invisible");
            });

            field.addEventListener("blur", () => {
                validateFieldUI(field);
            });

            field.addEventListener("input", () => {
                updateButtonState();
            });
        });

        updateButtonState();
    });
}
