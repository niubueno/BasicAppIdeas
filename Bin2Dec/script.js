function convert() {
    
    var txtBinary = document.getElementById("inp_binary").value;
    if (!/^[0-1]+$/.test(txtBinary)) {
        alert("You can only type 0's and 1's !")
    } else {
        if (!txtBinary == "") {
            document.getElementById("inp_decimal").value = parseInt(txtBinary, 2);
        }
    }
}

function clearFields() {
    document.getElementById("inp_binary").value = "";
    document.getElementById("inp_decimal").value = "";
}
