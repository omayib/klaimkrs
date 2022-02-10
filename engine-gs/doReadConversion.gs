function doReadConversion(req,sheet){
    var nomorSuratRekomendasi = req.parameter.sr;
    var data=_read(sheet,nomorSuratRekomendasi);



  return response().json({
         status: true,
         data: data
      });
}
function test_doReadConversion(){
  var id = SpreadsheetApp.getActiveSpreadsheet().getId();
  var table = SpreadsheetApp.openById(id).getSheetByName("konversi");
  var a = _read(table,"001/FIK-IF/AMIKOM/REK.STUIND/07/2021");
  console.log(a);
}