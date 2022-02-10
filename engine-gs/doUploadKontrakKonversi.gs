function doUploadKontrakKonversi(e) {
  var surat = e.parameter.noSurat;
  var jenis = e.parameter.jenis;
  const folderId = "1AtwMQOhfJzZQ0gvqOF2D9JN9xvA6N5ji";
  
  var nameEdited=getCode()+"-"+e.parameter.filename;
  const blob = Utilities.newBlob(JSON.parse(e.postData.contents), e.parameter.mimeType, nameEdited);
  const file = DriveApp.getFolderById(folderId).createFile(blob);
  
  doInsertBuktiKegiatan(surat, file.getUrl(), jenis)
  
  return response().json({
         status: true,
         data: {fileUrl: file.getUrl()}
      });
}