var reqSample={"email":"ss","nim":"12","kegiatan":"Magang Bersertifikat"};

var id = SpreadsheetApp.getActiveSpreadsheet().getId();
var table = SpreadsheetApp.openById(id).getSheetByName("master");



function doInsertProfile(req,sheet){
  const { parameter, postData: { contents, type } = {} } = req;
  const payload = JSON.parse(contents);
  //insert or replace
      var result = _read(sheet,payload.no_surat).shift();
      if(result===undefined){
        Logger.log("insert profil");
        console.log("insert new record to last column");
        sheet.getRange(table.getLastRow()+1,1,1,9)
          .setValues([[payload.no_surat,new Date(),payload.email,
                      payload.kegiatan,payload.nama,payload.nim,payload.dosen_nama,payload.dosen_email,"new"]]);
        
      }else{
        Logger.log("update profil");
        sheet.getRange(result.row,1,1,9)
          .setValues([[payload.no_surat,new Date(),payload.email,
                      payload.kegiatan,payload.nama,payload.nim,payload.dosen_nama,payload.dosen_email,"update"]]);
        
      }    
  
  return response().json({
         status: true,
         data: payload
      });
 
}
function test_write_master(){
  var id = SpreadsheetApp.getActiveSpreadsheet().getId();
  var table = SpreadsheetApp.openById(id).getSheetByName("master");
  var a= _read(table,"002/FIK-IF/AMIKOM/REK.STUIND/07/2021").shift();
    console.log(a);
  if(a===undefined){
    console.log("a");
  }else{

    console.log("b" + a.row);
  }
  // table.getRange(a.row,1,1,6).setValues([["a","b","c","d","e","f"]]);

}