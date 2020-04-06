import Papa from 'papaparse';

async function fetchCsv({url, encoding, omitHeader}){
    const promise = new Promise((resolve,reject) =>{
        Papa.parse(url, {
            download: true,
            encoding,
            dynamicTyping: true,
            header: omitHeader,
            complete: r => r.errors && r.errors.length ? reject(r.errors) : resolve(r.data)
        });
    });

    return await promise;
}

export 
{
    fetchCsv
};
