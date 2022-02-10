function doReadDosen(req,sheet){
    var data=_readDosen(sheet);

  return response().json({
         status: true,
         data: data
      });
}
function test_doReadDosen(){
  
   var id = SpreadsheetApp.getActiveSpreadsheet().getId();
  var table = SpreadsheetApp.openById(id).getSheetByName("dosen");
  var a= doReadDosen("",table);
  console.log(a.getContent());
}