function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["phoneNo"] = document.getElementById("phoneNo").value;
    formData["sex"] = document.getElementById("sex").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.phoneNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.sex;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function onEdit(td) {
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("phoneNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("sex").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.phoneNo;
    selectedRow.cells[2].innerHTML = formData.sex;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ')) {
    }
}
