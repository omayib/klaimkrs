function test_write_matkul(){
  doInsertBuktiKegiatan('001/FIK-IF/AMIKOM/REK.STUIND/07/2021',"url","kontrakkonversi");
}

function doInsertBuktiKegiatan(noSurat, fileUrl, jenisBukti){
  var columnTobeUpdate;
  switch(jenisBukti){
    case "sertifikat":
      columnTobeUpdate = 10;
    break;
    case "kontrakkonversi":
      columnTobeUpdate = 11;
    break;
    case "suratrekomendasi":
      columnTobeUpdate = 12;
    break;
    case "laporan":
      columnTobeUpdate = 13;
    break;
    case "nilai":
      columnTobeUpdate = 14;
    break;
    case "khs":
      columnTobeUpdate = 15;
    break;
  }
  var id = SpreadsheetApp.getActiveSpreadsheet().getId();
  var table = SpreadsheetApp.openById(id).getSheetByName("master");
  var a= _read(table,noSurat).shift();
  table.getRange(a.row,columnTobeUpdate).setValue(fileUrl);
}