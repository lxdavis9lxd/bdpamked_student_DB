const {getRows, insertRow, updateRow, deleteRow} = require('../database/query');
var SqlString = require('sqlstring');

exports.find = async (offset, pageSize) => {
    const query = `SELECT  t.* FROM SPKusers t  LIMIT ?, ?`;
    return getRows(query,[offset,pageSize]);
}

exports.findOne = async (username) => {
    const query = `SELECT  t.* FROM SPKusers t  WHERE t.username=? LIMIT 0,1`;
    return getRows(query,[username]);
}

exports.insert = async (object) => {
    const query = `INSERT INTO SPKusers set ?`;
    const id = await insertRow(query, object);
    if(id>0){
        return this.findOne(id);
    }
    else{
        return this.findOne(object.username);
    }
    
}

exports.update = async (username, object) => {
    const updateKeys = [];
    let updateValues = [];
    for (const key in object) {
        updateKeys.push(`${key}=?`);
        updateValues.push(`${object[key]}`);
    }
    let query = `UPDATE SPKusers SET ? WHERE username= ?`;
    updateValues = updateValues.concat([username])
    query = query.replace("?", updateKeys.join(","));
    const result = await updateRow(query, updateValues);
    return result ? this.findOne(username) : null;
}

exports.remove = async (username) => {
    const query = `DELETE FROM SPKusers Where username= ? `;
    return deleteRow(query,[username]);
}

exports.count = async () => {
    const query = `SELECT count(*) TotalCount FROM SPKusers t  `;
    const result = await getRows(query);
    if (result && result[0] && result[0].TotalCount && result[0].TotalCount > 0) {
        return result[0].TotalCount;
    } else {
        return 0;
    }
}

exports.search = async (offset, pageSize, key) => {
    const query = `SELECT  t.* FROM SPKusers t  WHERE  LOWER(t.username) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.pword) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.userrole) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.employeenumber) LIKE `+SqlString.escape('%'+key+'%')+` LIMIT ?, ?`;
    return getRows(query,[offset, pageSize]);
}

exports.searchCount = async (key) => {
    const query = `SELECT count(*) TotalCount FROM SPKusers t  WHERE  LOWER(t.username) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.pword) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.userrole) LIKE `+SqlString.escape('%'+key+'%')+` OR LOWER(t.employeenumber) LIKE `+SqlString.escape('%'+key+'%')+` `;
    const result = await getRows(query);
    if (result && result[0] && result[0].TotalCount && result[0].TotalCount > 0) {
        return result[0].TotalCount;
    } else {
        return 0;
    }
}


