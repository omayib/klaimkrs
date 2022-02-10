var spreadsheet_id="1HvGP9XX6ZVzm4Jr6XnzjUb8TmWb_XCVaFllx3mmMZzY";
var sheetNameMaster = "master";
var sheetNameKonversi = "konversi";
var sheetNameDosen = "dosen";
var sheetNameKegiatan = "kegiatan";


// function doGet(parameter){
//   // Serve HTML with no X-Frame-Options header (in Apps Script server-side code).
//   var page = HtmlService.createHtmlOutputFromFile('konversi');
//   page.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
//   return page;
// }
/* Route
 * All Request with Method Get will be proces here
 */
function doGet(req) {
   var action = req.parameter.action;
   var db = SpreadsheetApp.openById(spreadsheet_id);
   var sheetMaster = db.getSheetByName(sheetNameMaster);
   var sheetKonversi = db.getSheetByName(sheetNameKonversi);
   var sheetDosen = db.getSheetByName(sheetNameDosen);
   var sheetKegiatan = db.getSheetByName(sheetNameKegiatan);
  
   switch(action) {
       case "1":
           return doReadSuratRekomendasi(req, sheetMaster);
           break;
       case "2":
           return doReadConversion(req, sheetKonversi);
           break;
      case "3":
          var page = HtmlService.createHtmlOutputFromFile('konversi');
          page.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
          return page;
          break;
      case "4":
          
          const PDF_folder = DriveApp.getFolderById("1AtwMQOhfJzZQ0gvqOF2D9JN9xvA6N5ji");
          
          var page = HtmlService.createHtmlOutputFromFile('summary.html');
          // page.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
          var htmlBody = page.getContent(); 
          const BLOBPDF = Utilities.newBlob(htmlBody, MimeType.HTML).getAs("application/pdf");
          BLOBPDF.setName("file.pdf");
          const pdfFile =  PDF_folder.createFile(BLOBPDF).getId();

          return pdfFile;
          break;
      case "5":
           return doReadDosen(req,sheetDosen);
      break;

      case "11":
          var page = HtmlService.createTemplateFromFile('review');
          page.no_surat=req.parameter.no_surat;
          var html = page.evaluate();
          html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
          return html;
      break;
      case "12":
           return doReadOpsiKegiatan("req",sheetKegiatan);
      break;
       default:
           return response().json({
              status: false,
              message: 'silent!'
           });
   }
}
function aaa(){
  
          //notify ke dosen
          var data={
            no_surat : "001/FIK-IF/AMIKOM/REK.STUIND/07/2021",
            dosen_email : "arif.akbarul@amikom.ac.id"
          }
          notify(data);
  }
function doPost(req){
   var action = req.parameter.action;
   var db = SpreadsheetApp.openById(spreadsheet_id);
   var sheetKonversi = db.getSheetByName(sheetNameKonversi);
   var sheetMaster = db.getSheetByName(sheetNameMaster);
   switch(action) {       
      case "6":
            var result = doInsert(req, sheetKonversi);
            return result;
           break;
      case "7":
          return doUploadKontrakKonversi(req);
          break;
      case "8":
          return doInsertProfile(req,sheetMaster);
          break;
      case "9":
          var result = doInsertReview(req,sheetMaster);
          
          return doNotify(req);
          break;
          
      case "10":
          
          return doNotify(req);
         
          break;
       default:
           return response().json({
              status: false,
              message: 'silent!a'
           });
   }
}

function getSheetMaster(){
   var db = SpreadsheetApp.openById(spreadsheet_id);
   return db.getSheetByName(sheetMaster);
}

// function response() {
//    return {
//       json: function(data) {
//          return ContentService
//             .createTextOutput(JSON.stringify(data))
//             .setMimeType(ContentService.MimeType.JSON);
//       }
//    }
// }