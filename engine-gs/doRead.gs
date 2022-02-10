/**
* Read from sheet and return map key-value
* javascript object
*/
function _read( sheet, id ) {
  var data         = sheet.getDataRange().getValues();
  var header       = data.shift();
  
  // Find All
  var result = data.map(function( row, indx ) {
    var reduced = header.reduce( function(accumulator, currentValue, currentIndex) {
      accumulator[ currentValue ] = row[ currentIndex ];
      return accumulator;
    }, {});

    reduced.row = indx + 2;
    return reduced;
    
  });
  
  // Filter if id is provided
  if( id ) {
    var filtered = result.filter( function( record ) {
      if ( record.no_surat.toUpperCase() === id.toUpperCase() ) {
        return true;
      } else {
        return false;
      }
    });
    
    return filtered;
  } 
  
  return result;
  
}
/**
* Read from sheet and return map key-value
* javascript object
*/
function _readMatkul( sheet, id ) {
  var data         = sheet.getDataRange().getValues();
  var header       = data.shift();
  
  // Find All
  var result = data.map(function( row, indx ) {
    var reduced = header.reduce( function(accumulator, currentValue, currentIndex) {
      accumulator[ currentValue ] = row[ currentIndex ];
      return accumulator;
    }, {});

    reduced.row = indx + 2;
    return reduced;
    
  });
  
  // Filter if id is provided
  if( id ) {
    var filtered = result.filter( function( record ) {
      if ( record.id === id ) {
        return true;
      } else {
        return false;
      }
    });
    
    return filtered;
  } 
  
  return result;
  
}
function _readDosen( sheet, id ) {
  var data         = sheet.getDataRange().getValues();
  var header       = data.shift();
  
  // Find All
  var result = data.map(function( row, indx ) {
    var reduced = header.reduce( function(accumulator, currentValue, currentIndex) {
      accumulator[ currentValue ] = row[ currentIndex ];
      return accumulator;
    }, {});

    reduced.row = indx + 2;
    return reduced;
    
  });
  
  // Filter if id is provided
  if( id ) {
    var filtered = result.filter( function( record ) {
      if ( record.id === id ) {
        return true;
      } else {
        return false;
      }
    });
    
    return filtered;
  } 
  
  return result;
  
}
function _readOpsiKegiatan( sheet, id ) {
  var data         = sheet.getDataRange().getValues();
  var header       = data.shift();
  
  // Find All
  var result = data.map(function( row, indx ) {
    var reduced = header.reduce( function(accumulator, currentValue, currentIndex) {
      accumulator[ currentValue ] = row[ currentIndex ];
      return accumulator;
    }, {});

    reduced.row = indx + 2;
    return reduced;
    
  });
  
  // Filter if id is provided
  if( id ) {
    var filtered = result.filter( function( record ) {
      if ( record.id === id ) {
        return true;
      } else {
        return false;
      }
    });
    
    return filtered;
  } 
  
  return result;
  
}
function test_read_dosen(){
  var id = SpreadsheetApp.getActiveSpreadsheet().getId();
  var table = SpreadsheetApp.openById(id).getSheetByName("dosen");
  var a= _readDosen(table);
  console.log(a[0]);
}
function test_read_matkul(){
  var id = SpreadsheetApp.getActiveSpreadsheet().getId();
  var table = SpreadsheetApp.openById(id).getSheetByName("konversi");
  var a= _readMatkul(table,3513);
  console.log(a);
}