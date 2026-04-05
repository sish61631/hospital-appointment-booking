const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./hospital.db');

const ensureDoctorColumns = (callback) => {
  db.all(`PRAGMA table_info(doctors)`, [], (err, rows) => {
    if (err) return callback();
    const columns = rows.map(row => row.name);
    const tasks = [];
    if (!columns.includes('bio')) {
      tasks.push(`ALTER TABLE doctors ADD COLUMN bio TEXT`);
    }
    if (!columns.includes('experience_years')) {
      tasks.push(`ALTER TABLE doctors ADD COLUMN experience_years INTEGER DEFAULT 0`);
    }

    const runNext = () => {
      if (tasks.length === 0) {
        return callback();
      }
      db.run(tasks.shift(), runNext);
    };

    runNext();
  });
};

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'patient'
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS doctors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    specialty TEXT,
    email TEXT UNIQUE,
    rating REAL DEFAULT 0,
    review_count INTEGER DEFAULT 0
  )`);

  ensureDoctorColumns(() => {
    db.run(`INSERT OR IGNORE INTO doctors (name, specialty, email, bio, experience_years) VALUES
      ('Dr. Satish Singh', 'Cardiology', 'SatishSingh@Gmail.com', 'Expert cardiologist with 15+ years of experience in heart disease treatment.', 15),
      ('Dr. Shubham Unkade', 'Dermatology', 'ShubhamUnkade@Gmail.com', 'Specialized in skin care and cosmetic dermatology with modern techniques.', 8),
      ('Dr. Saurabh Khushawa', 'Orthopedics', 'SaurabhKhushawa@Gmail.com', 'Orthopedic surgeon specializing in joint replacement and sports injuries.', 12)`);
  });

  db.run(`CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id INTEGER,
    doctor_id INTEGER,
    date TEXT,
    time TEXT,
    status TEXT DEFAULT 'pending',
    notes TEXT,
    FOREIGN KEY (patient_id) REFERENCES users(id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS ratings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id INTEGER,
    doctor_id INTEGER,
    rating INTEGER,
    review TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES users(id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT,
    message TEXT,
    type TEXT,
    read INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )`);

  // Insert admin and doctor users
  db.run(`INSERT OR IGNORE INTO users (name, email, password, role) VALUES
    ('Admin User', 'admin@medicare.com', '$2b$10$.HB1/nnjfX3.efFH/OnCNOTS3esHckPceyaR1gSVjohbrFtFLpM9C', 'admin'),
    ('Dr. Doctor', 'doctor@hospital.com', '$2b$10$UHJW155Wk0Jp0OSNUWd/c.B4jQW3tODXtGBNaOBGc46iTzGH5dTN.', 'doctor')`);
});

module.exports = db;