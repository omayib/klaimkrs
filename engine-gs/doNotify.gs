function doNotify(req){
          const { parameter, postData: { contents, type } = {} } = req;
          const payload = JSON.parse(contents);
            var dataDosen={
              no_surat : payload.no_surat,
              email : payload.dosen_email,
              status_pengajuan:payload.review_status,
              review_feedback:payload.review_feedback
            }
            var dataMhs={
              no_surat : payload.no_surat,
              email : payload.mahasiswa_email,
              status_pengajuan:payload.review_status,
              review_feedback:payload.review_feedback
            }
            var templateForDosen="email_for_reviewer";
            if(payload.review_status!=="PENDING"){
              templateForDosen = "email_for_reviewer_result"
            }
            notify(dataDosen,templateForDosen);
            notify(dataMhs,"email_for_applicant");
      return response().json({
              status: true,
              message: {dosen:dataDosen,mahasiswa:dataMhs}
          }); 
}
function notify(data,template) {
    var template = HtmlService.createTemplateFromFile(template);
    template.no_surat=data.no_surat;
    template.status_pengajuan=data.status_pengajuan;
    template.review_feedback=data.review_feedback;
    var message = template.evaluate().getContent();
    var options =  {htmlBody: message, name: "Prodi Informatika"};
    GmailApp.sendEmail(
        data.email, "Review Konversi", '', options
      );
}
