
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import generarId from '../helpers/token.js';

const __filname = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filname);

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function(req, file, cb) {
        cb(null, generarId() + path.extname(file.originalname));
    }
})

const upload = multer({ storage });

export default upload;