// File: File.js
const { readFile } = require('fs/promises');
const { error } = require('./constants');

const DEFAULT_OPTION = {
    maxLines: 3,
    fields: ['id', 'name', 'profession', 'age'],
};

class File {
    static async csvToJson(filePath) {
        const content = await readFile(filePath, 'utf8');
        const csvLines = content.split(/\r?\n/);
        this.validateCsvContent(csvLines);
        return this.parseCsvToJson(csvLines);
    }

    static validateCsvContent(csvLines, options = DEFAULT_OPTION) {
        const [header, ...lines] = csvLines;

        this.validateHeader(header, options.fields);
        this.validateLinesLength(lines, options.maxLines);
    }

    static validateHeader(header, fields) {
        const isHeaderValid = fields.every(field => header.includes(field));

        if (!isHeaderValid) {
            throw new Error(error.FILE_FIELDS_ERROR_MESSAGE);
        }
    }

    static validateLinesLength(lines, maxLines) {
        if (lines.length === 0 || lines.length > maxLines) {
            throw new Error(error.FILE_LENGTH_ERROR_MESSAGE);
        }
    }

    static parseCsvToJson(csvLines) {
        const [header, ...lines] = csvLines;
        const headers = header.split(',').map(h => h.trim());

        return lines.map(line => this.convertLineToJson(line, headers));
    }

    static convertLineToJson(line, headers) {
        return line.split(',').reduce((json, value, index) => {
            const trimmedValue = value.trim();
            json[headers[index]] = isNaN(trimmedValue) ? trimmedValue : Number(trimmedValue);
            return json;
        }, {});
    }
}

module.exports = File;
