const modal = document.getElementById("imageModalV2");
const modalImg = document.getElementById("modalImgV2");
const modalClose = modal?.querySelector(".image-modal-close");
let lastFocusedElement = null;

function openImageModal(image) {
    lastFocusedElement = document.activeElement;
    modalImg.src = image.currentSrc || image.src;
    modalImg.alt = image.alt || "Увеличенное изображение";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    modalClose.focus();
}

function closeImageModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImg.removeAttribute("src");
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

if (modal && modalImg && modalClose) {
    document.querySelectorAll("#archive .media-grid img, #gallery .media-grid img").forEach((image) => {
        image.tabIndex = 0;
        image.setAttribute("role", "button");
        image.setAttribute("aria-label", `Открыть изображение: ${image.alt || "без описания"}`);
        image.addEventListener("click", () => openImageModal(image));
        image.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openImageModal(image);
            }
        });
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal || event.target === modalImg) {
            closeImageModal();
        }
    });

    modalClose.addEventListener("click", closeImageModal);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeImageModal();
        }
    });
}
