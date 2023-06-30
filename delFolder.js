const fs = require('fs');

const deleteFolder = (path,folder) => {
  try {
    fs.rmdirSync(path+"/"+folder, { recursive: true });
    console.log(`"${path}" klasörü silindi.`);
  } catch (err) {
    console.error('Klasör silinirken bir hata oluştu:', err);
  }
};

// Kullanım örneği
deleteFolder('C:/Users/yusuf/Desktop/Yeni Klasör');
