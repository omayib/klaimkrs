function doReadSuratRekomendasi(req,sheet){
  var nomorSuratRekomendasi = req.parameter.sr;
  var data=_read(sheet,nomorSuratRekomendasi);

  return response().json({
         status: true,
         data: data
      });
  
}
function test_getRow(){
  var id = SpreadsheetApp.getActiveSpreadsheet().getId();
  var table = SpreadsheetApp.openById(id).getSheetByName("Master");
  var a = _read(table,"002/FIK-IF/AMIKOM/REK.STUIND/07/2021");
  console.log(a);
}