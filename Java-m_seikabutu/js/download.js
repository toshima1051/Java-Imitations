function download_csv(){

const blob = new Blob([''],{type:"text/csv"});

const link = document.createElement('a');

link.href = URL.createObjectURL(blob);

link.download = 'テスト記録用.csv';

link.click();

};

function download_txt(){

const blob = new Blob([''],{type:"text/txt"});

const link = document.createElement('a');

link.href = URL.createObjectURL(blob);

link.download = 'テスト記録用.txt';

link.click();

};