function doInsert(req,sheet){
  const { parameter, postData: { contents, type } = {} } = req;
  const payload = JSON.parse(contents);
  var mahasiswa_email = "";
  //insert or replace
  payload.forEach(function(e,i){
      console.log("e  "+JSON.stringify(e));
      console.log("e.id  "+e.id);
      mahasiswa_email = e.email;
      var result = _readMatkul(sheet,e.id);
      var item = result[0];
      if(!result.length){
        console.log("insert new record to last column");
        sheet.getRange(sheet.getLastRow()+1,1,1,11)
          .setValues([[e.id,e.email,e.no_surat,
                      e.objective,e.durasi,e.kode,
                      e.matkul,e.sks,e.angka,e.huruf,"new"]]);
      }else{
        console.log("update with id "+item.id);  
        if(e.status ==="delete"){
          sheet.getRange(item.row,1,1,11).clearContent();
        }else{
          sheet.getRange(item.row,1,1,11)
          .setValues([[e.id,e.email,e.no_surat,
                      e.objective,e.durasi,e.kode,
                      e.matkul,e.sks,e.angka,e.huruf,"updated"]]);

        }
      }
  })
  

  return response().json({
         status: true,
         data: {"payload":req,"mahasiswa_email":mahasiswa_email}
      });
}
function logToken(){
  var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.LIMITED);
  var status = authInfo.getAuthorizationStatus();
  var url = authInfo.getAuthorizationUrl();
  Logger.log(authInfo);
  Logger.log(status);
  Logger.log(url);
}
function test_write_matkul(){
  var id = SpreadsheetApp.getActiveSpreadsheet().getId();
  var table = SpreadsheetApp.openById(id).getSheetByName("konversi");
  var a= _readMatkul(table,3513).shift();
  console.log(a.row);

  table.getRange(a.row,1,1,11).setValues([["a","b","c","d","e","f","g","h","i","j","k"]]);

}