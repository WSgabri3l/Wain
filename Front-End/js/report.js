/* Verificacao dos Campos de Denuncia */

const reportOptions = document.querySelectorAll("input[name='question']");

const sendButtonReport = document.querySelector("#send-report");
const cancelButtonReport = document.querySelector("#cancel");

reportOptions.forEach(reportOptions =>{

    reportOptions.addEventListener("change", (event) =>{

        sendButtonReport.style.backgroundColor = "#EBF21B";
        sendButtonReport.style.color = "#000";

        sendButtonReport.disabled = false;

    });

});

cancelButtonReport.addEventListener("click", (event) =>{

    console.log("peixe")
    closeModal(modalReport, modalDropdownLever);

});