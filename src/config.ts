import { fileURLToPath } from 'url';
import { dirname } from 'path';
export const API_VERSION = process.env.API_VERSION || 'v1';
export const PROTOCOL = process.env.PROTOCOL || 'http';
export const DOMAIN = process.env.DOMAIN || 'localhost';
export const PORT = process.env.PORT || 3333;

export const DEFAULT_BUCKET = process.env.DEFAULT_BUCKET || 'verifiable-credentials';
export const AVAILABLE_BUCKETS = process.env.AVAILABLE_BUCKETS
    ? process.env.AVAILABLE_BUCKETS.split(',')
    : DEFAULT_BUCKET;

export const STORAGE_TYPE = process.env.STORAGE_TYPE || 'local'; // local | gcp
export const LOCAL_DIRECTORY = process.env.LOCAL_DIRECTORY || 'uploads';
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
