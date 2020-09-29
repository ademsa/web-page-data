export default function ArrayOfObjectsToCSV(items, headers) {
    let csv = "";

    if (items.length === 0) {
        return csv;
    }

    // Header
    let keys = new Map();
    if (headers !== undefined) {
        keys = headers;
    } else {
        items.forEach(item => {
            Object.keys(item).forEach(key => {
                keys.set(key, key);
            })
        });
        keys = Array.from(keys.values());
    }
    keys.forEach(key => {
        csv += "\"" + key + "\",";
    });
    csv = csv.slice(0, csv.lastIndexOf(",")) + "\r\n";

    // Rows
    items.forEach(item => {
        let row = "";
        keys.forEach((key, idx) => {
            if (headers !== undefined) { // Table
                row += "\"" + item[idx] + "\",";
            } else if (Object.keys(item).indexOf(key) > -1) {
                if (typeof item[key] === "number" || typeof item[key] === "boolean") {
                    row += item[key] + ",";
                } else {
                    row += "\"" + item[key] + "\",";
                }
            } else { // In case one of the objects does not contain key
                csv += "\"\",";
            }
        });
        csv += row.slice(0, row.lastIndexOf(",")) + "\r\n";
    });

    return csv;
}