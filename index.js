const fs = require('fs');

fs.readdir('/home/manguberdi/Code',(err, files)=>{
    let data=[];
    for(let i=0; i<files.length;i++){
        let datalist={
            id:i,
            filename:files[i]
        }
        data.push(datalist);

    }
    let data1=JSON.stringify(data);
    fs.writeFileSync('list.json', data1);
});
