
function doReadOpsiKegiatan(req,sheet){
  var data=_readOpsiKegiatan(sheet,"");

  return response().json({
         status: true,
         data: data
      });
  
}

function test_getRow(){
  var id = SpreadsheetApp.getActiveSpreadsheet().getId();
  var table = SpreadsheetApp.openById(id).getSheetByName("kegiatan");
  var a = _readOpsiKegiatan(table);
  console.log(a);
}

