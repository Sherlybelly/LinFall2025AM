document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnRun");
    const nameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const msg = document.getElementById("msg");

   
    nameInput.value = localStorage.getItem("userName") || "";
    emailInput.value = localStorage.getItem("userEmail") || "";
    let subscribed = localStorage.getItem("subscribed") === "true";

    btn.textContent = subscribed ? "Unsubscribe" : "Subscribe";

    btn.addEventListener("click", () => {
        const name = nameInput.value || "Guest";
        const email = emailInput.value || "N/A";

        

        subscribed = !subscribed;
        localStorage.setItem("subscribed", subscribed);

        btn.textContent = subscribed ? "Unsubscribe" : "Subscribe";
        msg.textContent = subscribed
            ? `Welcome, ${name}! Your email is ${email}.`
            : `${name}, you have unsubscribed.`;

        setTimeout(() => {
            msg.textContent = "";
        }, 3000);
    });
});
